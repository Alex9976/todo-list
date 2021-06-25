(()=>{"use strict";var e,t={110:(e,t,n)=>{var r=n(361),o=n(44);var i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends r.ObservableObject{constructor(){super(...arguments),this.timestamp=0}pulse(e=3){e>=0?setTimeout((()=>this.doPulse()),e):this.doPulse()}doPulse(){this.timestamp++}}i([r.transaction,s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],a.prototype,"doPulse",null);class c{}c.Loading=r.Monitor.create("Loading",1e3,250),c.Resizing=r.Transaction.run((()=>new a));var l=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class p extends r.ObservableObject{constructor(e,t,n){super(),this.link=e,this.hashLink="#"+e,this.linkTitle=t,this.title=n,this.content="",this.isActive=!1}}l([r.unobservable,d("design:type",String)],p.prototype,"link",void 0),l([r.unobservable,d("design:type",String)],p.prototype,"hashLink",void 0),l([r.unobservable,d("design:type",String)],p.prototype,"linkTitle",void 0),l([r.unobservable,d("design:type",String)],p.prototype,"title",void 0);var u=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class h extends r.ObservableObject{constructor(e){super(),this.text=e,this.notCompleted=!0,this.isEdit=!1}changeActivity(){this.notCompleted=!this.notCompleted}}u([r.transaction,g("design:type",Function),g("design:paramtypes",[]),g("design:returntype",void 0)],h.prototype,"changeActivity",null);var f=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class m extends r.ObservableObject{constructor(e){super(),this.taskList=[],this.completedTasks=0,this.currentItemID=0,this.nextItemId=0,this.version=e,this.sensors=new o.WebSensors,this.homePage=new p("/home",'<img src="assets/home.svg"/>',"Todo"),this.activePage=this.homePage,this.activePage.isActive=!0;const t=JSON.parse(localStorage.getItem("tasks"));null!==t&&(this.taskList=t.map((e=>{const t=new h(e.text);return t.notCompleted=e.notCompleted,t})))}convertLineBreaks(e){for(;e.includes("\n");)e=e.replace("\n","<br />");return e}swapTasks(){if(this.currentItemID!==this.nextItemId){this.taskList=this.taskList.toMutable();const e=this.taskList[this.currentItemID];this.taskList.splice(this.currentItemID,1);const t=this.taskList.slice(this.nextItemId);this.taskList.splice(this.nextItemId),this.taskList.push(e),this.taskList=this.taskList.concat(t)}}addTask(e){this.taskList=this.taskList.toMutable(),this.taskList.push(new h(this.convertLineBreaks(e)))}deleteTask(e){this.taskList=this.taskList.toMutable(),this.taskList.splice(this.taskList.indexOf(e),1)}editTask(e,t){e.isEdit?(null!=t&&(e.text=this.convertLineBreaks(t)),e.isEdit=!1):e.isEdit=!0}updateTasks(){this.completedTasks=this.taskList.filter((e=>!e.notCompleted)).length,localStorage.setItem("tasks",JSON.stringify(this.taskList))}pointerActions(){try{const e=this.sensors.pointer;if(e.click===o.PointerButton.Left){const t=e.sensorDataList[0];t instanceof Function&&(0,r.nonreactive)((()=>t()))}}catch(e){console.error(e)}}keyboardActions(){try{const e=this.sensors.keyboard;if("Enter"===e.down&&e.modifiers!==o.KeyboardModifiers.Shift){const t=e.sensorDataList[0];t instanceof Function&&(0,r.nonreactive)((()=>t())),this.sensors.preventDefault()}}catch(e){console.error(e)}}}f([r.unobservable,b("design:type",String)],m.prototype,"version",void 0),f([r.unobservable,b("design:type",p)],m.prototype,"homePage",void 0),f([r.unobservable,b("design:type",Number)],m.prototype,"completedTasks",void 0),f([r.unobservable,b("design:type",o.WebSensors)],m.prototype,"sensors",void 0),f([r.unobservable,b("design:type",Number)],m.prototype,"currentItemID",void 0),f([r.unobservable,b("design:type",Number)],m.prototype,"nextItemId",void 0),f([r.transaction,b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"swapTasks",null),f([r.transaction,b("design:type",Function),b("design:paramtypes",[String]),b("design:returntype",void 0)],m.prototype,"addTask",null),f([r.transaction,b("design:type",Function),b("design:paramtypes",[h]),b("design:returntype",void 0)],m.prototype,"deleteTask",null),f([r.transaction,b("design:type",Function),b("design:paramtypes",[h,String]),b("design:returntype",void 0)],m.prototype,"editTask",null),f([r.reaction,b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"updateTasks",null),f([r.reaction,(0,r.trace)(r.TraceLevel.Suppress),b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"pointerActions",null),f([r.reaction,(0,r.trace)(r.TraceLevel.Suppress),b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"keyboardActions",null);var v=n(87);class y{constructor(){this.name="DarkBlueTheme",this.background="#14344F",this.foreground="#E0E0E0",this.logoBackground="#00B3FF",this.logoForeground="white",this.footerForeground="#777",this.activeItemMarker="#00B3FF",this.itemUnderPointerMarker="#00A4E5",this.emphasizedText="#5DF586",this.titleForeground="#E0E0E0",this.documentHeading1Foreground="#E0E0E0",this.documentHeading2Foreground="white",this.documentTOCBackground="#122F47",this.documentScrollTopButtonBackground="#00A4E5",this.documentCodeInlineForeground="#67E8FF",this.documentCodeInlineBackground="rgba(255, 255, 255, 0.07)",this.documentCodeBlockForeground="#67E8FF",this.documentCodeBlockBackground="transparent",this.playgroundTextAreaBackground="white",this.playgroundTextAreaForeground="#444",this.playgroundTextAreaCaretColor="black",this.playgroundTextLengthForeground="rgb(253, 165, 93)",this.playgroundTextLengthErrorForeground="rgb(253, 93, 93)",this.playgroundWhiteSpaceForeground="lightgrey",this.playgroundFindButtonBackground="#00B831",this.playgroundFindButtonForeground="white",this.playgroundFindButtonCheckMarkBackground="#EEE",this.playgroundFindButtonCheckMarkForeground="#444",this.playgroundFindButtonCheckMarkHoverBackground="#DDD",this.playgroundTagButtonBackground="#AAA",this.playgroundTagButtonActiveForeground="black",this.playgroundTagButtonInactiveForeground="#E0E0E0",this.playgroundTagButtonCounterForeground="grey",this.playgroundReadOnlyPackageUnderPointerMarker="#ECECEC"}}var k=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class T extends r.ObservableObject{constructor(...e){super(),this.all=[],e.forEach((e=>this.all.push(e))),this.active=e[0]}setActive(e){this.active=e}setActiveByName(e){const t=this.all.findIndex((t=>t.name===e));t>=0&&(this.active=this.all[t])}setNextActive(){const e=(this.all.indexOf(this.active)+1)%this.all.length,t=this.all[e];this.active=t}}k([r.unobservable,x("design:type",Array)],T.prototype,"all",void 0),k([r.transaction,x("design:type",Function),x("design:paramtypes",[Object]),x("design:returntype",void 0)],T.prototype,"setActive",null),k([r.transaction,x("design:type",Function),x("design:paramtypes",[String]),x("design:returntype",void 0)],T.prototype,"setActiveByName",null),k([r.transaction,x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",void 0)],T.prototype,"setNextActive",null);const L=r.Transaction.run((()=>new T(new y))),I=(0,o.restyler)((()=>({Body:v.iv`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("./assets/background.jpg");
      background-size: cover;
      color: ${L.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${L.active.foreground};
      }
    `})));const w=(0,o.restyler)((()=>({InputTask:v.iv`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: fixed;
      font-size: 25px;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,Input:v.iv`
      margin: 0;
      width: calc(100vw - 100px);
      height: 45px;
      color: #fff;
      font-size: 24px;
      font-family: Calibri, Tahoma, Arial, sans-serif;
      border: none;
      resize: none;
      padding: 6px 10px 0 10px;
      /*padding: 0 10px;*/
      border-radius: 4px 0 0 4px;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.25);
      }
    `,Submit:v.iv`
      height: 45px;
      user-select: none;
      padding: 5px 15px;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(0, 0, 0, 0.25);
      }

      img {
        width: 20px;
        filter: invert(100%);
      }
    `,CompletedLabel:v.iv`
      padding: 7px;
      margin: 5px;
      user-select: none;
      font-size: 90%;
      /*background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      backdrop-filter: blur(5px);
      width: 10%;*/
    `,List:v.iv`
      font-size: 110%;
      overflow: auto;
      height: calc(100vh - 91px);
      padding: 20px;
      overflow-y: scroll;
    `}))),E=(0,o.restyler)((()=>({Delete:v.iv`
      margin: 0;

      min-height: 45px;
      padding: 9px 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 20px;
        filter: invert(100%);
      }
      border-radius: 0 3px 3px 0;
      background-color: rgba(39, 39, 39, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(200, 0, 0, 1);
      }
    `,Edit:v.iv`
      margin: 0;

      min-height: 45px;
      padding: 9px 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 20px;
        filter: invert(100%);
      }
      background-color: rgba(39, 39, 39, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(105, 153, 0, 1);
      }
    `,InactiveDelete:v.iv`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 9px 15px;
    img {
        width: 20px;
        filter: invert(100%);
      }
    min-height: 45px;
    border-radius: 0 3px 3px 0;
    background-color: rgba(39, 39, 39, 0.5);
    backdrop-filter: blur(5px);
    transition: background-color .2s ease;
    :hover, :focus {
      transition: background-color .2s ease;
      background-color: rgba(200, 0, 0, 0.5);
    }
    `,Task:v.iv`
      display: flex;
      cursor: pointer;
      user-select: none;
      margin: 6px 0;
      min-height: 45px;
      @media screen and (max-width: 1000px) {
        min-height: 40px;
      }

      @media screen and (max-width: 600px) {
        min-height: 38px;
      }
    `,TaskElement:v.iv`
      margin: 0;
      padding: 9px 10px;
      width: 40%;
      word-wrap: break-word;
      flex: 1 0 auto;
      min-height: 45px;
      border-radius: 3px 0 0 3px;
      background-color: rgba(36, 36, 36, 1);
      backdrop-filter: blur(5px);
      transition: background-color .2s ease;
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 1);
      }
      :active {
        background-color: rgba(36, 36, 36, 1);
      }
    `,InactiveTaskElement:v.iv`
      text-decoration: line-through;
      margin: 0;
      flex: 1 0 auto;
      min-height: 45px;
      padding: 9px 10px;
      word-wrap: break-word;
      width: 40%;
      border-radius: 3px 0 0 3px;
      backdrop-filter: blur(5px);
      background-color: rgba(36, 36, 36, 0.35);
      transition: background-color .2s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      :hover {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 0.35);
      }
    `,Input:v.iv`
      margin: 0;
      width: calc(100vw - 145px);
      min-height: 45px;
      overflow: hidden;
      cursor: text;
      padding: 9px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 3px 0 0 3px;
      background-color: rgba(36, 36, 36, 0.55);
      backdrop-filter: blur(5px);
      /*transition: background-color .2s ease;*/
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(53, 56, 58, 0.25);
      }
    `,Arrow:v.iv`
      margin: 0;

      min-height: 45px;
      padding: 9px 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 20px;
        filter: invert(100%);
      }
      background-color: rgba(39, 39, 39, 1);
      transition: background-color .2s ease;
      :hover, :focus {
        transition: background-color .2s ease;
        background-color: rgba(59, 59, 59, 1);
      }
    `})));function F(e,t,n){return(0,o.LI)("Task"+e,(r=>{let i;r.className=E.class.Task,t.notCompleted&&!t.isEdit?r.draggable=!0:r.draggable=!1,t.notCompleted?(r.classList.add("moveable"+e),r.classList.add("move")):(r.classList.remove("moveable"+e),r.classList.remove("move")),r.ondragstart=()=>{r.classList.add("selected"),n.currentItemID=n.taskList.indexOf(t),n.nextItemId=n.currentItemID},r.ondragend=()=>{r.classList.remove("selected"),n.swapTasks()},t.isEdit?(0,o.Div)("Task",(e=>{i=e,i.contentEditable="true",i.sensorData={keyboard:()=>{""!==i.innerHTML.trim()&&n.editTask(t,i.innerHTML)}},e.innerHTML=t.text,e.className=E.class.Input})):(0,o.Div)("Task-element",(e=>{e.sensorData={pointer:()=>{t.changeActivity()}},e.className=t.notCompleted?E.class.TaskElement:E.class.InactiveTaskElement,e.innerHTML=t.text})),t.notCompleted&&(0,o.Div)("Edit",(e=>{e.sensorData={pointer:()=>{t.isEdit?n.editTask(t,i.innerHTML):n.editTask(t)}},e.className=E.class.Edit,(0,o.Img)("Edit-icon",(e=>{e.src=t.isEdit?"./assets/check.svg":"./assets/pencil.svg"}))})),(0,o.Div)("Delete",(e=>{e.sensorData={pointer:()=>{n.deleteTask(t)}},e.className=t.notCompleted?E.class.Delete:E.class.InactiveDelete,(0,o.Img)("Delete-icon",(e=>{e.src="./assets/trash.svg"}))}))}))}function D(e){return t=e.homePage,n=t=>{(0,o.RxUL)("List",null,(t=>{t.className=w.class.List;let n=0;e.taskList.forEach((t=>{t.notCompleted&&F(n.toString(),t,e),n++})),e.completedTasks>0&&(0,o.Div)("Completed-tasks",(t=>{t.className=w.class.CompletedLabel,t.innerHTML="Completed "+e.completedTasks.toString()})),e.taskList.forEach((t=>{t.notCompleted||F(n.toString(),t,e),n++})),t.ondragover=n=>{if(n.preventDefault(),null===n.target)return;const r=t.querySelector(".selected");if(r){const o=n.target,i=O(o),s=j(n.clientY,o);if(i===e.currentItemID||null===i){if(e.nextItemId===e.taskList.length-1&&null===i){const e=t.querySelectorAll(".move");t.insertBefore(e[e.length-1],r)}return}t.insertBefore(r,s),e.nextItemId=i}}})),(0,o.Div)("Task-input",(t=>{let n;t.className=w.class.InputTask,(0,o.TextArea)("Task",(t=>{n=t,t.placeholder="Enter the task",t.className=w.class.Input,n.sensorData={keyboard:()=>{""!=n.value.trim()&&e.addTask(n.value),n.value=""}}})),(0,o.Div)("Submit",(t=>{t.sensorData={pointer:()=>{""!=n.value.trim()&&(e.addTask(n.value),n.value="")}},t.className=w.class.Submit,(0,o.Img)("Add-icon",(e=>{e.src="./assets/add.svg"}))}))}))},(0,o.Div)("PageView-"+t.link,(e=>{(0,o.Div)("Content",(e=>{n&&n(e)})),r&&r(e)}));var t,n,r}const O=e=>{const t=e.parentNode.classList.toString();if(t.includes("moveable")){return parseInt(t.substring(t.indexOf("moveable")+8,t.length))}return null},j=(e,t)=>{const n=t.getBoundingClientRect();return e<n.y+n.height/2?t.parentNode:t.parentNode.nextElementSibling};o.HtmlRtti.isDebugAttributeEnabled=!1,r.Reactronic.setTraceMode(!0,r.TraceLevel.Error),r.Reactronic.setProfilingMode(!1,{asyncActionDurationWarningThreshold:Number.MAX_SAFE_INTEGER,mainThreadBlockingWarningThreshold:5,garbageCollectionSummaryInterval:Number.MAX_SAFE_INTEGER}),(0,o.trace)(!1,"r","SetPropValues"),document.body.onresize=()=>c.Resizing.pulse(-1);const B=r.Transaction.run((()=>new m("$BUILD_TIMESTAMP"))),R=function(e){return(0,o.Div)("Body",(t=>{t.className=I.class.Body,D(e)}))}(B);(0,o.renderChildrenNow)(),B.sensors.listen(R.native)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));a&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,c]=n,l=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var d=c(r);for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return r.O(d)},n=globalThis.webpackChunk=globalThis.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[216],(()=>r(110)));o=r.O(o)})();