// Storage failures must remain visible while the current session stays usable.
const transient=new Map<string,string>();
const unreadable=new Set<string>();
let warning='';
const listeners=new Set<()=>void>();
export const subscribeStorage=(notify:()=>void)=>{listeners.add(notify);return ()=>{listeners.delete(notify)}};
export const storageWarning=()=>warning;
export function warnStorage(message:string){if(warning===message)return;warning=message;listeners.forEach(fn=>fn())}
export function readStored(key:string){
 try{return transient.get(key)??localStorage.getItem(key)??null}
 catch{unreadable.add(key);warnStorage('Čuvanje nije dostupno. Rad ostaje samo u ovoj otvorenoj kartici.');return transient.get(key)??null}
}
export function writeStored(key:string,value:string){
 if(unreadable.has(key)||transient.has(key)){transient.set(key,value);warnStorage("Rad ostaje u ovoj kartici. Prethodni trajni zapis nije zamenjen.");return false}
 try{localStorage.setItem(key,value);transient.delete(key);return true}
 catch{transient.set(key,value);warnStorage('Napredak nije sačuvan na uređaju. Sačuvaj ovu karticu otvorenom i oslobodi prostor ili omogući lokalno skladište.');return false}
}
let pendingWrites=0;
export const storagePending=()=>pendingWrites;
export function beginStorageWrite(){
 pendingWrites++;
 listeners.forEach(fn=>fn());
}
export function endStorageWrite(){
 pendingWrites=Math.max(0,pendingWrites-1);
 listeners.forEach(fn=>fn());
}
if(typeof window!=="undefined")window.addEventListener("beforeunload",event=>{
 if(pendingWrites){event.preventDefault();event.returnValue=""}
});
