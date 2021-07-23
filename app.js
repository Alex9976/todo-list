(()=>{"use strict";var e,t={110:(e,t,r)=>{var n=r(361),o=r(44);var i=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends n.ObservableObject{constructor(){super(...arguments),this.timestamp=0}pulse(e=3){e>=0?setTimeout((()=>this.doPulse()),e):this.doPulse()}doPulse(){this.timestamp++}}i([n.transaction,s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],a.prototype,"doPulse",null);class c{}c.Loading=n.Monitor.create("Loading",1e3,250),c.Resizing=n.Transaction.run((()=>new a));var l=r(87);const d=(0,o.restyler)((()=>({Delete:l.iv`
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
    `,Edit:l.iv`
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
    `,InactiveDelete:l.iv`
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
    `,Task:l.iv`
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
    `,TaskElement:l.iv`
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
    `,InactiveTaskElement:l.iv`
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
    `,Input:l.iv`
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
    `,Arrow:l.iv`
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
    `})));class p{constructor(e,t){this.element=e,this.task=t}}function u(e,t,r){return(0,o.RxLI)("Task"+e,t,(n=>{let i;n.className=d.class.Task,t.notCompleted&&!t.isEdit?n.draggable=!0:n.draggable=!1,n.sensorData={drag:new p(n,t)},t.notCompleted?(n.classList.add("moveable"+e),n.classList.add("move")):(n.classList.remove("moveable"+e),n.classList.remove("move")),t.isEdit?(0,o.Div)("Task",(e=>{i=e,i.contentEditable="true",i.sensorData={keyboard:()=>{""!==i.innerHTML.trim()&&r.editTask(t,i.innerHTML)}},e.innerHTML=t.text,e.className=d.class.Input})):(0,o.Div)("Task-element",(e=>{e.sensorData={pointer:()=>{t.changeActivity()}},e.className=t.notCompleted?d.class.TaskElement:d.class.InactiveTaskElement,e.innerHTML=t.text})),t.notCompleted&&(0,o.Div)("Edit",(e=>{e.sensorData={pointer:()=>{t.isEdit?r.editTask(t,i.innerHTML):r.editTask(t)}},e.className=d.class.Edit,(0,o.Img)("Edit-icon",(e=>{e.src=t.isEdit?"./assets/check.svg":"./assets/pencil.svg"}))})),(0,o.Div)("Delete",(e=>{e.sensorData={pointer:()=>{r.deleteTask(t)}},e.className=t.notCompleted?d.class.Delete:d.class.InactiveDelete,(0,o.Img)("Delete-icon",(e=>{e.src="./assets/trash.svg"}))}))}))}var g=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class b extends n.ObservableObject{constructor(e,t,r){super(),this.link=e,this.hashLink="#"+e,this.linkTitle=t,this.title=r,this.content="",this.isActive=!1}}g([n.unobservable,h("design:type",String)],b.prototype,"link",void 0),g([n.unobservable,h("design:type",String)],b.prototype,"hashLink",void 0),g([n.unobservable,h("design:type",String)],b.prototype,"linkTitle",void 0),g([n.unobservable,h("design:type",String)],b.prototype,"title",void 0);var f=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class v extends n.ObservableObject{constructor(e){super(),this.text=e,this.notCompleted=!0,this.isEdit=!1}changeActivity(){this.notCompleted=!this.notCompleted}}f([n.transaction,m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",void 0)],v.prototype,"changeActivity",null);var y=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class x extends n.ObservableObject{constructor(e){super(),this.taskList=[],this.completedTasks=0,this.currentItemID=0,this.nextItemId=0,this.version=e,this.sensors=new o.WebSensors,this.homePage=new b("/home",'<img src="assets/home.svg"/>',"Todo");const t=JSON.parse(localStorage.getItem("tasks"));null!==t&&(this.taskList=t.map((e=>{const t=new v(e.text);return t.notCompleted=e.notCompleted,t})))}convertLineBreaks(e){for(;e.includes("\n");)e=e.replace("\n","<br />");return e}swapTasks(){if(this.currentItemID!==this.nextItemId){this.taskList=this.taskList.toMutable();const e=this.taskList[this.currentItemID];this.taskList.splice(this.currentItemID,1);const t=this.taskList.slice(this.nextItemId);this.taskList.splice(this.nextItemId),this.taskList.push(e),this.taskList=this.taskList.concat(t)}}addTask(e){this.taskList=this.taskList.toMutable(),this.taskList.push(new v(this.convertLineBreaks(e)))}deleteTask(e){this.taskList=this.taskList.toMutable(),this.taskList.splice(this.taskList.indexOf(e),1)}editTask(e,t){e.isEdit?(null!=t&&(e.text=this.convertLineBreaks(t)),e.isEdit=!1):e.isEdit=!0}updateTasks(){this.completedTasks=this.taskList.filter((e=>!e.notCompleted)).length,localStorage.setItem("tasks",JSON.stringify(this.taskList))}pointerActions(){try{const e=this.sensors.pointer;if(e.click===o.PointerButton.Left){const t=e.sensorDataList[0];t instanceof Function&&(0,n.nonreactive)((()=>t()))}}catch(e){console.error(e)}}keyboardActions(){try{const e=this.sensors.keyboard;if("Enter"===e.down&&e.modifiers!==o.KeyboardModifiers.Shift){const t=e.sensorDataList[0];t instanceof Function&&(0,n.nonreactive)((()=>t())),this.sensors.preventDefault()}}catch(e){console.error(e)}}handleDragAndDrop(){const{drag:e}=this.sensors,t=e.stage,r=e.sensorDataList[0];if(r instanceof p){const{element:n,task:i}=r;switch(t){case o.DragStage.Started:e.allowedDragOperations="move",n.classList.add("selected"),this.currentItemID=this.taskList.indexOf(r.task),this.nextItemId=this.currentItemID;break;case o.DragStage.Dragging:e.draggingObject instanceof p&&e.draggingObject!==r&&(e.currentOperation="move",e.dropZone());break;case o.DragStage.Dropped:this.nextItemId=this.taskList.indexOf(i),this.swapTasks();break;case o.DragStage.Finished:n.classList.remove("selected")}}}}y([n.unobservable,k("design:type",String)],x.prototype,"version",void 0),y([n.unobservable,k("design:type",b)],x.prototype,"homePage",void 0),y([n.unobservable,k("design:type",Number)],x.prototype,"completedTasks",void 0),y([n.unobservable,k("design:type",o.WebSensors)],x.prototype,"sensors",void 0),y([n.unobservable,k("design:type",Number)],x.prototype,"currentItemID",void 0),y([n.unobservable,k("design:type",Number)],x.prototype,"nextItemId",void 0),y([n.transaction,k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],x.prototype,"swapTasks",null),y([n.transaction,k("design:type",Function),k("design:paramtypes",[String]),k("design:returntype",void 0)],x.prototype,"addTask",null),y([n.transaction,k("design:type",Function),k("design:paramtypes",[v]),k("design:returntype",void 0)],x.prototype,"deleteTask",null),y([n.transaction,k("design:type",Function),k("design:paramtypes",[v,String]),k("design:returntype",void 0)],x.prototype,"editTask",null),y([n.reaction,k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],x.prototype,"updateTasks",null),y([n.reaction,(0,n.trace)(n.TraceLevel.Suppress),k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],x.prototype,"pointerActions",null),y([n.reaction,(0,n.trace)(n.TraceLevel.Suppress),k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],x.prototype,"keyboardActions",null),y([n.reaction,k("design:type",Function),k("design:paramtypes",[]),k("design:returntype",void 0)],x.prototype,"handleDragAndDrop",null);class T{constructor(){this.name="DarkBlueTheme",this.background="#14344F",this.foreground="#E0E0E0",this.logoBackground="#00B3FF",this.logoForeground="white",this.footerForeground="#777",this.activeItemMarker="#00B3FF",this.itemUnderPointerMarker="#00A4E5",this.emphasizedText="#5DF586",this.titleForeground="#E0E0E0",this.documentHeading1Foreground="#E0E0E0",this.documentHeading2Foreground="white",this.documentTOCBackground="#122F47",this.documentScrollTopButtonBackground="#00A4E5",this.documentCodeInlineForeground="#67E8FF",this.documentCodeInlineBackground="rgba(255, 255, 255, 0.07)",this.documentCodeBlockForeground="#67E8FF",this.documentCodeBlockBackground="transparent",this.playgroundTextAreaBackground="white",this.playgroundTextAreaForeground="#444",this.playgroundTextAreaCaretColor="black",this.playgroundTextLengthForeground="rgb(253, 165, 93)",this.playgroundTextLengthErrorForeground="rgb(253, 93, 93)",this.playgroundWhiteSpaceForeground="lightgrey",this.playgroundFindButtonBackground="#00B831",this.playgroundFindButtonForeground="white",this.playgroundFindButtonCheckMarkBackground="#EEE",this.playgroundFindButtonCheckMarkForeground="#444",this.playgroundFindButtonCheckMarkHoverBackground="#DDD",this.playgroundTagButtonBackground="#AAA",this.playgroundTagButtonActiveForeground="black",this.playgroundTagButtonInactiveForeground="#E0E0E0",this.playgroundTagButtonCounterForeground="grey",this.playgroundReadOnlyPackageUnderPointerMarker="#ECECEC"}}var w=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class D extends n.ObservableObject{constructor(...e){super(),this.all=[],e.forEach((e=>this.all.push(e))),this.active=e[0]}setActive(e){this.active=e}setActiveByName(e){const t=this.all.findIndex((t=>t.name===e));t>=0&&(this.active=this.all[t])}setNextActive(){const e=(this.all.indexOf(this.active)+1)%this.all.length,t=this.all[e];this.active=t}}w([n.unobservable,L("design:type",Array)],D.prototype,"all",void 0),w([n.transaction,L("design:type",Function),L("design:paramtypes",[Object]),L("design:returntype",void 0)],D.prototype,"setActive",null),w([n.transaction,L("design:type",Function),L("design:paramtypes",[String]),L("design:returntype",void 0)],D.prototype,"setActiveByName",null),w([n.transaction,L("design:type",Function),L("design:paramtypes",[]),L("design:returntype",void 0)],D.prototype,"setNextActive",null);const E=n.Transaction.run((()=>new D(new T))),I=(0,o.restyler)((()=>({Body:l.iv`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("./assets/background.jpg");
      background-size: cover;
      color: ${E.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${E.active.foreground};
      }
    `})));const F=(0,o.restyler)((()=>({InputTask:l.iv`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: fixed;
      font-size: 25px;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,Input:l.iv`
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
    `,Submit:l.iv`
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
    `,CompletedLabel:l.iv`
      padding: 7px;
      margin: 5px;
      user-select: none;
      font-size: 90%;
      /*background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      backdrop-filter: blur(5px);
      width: 10%;*/
    `,List:l.iv`
      font-size: 110%;
      overflow: auto;
      height: calc(100vh - 91px);
      padding: 20px;
      overflow-y: scroll;
    `})));function O(e){return t=e.homePage,r=t=>{(0,o.RxUL)("List",null,(t=>{t.className=F.class.List;let r=0;e.taskList.forEach((t=>{t.notCompleted&&u(r.toString(),t,e),r++})),e.completedTasks>0&&(0,o.Div)("Completed-tasks",(t=>{t.className=F.class.CompletedLabel,t.innerHTML="Completed "+e.completedTasks.toString()})),e.taskList.forEach((t=>{t.notCompleted||u(r.toString(),t,e),r++}))})),(0,o.Div)("Task-input",(t=>{let r;t.className=F.class.InputTask,(0,o.TextArea)("Task",(t=>{r=t,t.placeholder="Enter the task",t.className=F.class.Input,r.sensorData={keyboard:()=>{""!=r.value.trim()&&e.addTask(r.value),r.value=""}}})),(0,o.Div)("Submit",(t=>{t.sensorData={pointer:()=>{""!=r.value.trim()&&(e.addTask(r.value),r.value="")}},t.className=F.class.Submit,(0,o.Img)("Add-icon",(e=>{e.src="./assets/add.svg"}))}))}))},(0,o.Div)("PageView-"+t.link,(e=>{(0,o.Div)("Content",(e=>{r&&r(e)})),n&&n(e)}));var t,r,n}o.HtmlRtti.isDebugAttributeEnabled=!1,n.Reactronic.setTraceMode(!0,n.TraceLevel.Error),n.Reactronic.setProfilingMode(!1,{asyncActionDurationWarningThreshold:Number.MAX_SAFE_INTEGER,mainThreadBlockingWarningThreshold:5,garbageCollectionSummaryInterval:Number.MAX_SAFE_INTEGER}),(0,o.trace)(!1,"r","SetPropValues"),document.body.onresize=()=>c.Resizing.pulse(-1);!function(e){(0,o.Div)("Body",(t=>{e.sensors.listen(t),t.className=I.class.Body,O(e)}))}(n.Transaction.run((()=>new x("$BUILD_TIMESTAMP"))))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,o,i]=e[l],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));a&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[s,a,c]=r,l=0;for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n);for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return n.O(d)},r=globalThis.webpackChunk=globalThis.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[216],(()=>n(110)));o=n.O(o)})();