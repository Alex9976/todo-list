(()=>{"use strict";var e,t={962:(e,t,r)=>{var o=r(361),n=r(44);var i=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends o.ObservableObject{constructor(e,t,r){super(),this.link=e,this.hashLink="#"+e,this.linkTitle=t,this.title=r,this.content="",this.isActive=!1}}i([o.unobservable,s("design:type",String)],a.prototype,"link",void 0),i([o.unobservable,s("design:type",String)],a.prototype,"hashLink",void 0),i([o.unobservable,s("design:type",String)],a.prototype,"linkTitle",void 0),i([o.unobservable,s("design:type",String)],a.prototype,"title",void 0);var c=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class d extends o.ObservableObject{constructor(e){super(),this.text=e,this.notCompleted=!0,this.isEdit=!1}changeActivity(){this.notCompleted=!this.notCompleted}}c([o.transaction,l("design:type",Function),l("design:paramtypes",[]),l("design:returntype",void 0)],d.prototype,"changeActivity",null);var p=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class g extends o.ObservableObject{constructor(e){super(),this.taskList=[],this.completedTasks=0,this.currentItemID=0,this.nextItemId=0,this.version=e,this.sensors=new n.HtmlSensors,this.homePage=new a("/home",'<img src="assets/home.svg"/>',"Todo");const t=JSON.parse(localStorage.getItem("tasks"));null!==t&&(this.taskList=t.map((e=>{const t=new d(e.text);return t.notCompleted=e.notCompleted,t})))}convertLineBreaks(e){for(;e.includes("\n");)e=e.replace("\n","<br />");return e}swapTasks(){if(this.currentItemID!==this.nextItemId){this.taskList=this.taskList.toMutable();const e=this.taskList[this.currentItemID];this.taskList.splice(this.currentItemID,1);const t=this.taskList.slice(this.nextItemId);this.taskList.splice(this.nextItemId),this.taskList.push(e),this.taskList=this.taskList.concat(t)}}addTask(e){this.taskList=this.taskList.toMutable(),this.taskList.push(new d(this.convertLineBreaks(e)))}deleteTask(e){this.taskList=this.taskList.toMutable(),this.taskList.splice(this.taskList.indexOf(e),1)}editTask(e,t){e.isEdit?(null!=t&&(e.text=this.convertLineBreaks(t)),e.isEdit=!1):e.isEdit=!0}updateTasks(){this.completedTasks=this.taskList.filter((e=>!e.notCompleted)).length,localStorage.setItem("tasks",JSON.stringify(this.taskList))}pointerActions(){try{const e=this.sensors.pointer;if(void 0!==e.clicked){const t=e.clicked;t instanceof Function&&(0,o.nonreactive)((()=>t()))}}catch(e){console.error(e)}}keyboardActions(){try{const e=this.sensors.keyboard;if("Enter"===e.down&&e.modifiers!==n.KeyboardModifiers.Shift){const t=e.elementDataList[0];t instanceof Function&&(0,o.nonreactive)((()=>t())),this.sensors.keyboard.preventDefault=!0}}catch(e){console.error(e)}}handleDragAndDrop(){const e=this.sensors.htmlDrag,t=e.draggable;t&&(e.dragStarted&&(e.effectAllowed="copy",e.draggingOver&&(e.dragTarget instanceof d?(e.dropAllowed=!0,e.dropEffect="copy"):e.dropAllowed=!1)),e.dragFinished&&e.dropped&&e.dragTarget instanceof d&&(this.currentItemID=this.taskList.indexOf(t),this.nextItemId=this.taskList.indexOf(e.dragTarget),this.swapTasks()))}}p([o.unobservable,u("design:type",String)],g.prototype,"version",void 0),p([o.unobservable,u("design:type",a)],g.prototype,"homePage",void 0),p([o.unobservable,u("design:type",Number)],g.prototype,"completedTasks",void 0),p([o.unobservable,u("design:type",n.HtmlSensors)],g.prototype,"sensors",void 0),p([o.unobservable,u("design:type",Number)],g.prototype,"currentItemID",void 0),p([o.unobservable,u("design:type",Number)],g.prototype,"nextItemId",void 0),p([o.transaction,u("design:type",Function),u("design:paramtypes",[String]),u("design:returntype",void 0)],g.prototype,"addTask",null),p([o.transaction,u("design:type",Function),u("design:paramtypes",[d]),u("design:returntype",void 0)],g.prototype,"deleteTask",null),p([o.transaction,u("design:type",Function),u("design:paramtypes",[d,String]),u("design:returntype",void 0)],g.prototype,"editTask",null),p([o.reaction,u("design:type",Function),u("design:paramtypes",[]),u("design:returntype",void 0)],g.prototype,"updateTasks",null),p([o.reaction,(0,o.options)({trace:o.TraceLevel.Silent}),u("design:type",Function),u("design:paramtypes",[]),u("design:returntype",void 0)],g.prototype,"pointerActions",null),p([o.reaction,(0,o.options)({trace:o.TraceLevel.Silent}),u("design:type",Function),u("design:paramtypes",[]),u("design:returntype",void 0)],g.prototype,"keyboardActions",null),p([o.reaction,u("design:type",Function),u("design:paramtypes",[]),u("design:returntype",void 0)],g.prototype,"handleDragAndDrop",null);var h=r(935);class b{constructor(){this.name="DarkBlueTheme",this.background="#14344F",this.foreground="#E0E0E0",this.logoBackground="#00B3FF",this.logoForeground="white",this.footerForeground="#777",this.activeItemMarker="#00B3FF",this.itemUnderPointerMarker="#00A4E5",this.emphasizedText="#5DF586",this.titleForeground="#E0E0E0",this.documentHeading1Foreground="#E0E0E0",this.documentHeading2Foreground="white",this.documentTOCBackground="#122F47",this.documentScrollTopButtonBackground="#00A4E5",this.documentCodeInlineForeground="#67E8FF",this.documentCodeInlineBackground="rgba(255, 255, 255, 0.07)",this.documentCodeBlockForeground="#67E8FF",this.documentCodeBlockBackground="transparent",this.playgroundTextAreaBackground="white",this.playgroundTextAreaForeground="#444",this.playgroundTextAreaCaretColor="black",this.playgroundTextLengthForeground="rgb(253, 165, 93)",this.playgroundTextLengthErrorForeground="rgb(253, 93, 93)",this.playgroundWhiteSpaceForeground="lightgrey",this.playgroundFindButtonBackground="#00B831",this.playgroundFindButtonForeground="white",this.playgroundFindButtonCheckMarkBackground="#EEE",this.playgroundFindButtonCheckMarkForeground="#444",this.playgroundFindButtonCheckMarkHoverBackground="#DDD",this.playgroundTagButtonBackground="#AAA",this.playgroundTagButtonActiveForeground="black",this.playgroundTagButtonInactiveForeground="#E0E0E0",this.playgroundTagButtonCounterForeground="grey",this.playgroundReadOnlyPackageUnderPointerMarker="#ECECEC"}}var f=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class v extends o.ObservableObject{constructor(...e){super(),this.all=[],e.forEach((e=>this.all.push(e))),this.active=e[0]}setActive(e){this.active=e}setActiveByName(e){const t=this.all.findIndex((t=>t.name===e));t>=0&&(this.active=this.all[t])}setNextActive(){const e=(this.all.indexOf(this.active)+1)%this.all.length,t=this.all[e];this.active=t}}f([o.unobservable,m("design:type",Array)],v.prototype,"all",void 0),f([o.transaction,m("design:type",Function),m("design:paramtypes",[Object]),m("design:returntype",void 0)],v.prototype,"setActive",null),f([o.transaction,m("design:type",Function),m("design:paramtypes",[String]),m("design:returntype",void 0)],v.prototype,"setActiveByName",null),f([o.transaction,m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",void 0)],v.prototype,"setNextActive",null);const k=o.Transaction.run((()=>new v(new b))),y=(0,n.restyler)((()=>({Body:h.iv`
      width: 100%;
      font-size: calc(14px + (20 - 14) * (100vw - 800px) / (1920 - 800));
      font-family: Calibri, Tahoma, Arial, sans-serif;
      background: url("./assets/background.jpg");
      background-size: cover;
      color: ${k.active.foreground};
      min-height: 100vh;

      a {
        text-decoration: none;
        outline: none;
        color: ${k.active.foreground};
      }
    `})));const x=(0,n.restyler)((()=>({InputTask:h.iv`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: fixed;
      font-size: 25px;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,Input:h.iv`
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
    `,Submit:h.iv`
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
    `,CompletedLabel:h.iv`
      padding: 7px;
      margin: 5px;
      user-select: none;
      font-size: 90%;
      /*background-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      backdrop-filter: blur(5px);
      width: 10%;*/
    `,List:h.iv`
      font-size: 110%;
      overflow: auto;
      height: calc(100vh - 91px);
      padding: 20px;
      overflow-y: scroll;
    `}))),T=(0,n.restyler)((()=>({Delete:h.iv`
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
    `,Edit:h.iv`
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
    `,InactiveDelete:h.iv`
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
    `,Task:h.iv`
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
    `,TaskElement:h.iv`
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
    `,InactiveTaskElement:h.iv`
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
    `,Input:h.iv`
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
    `,Arrow:h.iv`
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
    `})));function E(e,t,r){return(0,n.RxLI)("Task"+e,t,(e=>{let o;e.className=T.class.Task,e.dataForSensor.htmlDraggable=t.notCompleted&&!t.isEdit?t:void 0,e.dataForSensor.htmlDrag=t.notCompleted&&!t.isEdit?t:void 0,e.draggable=!0,t.isEdit?(0,n.Div)("Task",(e=>{o=e,o.contentEditable="true",o.dataForSensor.keyboard=()=>{""!==o.innerHTML.trim()&&r.editTask(t,o.innerHTML)},e.innerHTML=t.text,e.className=T.class.Input})):(0,n.Div)("Task-element",(e=>{e.dataForSensor.click=()=>t.changeActivity(),e.className=t.notCompleted?T.class.TaskElement:T.class.InactiveTaskElement,e.innerHTML=t.text})),t.notCompleted&&(0,n.Div)("Edit",(e=>{e.dataForSensor.click=()=>t.isEdit?r.editTask(t,o.innerHTML):r.editTask(t),e.className=T.class.Edit,(0,n.Img)("Edit-icon",(e=>{e.src=t.isEdit?"./assets/check.svg":"./assets/pencil.svg"}))})),(0,n.Div)("Delete",(e=>{e.dataForSensor.click=()=>{r.deleteTask(t)},e.className=t.notCompleted?T.class.Delete:T.class.InactiveDelete,(0,n.Img)("Delete-icon",(e=>{e.src="./assets/trash.svg"}))}))}))}function F(e){return t=e.homePage,r=t=>{(0,n.RxUL)("List",null,(t=>{t.className=x.class.List;let r=0;e.taskList.forEach((t=>{t.notCompleted&&E(r.toString(),t,e),r++})),e.completedTasks>0&&(0,n.Div)("Completed-tasks",(t=>{t.className=x.class.CompletedLabel,t.innerHTML="Completed "+e.completedTasks.toString()})),e.taskList.forEach((t=>{t.notCompleted||E(r.toString(),t,e),r++}))})),(0,n.Div)("Task-input",(t=>{let r;t.className=x.class.InputTask,(0,n.TextArea)("Task",(t=>{r=t,t.placeholder="Enter the task",t.className=x.class.Input,r.dataForSensor.keyboard=()=>{""!=r.value.trim()&&e.addTask(r.value),r.value=""}})),(0,n.Div)("Submit",(t=>{t.dataForSensor.click=()=>{""!=r.value.trim()&&(e.addTask(r.value),r.value="")},t.className=x.class.Submit,(0,n.Img)("Add-icon",(e=>{e.src="./assets/add.svg"}))}))}))},(0,n.Div)("PageView-"+t.link,(e=>{(0,n.Div)("Content",(e=>{r&&r(e)})),o&&o(e)}));var t,r,o}n.HtmlRtti.isDebugAttributeEnabled=!1,o.Rx.setTraceMode(!0,o.TraceLevel.ErrorsOnly),o.Rx.setProfilingMode(!1,{repetitiveUsageWarningThreshold:Number.MAX_SAFE_INTEGER,mainThreadBlockingWarningThreshold:5,asyncActionDurationWarningThreshold:Number.MAX_SAFE_INTEGER,garbageCollectionSummaryInterval:Number.MAX_SAFE_INTEGER});const w=o.Transaction.run((()=>new g("$BUILD_TIMESTAMP")));n.RxDom.Root((()=>{(0,n.HtmlBody)("html > body",null,(()=>{!function(e){(0,n.Div)("Body",(t=>{e.sensors.listen(t),t.className=y.class.Body,F(e)}))}(w)}))}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,n,i]=e[d],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,n,i]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[s,a,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var d=c(o)}for(t&&t(r);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[s[l]]=0;return o.O(d)},r=globalThis.webpackChunktodo_list=globalThis.webpackChunktodo_list||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[216],(()=>o(962)));n=o.O(n)})();