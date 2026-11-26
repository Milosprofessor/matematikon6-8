import {readFile} from "node:fs/promises";
import {createServer} from "vite";

// Run from the repository root. Count the tasks and checks selected by the UI.
const vite=await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
const load=path=>vite.ssrLoadModule("/app/content/"+path+".ts");
try{
  const {grades}=await load("index");
  const {tasksForLesson}=await load("enhancements");
  const {lessonWorkTasks}=await load("october-work");
  const {getAreaTest}=await load("area-tests");
  const {calendarMonth}=await load("months");
  const {springChecks,finals}=await load("spring6/checks");
  const {checks7,finals7}=await load("spring7/checks");
  const {checks8}=await load("spring8/checks");
  const {finals8}=await load("spring8/finals");
  const {examSets}=await load("spring8/exams");
  const sixModels=new Set(Array.from((await readFile("app/spring-lab.tsx","utf8")).matchAll(/case "(s6-[^"]+)"/g),m=>m[1]));
  const levels=tasks=>["basic","medium","advanced"].map(level=>tasks.filter(t=>t.level===level).length);
  const all=[];
  for(const grade of grades){
    const [checks,finalChecks]=[[springChecks,finals],[checks7,finals7],[checks8,finals8]][grade.id-6];
    const unique=new Map(),work=[],fresh=[];
    const add=task=>unique.set(task.id,task);
    let areaChecks=0;
    const areas=grade.areas.map(area=>{
      const test=area.review?[]:getAreaTest(grade.id,area.id);
      if(test.length)areaChecks++;
      test.forEach(add);
      const units=area.lessons.map(l=>{
        const pool=tasksForLesson(l.id,l.tasks);
        const tasks=lessonWorkTasks(l.id,pool);
        pool.forEach(add);work.push(...tasks);
        if(grade.id===8&&l.id.startsWith("s8-"))fresh.push(...l.tasks);
        return {id:l.id,t:l.title,m:calendarMonth(area,l),tasks:levels(tasks),worked:l.worked?.length??1,
          mini:Boolean(l.mini),mod:Boolean(l.interactive||(l.worked&&(grade.id!==6||sixModels.has(l.id))))};
      });
      return {id:area.id,t:area.title,r:Boolean(area.review),units};
    });
    for(const set of [...checks.values(),...(grade.id===8?examSets:[])]){
      set.items.forEach(add);if(grade.id===8)fresh.push(...set.items);
    }
    const lessons=areas.flatMap(a=>a.units);
    all.push({g:grade.id,areas,summary:{areas:areas.length,review:areas.filter(a=>a.r).length,
      old:lessons.filter(l=>!/^s[678]-/.test(l.id)).length,lessons:lessons.length,work:levels(work),
      bank:levels([...unique.values()]),worked:lessons.reduce((n,l)=>n+l.worked,0),mini:lessons.filter(l=>l.mini).length,
      areaChecks,finals:finalChecks.length,models:lessons.filter(l=>l.mod).length},new8:levels(fresh)});
  }
  console.log(JSON.stringify(all,null,2));
}finally{await vite.close()}
