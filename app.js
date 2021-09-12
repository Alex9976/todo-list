(()=>{"use strict";var e,t={110:(e,t,r)=>{var o=r(361),n=r(44);var i=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends o.ObservableObject{constructor(){super(...arguments),this.timestamp=0}pulse(e=3){e>=0?setTimeout((()=>this.doPulse()),e):this.doPulse()}doPulse(){this.timestamp++}}i([o.transaction,s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],a.prototype,"doPulse",null);class c{}c.Loading=o.Monitor.create("Loading",1e3,250),c.Resizing=o.Transaction.run((()=>new a));var l=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class p extends o.ObservableObject{constructor(e,t,r){super(),this.link=e,this.hashLink="#"+e,this.linkTitle=t,this.title=r,this.content="",this.isActive=!1}}l([o.unobservable,d("design:type",String)],p.prototype,"link",void 0),l([o.unobservable,d("design:type",String)],p.prototype,"hashLink",void 0),l([o.unobservable,d("design:type",String)],p.prototype,"linkTitle",void 0),l([o.unobservable,d("design:type",String)],p.prototype,"title",void 0);var u=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class h extends o.ObservableObject{constructor(e){super(),this.text=e,this.notCompleted=!0,this.isEdit=!1}changeActivity(){this.notCompleted=!this.notCompleted}}u([o.transaction,g("design:type",Function),g("design:paramtypes",[]),g("design:returntype",void 0)],h.prototype,"changeActivity",null);var f=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class m extends o.ObservableObject{constructor(e){super(),this.taskList=[],this.completedTasks=0,this.currentItemID=0,this.nextItemId=0,this.version=e,this.sensors=new n.HtmlSensors,this.homePage=new p("/home",'<img src="assets/home.svg"/>',"Todo"),this.draggingTask=void 0;const t=JSON.parse(localStorage.getItem("tasks"));null!==t&&(this.taskList=t.map((e=>{const t=new h(e.text);return t.notCompleted=e.notCompleted,t})))}convertLineBreaks(e){for(;e.includes("\n");)e=e.replace("\n","<br />");return e}swapTasks(){if(this.currentItemID!==this.nextItemId){this.taskList=this.taskList.toMutable();const e=this.taskList[this.currentItemID];this.taskList.splice(this.currentItemID,1);const t=this.taskList.slice(this.nextItemId);this.taskList.splice(this.nextItemId),this.taskList.push(e),this.taskList=this.taskList.concat(t)}}addTask(e){this.taskList=this.taskList.toMutable(),this.taskList.push(new h(this.convertLineBreaks(e)))}deleteTask(e){this.taskList=this.taskList.toMutable(),this.taskList.splice(this.taskList.indexOf(e),1)}editTask(e,t){e.isEdit?(null!=t&&(e.text=this.convertLineBreaks(t)),e.isEdit=!1):e.isEdit=!0}updateTasks(){this.completedTasks=this.taskList.filter((e=>!e.notCompleted)).length,localStorage.setItem("tasks",JSON.stringify(this.taskList))}pointerActions(){try{const e=this.sensors.pointer;if(e.click===n.PointerButton.Left){const t=e.associatedDataList[0];t instanceof Function&&(0,o.nonreactive)((()=>t()))}}catch(e){console.error(e)}}keyboardActions(){try{const e=this.sensors.keyboard;if("Enter"===e.down&&e.modifiers!==n.KeyboardModifiers.Shift){const t=e.associatedDataList[0];t instanceof Function&&(0,o.nonreactive)((()=>t())),this.sensors.preventDefault()}}catch(e){console.error(e)}}handleDragAndDrop(){const{drag:e}=this.sensors,t=e.stage,r=e.associatedDataList[0];if(r instanceof h)switch(t){case n.DragStage.Started:this.draggingTask=r,e.allowedCursor="copy",this.currentItemID=this.taskList.indexOf(r),this.nextItemId=this.currentItemID;break;case n.DragStage.Dragging:e.draggingObject instanceof h&&e.draggingObject!==r&&(e.cursor="copy",e.allowDropHere());break;case n.DragStage.Dropped:this.nextItemId=this.taskList.indexOf(r),this.swapTasks();break;case n.DragStage.Finished:this.draggingTask=void 0}}}f([o.unobservable,b("design:type",String)],m.prototype,"version",void 0),f([o.unobservable,b("design:type",p)],m.prototype,"homePage",void 0),f([o.unobservable,b("design:type",Number)],m.prototype,"completedTasks",void 0),f([o.unobservable,b("design:type",n.HtmlSensors)],m.prototype,"sensors",void 0),f([o.unobservable,b("design:type",Number)],m.prototype,"currentItemID",void 0),f([o.unobservable,b("design:type",Number)],m.prototype,"nextItemId",void 0),f([o.transaction,b("design:type",Function),b("design:paramtypes",[String]),b("design:returntype",void 0)],m.prototype,"addTask",null),f([o.transaction,b("design:type",Function),b("design:paramtypes",[h]),b("design:returntype",void 0)],m.prototype,"deleteTask",null),f([o.transaction,b("design:type",Function),b("design:paramtypes",[h,String]),b("design:returntype",void 0)],m.prototype,"editTask",null),f([o.reaction,b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"updateTasks",null),f([o.reaction,(0,o.trace)(o.TraceLevel.Suppress),b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"pointerActions",null),f([o.reaction,(0,o.trace)(o.TraceLevel.Suppress),b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"keyboardActions",null),f([o.reaction,b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",void 0)],m.prototype,"handleDragAndDrop",null);var v=r(87);class y{constructor(){this.name="DarkBlueTheme",this.background="#14344F",this.foreground="#E0E0E0",this.logoBackground="#00B3FF",this.logoForeground="white",this.footerForeground="#777",this.activeItemMarker="#00B3FF",this.itemUnderPointerMarker="#00A4E5",this.emphasizedText="#5DF586",this.titleForeground="#E0E0E0",this.documentHeading1Foreground="#E0E0E0",this.documentHeading2Foreground="white",this.documentTOCBackground="#122F47",this.documentScrollTopButtonBackground="#00A4E5",this.documentCodeInlineForeground="#67E8FF",this.documentCodeInlineBackground="rgba(255, 255, 255, 0.07)",this.documentCodeBlockForeground="#67E8FF",this.documentCodeBlockBackground="transparent",this.playgroundTextAreaBackground="white",this.playgroundTextAreaForeground="#444",this.playgroundTextAreaCaretColor="black",this.playgroundTextLengthForeground="rgb(253, 165, 93)",this.playgroundTextLengthErrorForeground="rgb(253, 93, 93)",this.playgroundWhiteSpaceForeground="lightgrey",this.playgroundFindButtonBackground="#00B831",this.playgroundFindButtonForeground="white",this.playgroundFindButtonCheckMarkBackground="#EEE",this.playgroundFindButtonCheckMarkForeground="#444",this.playgroundFindButtonCheckMarkHoverBackground="#DDD",this.playgroundTagButtonBackground="#AAA",this.playgroundTagButtonActiveForeground="black",this.playgroundTagButtonInactiveForeground="#E0E0E0",this.playgroundTagButtonCounterForeground="grey",this.playgroundReadOnlyPackageUnderPointerMarker="#ECECEC"}}var k=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class T extends o.ObservableObject{constructor(...e){super(),this.all=[],e.forEach((e=>this.all.push(e))),this.active=e[0]}setActive(e){this.active=e}setActiveByName(e){const t=this.all.findIndex((t=>t.name===e));t>=0&&(this.active=this.all[t])}setNextActive(){const e=(this.all.indexOf(this.active)+1)%this.all.length,t=this.all[e];this.active=t}}k([o.unobservable,x("design:type",Array)],T.prototype,"all",void 0),k([o.transaction,x("design:type",Function),x("design:paramtypes",[Object]),x("design:returntype",void 0)],T.prototype,"setActive",null),k([o.transaction,x("design:type",Function),x("design:paramtypes",[String]),x("design:returntype",void 0)],T.prototype,"setActiveByName",null),k([o.transaction,x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",void 0)],T.prototype,"setNextActive",null);const w=o.Transaction.run((()=>new T(new y))),L=(0,n.restyler)((()=>({Body:v.iv`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("./assets/background.jpg");
      background-size: cover;
      color: ${w.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${w.active.foreground};
      }
    `})));const D=(0,n.restyler)((()=>({InputTask:v.iv`
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
    `}))),E=(0,n.restyler)((()=>({Delete:v.iv`
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
    `})));function I(e,t,r){return(0,n.RxLI)("Task"+e,t,(o=>{let i;o.className=E.class.Task,o.associatedData.drag=t.notCompleted&&!t.isEdit?t:void 0,o.classList.toggle("selected",r.draggingTask===t),t.notCompleted?(o.classList.add("moveable"+e),o.classList.add("move")):(o.classList.remove("moveable"+e),o.classList.remove("move")),t.isEdit?(0,n.Div)("Task",(e=>{i=e,i.contentEditable="true",i.associatedData.keyboard=()=>{""!==i.innerHTML.trim()&&r.editTask(t,i.innerHTML)},e.innerHTML=t.text,e.className=E.class.Input})):(0,n.Div)("Task-element",(e=>{e.associatedData.pointer=()=>t.changeActivity(),e.className=t.notCompleted?E.class.TaskElement:E.class.InactiveTaskElement,e.innerHTML=t.text})),t.notCompleted&&(0,n.Div)("Edit",(e=>{e.associatedData.pointer=()=>t.isEdit?r.editTask(t,i.innerHTML):r.editTask(t),e.className=E.class.Edit,(0,n.Img)("Edit-icon",(e=>{e.src=t.isEdit?"./assets/check.svg":"./assets/pencil.svg"}))})),(0,n.Div)("Delete",(e=>{e.associatedData.pointer=()=>{r.deleteTask(t)},e.className=t.notCompleted?E.class.Delete:E.class.InactiveDelete,(0,n.Img)("Delete-icon",(e=>{e.src="./assets/trash.svg"}))}))}))}function F(e){return t=e.homePage,r=t=>{(0,n.RxUL)("List",null,(t=>{t.className=D.class.List;let r=0;e.taskList.forEach((t=>{t.notCompleted&&I(r.toString(),t,e),r++})),e.completedTasks>0&&(0,n.Div)("Completed-tasks",(t=>{t.className=D.class.CompletedLabel,t.innerHTML="Completed "+e.completedTasks.toString()})),e.taskList.forEach((t=>{t.notCompleted||I(r.toString(),t,e),r++}))})),(0,n.Div)("Task-input",(t=>{let r;t.className=D.class.InputTask,(0,n.TextArea)("Task",(t=>{r=t,t.placeholder="Enter the task",t.className=D.class.Input,r.associatedData.keyboard=()=>{""!=r.value.trim()&&e.addTask(r.value),r.value=""}})),(0,n.Div)("Submit",(t=>{t.associatedData.pointer=()=>{""!=r.value.trim()&&(e.addTask(r.value),r.value="")},t.className=D.class.Submit,(0,n.Img)("Add-icon",(e=>{e.src="./assets/add.svg"}))}))}))},(0,n.Div)("PageView-"+t.link,(e=>{(0,n.Div)("Content",(e=>{r&&r(e)})),o&&o(e)}));var t,r,o}n.HtmlRtti.isDebugAttributeEnabled=!1,o.Reactronic.setTraceMode(!0,o.TraceLevel.Error),o.Reactronic.setProfilingMode(!1,{asyncActionDurationWarningThreshold:Number.MAX_SAFE_INTEGER,mainThreadBlockingWarningThreshold:5,garbageCollectionSummaryInterval:Number.MAX_SAFE_INTEGER}),(0,n.trace)(!1,"r","SetPropValues"),document.body.onresize=()=>c.Resizing.pulse(-1);!function(e){(0,n.Div)("Body",(t=>{e.sensors.listen(t),t.className=L.class.Body,F(e)}))}(o.Transaction.run((()=>new m("$BUILD_TIMESTAMP"))))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,n,i]=e[l],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));a&&(e.splice(l--,1),t=n())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,n,i]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[s,a,c]=r,l=0;for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var d=c(o);for(t&&t(r);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return o.O(d)},r=globalThis.webpackChunk=globalThis.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[216],(()=>o(110)));n=o.O(n)})();