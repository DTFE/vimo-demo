webpackJsonp([81],{1299:function(e,t,n){n(994);var a=n(1)(n(996),n(997),"data-v-0685abb5",null);e.exports=a.exports},994:function(e,t,n){var a=n(995);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(738)("45880a63",a,!0)},995:function(e,t,n){t=e.exports=n(737)(),t.push([e.i,".event__p[data-v-0685abb5],.event__ul[data-v-0685abb5]{padding-left:40px}.event__ul .event__li[data-v-0685abb5]{margin-bottom:5px}.event__ul .event__li .eventType[data-v-0685abb5]{padding:2px 5px;border-radius:2px;background:#ddd;display:inline-block}.event__ul .event__li .blur[data-v-0685abb5]{background:#ddd6ff}.event__ul .event__li .focus[data-v-0685abb5]{background:#29a0fd}.event__ul .event__li .input[data-v-0685abb5]{background:#ccb020}.event__ul .event__li .valid[data-v-0685abb5]{background:#58ea66}.event__ul .event__li .invalid[data-v-0685abb5]{background:#d61652}","",{version:3,sources:["/home/travis/build/vm-component/vimo/examples/src/pages/input/event.vue"],names:[],mappings:"AAIA,uDACE,iBAAmB,CACpB,AACD,uCACI,iBAAmB,CACtB,AACD,kDACM,gBAAiB,AACjB,kBAAmB,AACnB,gBAAiB,AACjB,oBAAsB,CAC3B,AACD,6CACM,kBAAoB,CACzB,AACD,8CACM,kBAAoB,CACzB,AACD,8CACM,kBAAoB,CACzB,AACD,8CACM,kBAAoB,CACzB,AACD,gDACM,kBAAoB,CACzB",file:"event.vue",sourcesContent:["\n.event__p[data-v-0685abb5] {\n  padding-left: 40px;\n}\n.event__ul[data-v-0685abb5] {\n  padding-left: 40px;\n}\n.event__ul .event__li[data-v-0685abb5] {\n    margin-bottom: 5px;\n}\n.event__ul .event__li .eventType[data-v-0685abb5] {\n      padding: 2px 5px;\n      border-radius: 2px;\n      background: #ddd;\n      display: inline-block;\n}\n.event__ul .event__li .blur[data-v-0685abb5] {\n      background: #ddd6ff;\n}\n.event__ul .event__li .focus[data-v-0685abb5] {\n      background: #29a0fd;\n}\n.event__ul .event__li .input[data-v-0685abb5] {\n      background: #ccb020;\n}\n.event__ul .event__li .valid[data-v-0685abb5] {\n      background: #58ea66;\n}\n.event__ul .event__li .invalid[data-v-0685abb5] {\n      background: #d61652;\n}\n"],sourceRoot:""}])},996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"InputEventDemo",data:function(){return{regex:/\d{2}-\d{2}-\d{3}/,eventList:[]}},computed:{eventListDisplay:function(){return JSON.parse(JSON.stringify(this.eventList)).splice(-15)}},methods:{submit:function(){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"enter",msg:""})},onBlurtHandler:function(){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"blur",msg:""})},onFocusHandler:function(){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"focus",msg:""})},onInputHandler:function(e){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"input",msg:e})},onValidHandler:function(e,t){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"valid",msg:"type: "+t+" - value: "+e})},onInvalidHandler:function(e,t){this.eventList.push({time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),eventType:"invalid",msg:"type: "+t+" - value: "+e})}}}},997:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("Header",[n("Navbar",[n("Title",[e._v("Event")])],1)],1),e._v(" "),n("Content",{staticClass:"outer-content"},[n("List",[n("ListHeader",[n("span",[e._v("事件测试")])]),e._v(" "),n("Item",[n("Label",{attrs:{color:"primary"}},[e._v("短文本")]),e._v(" "),n("Input",{attrs:{type:"text","clear-input":"",regex:e.regex,placeholder:"'XX-XX-XXX' 数字格式"},on:{onKeyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)},onBlur:e.onBlurtHandler,onFocus:e.onFocusHandler,onInput:e.onInputHandler,onValid:e.onValidHandler,onInvalid:e.onInvalidHandler}})],1),e._v(" "),n("Item",[n("Label",{attrs:{slot:"item-left",fixed:""},slot:"item-left"},[e._v("验证条件")]),e._v(" "),n("p",[e._v(e._s(e.regex.toString()))])],1)],1),e._v(" "),n("p",{staticClass:"event__p"},[n("strong",[e._v("触发记录:")])]),e._v(" "),n("ul",{staticClass:"event__ul"},[e._l(e.eventListDisplay.reverse(),function(t,a){return n("li",{key:a,staticClass:"event__li"},[n("span",[e._v(e._s(t.time))]),e._v(" "),n("span",{staticClass:"eventType",class:t.eventType,attrs:{"text-uppercase":""}},[e._v(e._s(t.eventType))]),e._v(" "),n("span",[e._v(e._s(t.msg))])])}),e._v(" "),0===e.eventListDisplay.length?n("li",[e._v("空")]):e._e()],2)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=81.59c45a3a89238027ef67.js.map