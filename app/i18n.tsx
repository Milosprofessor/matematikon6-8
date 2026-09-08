"use client";

import { createContext, ReactNode, RefObject, useContext, useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { localize, localizeMathText } from "./transliteration";
import type { ScriptChoice } from "./transliteration";

export { localize, localizeMathText, toCyrillic } from "./transliteration";
export type { ScriptChoice } from "./transliteration";
const scriptKey = "matematikon68-script";

const ScriptContext=createContext<ScriptChoice>("cyrl");
export function ScriptProvider({script,children}:{script:ScriptChoice;children:ReactNode}){return <ScriptContext.Provider value={script}>{children}</ScriptContext.Provider>}
export function useCurrentScript(){return useContext(ScriptContext)}

const scriptEvent="matematikon68-script-change";
const getScriptSnapshot=():ScriptChoice=>localStorage.getItem(scriptKey)==="latn"?"latn":"cyrl";
const getServerScriptSnapshot=():ScriptChoice=>"cyrl";
const subscribeToScript=(notify:()=>void)=>{const onChange=()=>notify();window.addEventListener("storage",onChange);window.addEventListener(scriptEvent,onChange);return()=>{window.removeEventListener("storage",onChange);window.removeEventListener(scriptEvent,onChange)}};
export function useScriptPreference(){
  const script=useSyncExternalStore(subscribeToScript,getScriptSnapshot,getServerScriptSnapshot);
  const setScript=(next:ScriptChoice)=>{localStorage.setItem(scriptKey,next);window.dispatchEvent(new Event(scriptEvent))};
  return {script,setScript};
}

const skipped=(node:Node)=>{
  const parent=node.nodeType===Node.TEXT_NODE?node.parentElement:node as Element;
  return !parent || Boolean(parent.closest("[data-no-transliterate], .math, svg, script, style"));
};

export function useLocalizedDom(rootRef:RefObject<HTMLElement|null>,script:ScriptChoice){
  const scriptRef=useRef(script);
  const textOriginals=useRef(new WeakMap<Node,string>());
  const attributeOriginals=useRef(new WeakMap<Element,Record<string,string>>());

  useLayoutEffect(()=>{
    scriptRef.current=script;
    const root=rootRef.current;if(!root)return;
    const applyText=(node:Node,force=false)=>{
      if(skipped(node))return;
      const current=node.nodeValue??"";let original=textOriginals.current.get(node);
      if(original===undefined){original=current;textOriginals.current.set(node,original)}
      else if(!force){const expected=localize(original,scriptRef.current);if(current!==expected){original=current;textOriginals.current.set(node,original)}}
      const next=localize(original,scriptRef.current);if(current!==next)node.nodeValue=next;
    };
    const applyAttributes=(element:Element,force=false)=>{
      if(skipped(element))return;
      const tracked=attributeOriginals.current.get(element)??{};
      for(const name of ["placeholder","aria-label","title"]){
        const current=element.getAttribute(name);if(current===null)continue;
        let original=tracked[name];
        if(original===undefined)original=current;
        else if(!force&&current!==localize(original,scriptRef.current))original=current;
        tracked[name]=original;const next=localize(original,scriptRef.current);if(current!==next)element.setAttribute(name,next);
      }
      attributeOriginals.current.set(element,tracked);
    };
    const applyTree=(node:Node,force=false)=>{
      if(node.nodeType===Node.TEXT_NODE){applyText(node,force);return}
      if(node.nodeType!==Node.ELEMENT_NODE)return;
      const element=node as Element;if(skipped(element))return;applyAttributes(element,force);
      const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);let textNode:Node|null;
      while((textNode=walker.nextNode()))applyText(textNode,force);
      element.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>applyAttributes(el,force));
    };
    applyTree(root,true);
    document.documentElement.lang=script==="cyrl"?"sr-Cyrl":"sr-Latn";
    document.title=script==="cyrl"?"МатематикON6-8 — математика корак по корак":"MatematikON6-8 — matematika korak po korak";
    const observer=new MutationObserver(records=>{
      for(const record of records){
        if(record.type==="characterData")applyText(record.target);
        else if(record.type==="attributes")applyAttributes(record.target as Element);
        else record.addedNodes.forEach(node=>applyTree(node));
      }
    });
    observer.observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["placeholder","aria-label","title"]});
    return()=>observer.disconnect();
  },[rootRef,script]);
}
