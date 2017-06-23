webpackJsonp([8],{1019:function(o,e,t){var n=t(737);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);t(415)("8013cf30",n,!0)},1024:function(o,e,t){t(67),t(41),o.exports=t(1025)},1025:function(o,e,t){var n=t(14),i=t(66);o.exports=t(3).getIterator=function(o){var e=i(o);if("function"!=typeof e)throw TypeError(o+" is not iterable!");return n(e.call(o))}},1029:function(o,e,t){o.exports={default:t(1024),__esModule:!0}},1031:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1029),i=function(o){return o&&o.__esModule?o:{default:o}}(n);e.default={name:"Fab",data:function(){return{listsActive:!1,mainFabButtonComponent:null,fabListComponents:[]}},props:{top:Boolean,bottom:Boolean,left:Boolean,right:Boolean,middle:Boolean,center:Boolean,edge:Boolean},methods:{clickHandler:function(o){this.canActivateList(o)&&this.toggleList()},canActivateList:function(o){if(this.fabListComponents.length>0&&this.mainFabButtonComponent&&o.target){var e=o.target.closest(".ion-fab>[ion-fab]");return e&&e===this.mainFabButtonComponent.$el}return!1},toggleList:function(){this.setActiveLists(!this.listsActive)},setActiveLists:function(o){if(o!==this.listsActive){var e=!0,t=!1,n=void 0;try{for(var a,r=(0,i.default)(this.fabListComponents);!(e=(a=r.next()).done);e=!0){a.value.setVisible(o)}}catch(o){t=!0,n=o}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}this.mainFabButtonComponent.setActiveClose(o),this.listsActive=o}},close:function(){this.setActiveLists(!1)}},mounted:function(){var o=this;if(this.$children.forEach(function(e){"fabbutton"===e.$options._componentTag.toLowerCase()&&(o.mainFabButtonComponent=e),"fablist"===e.$options._componentTag.toLowerCase()&&o.fabListComponents.push(e)}),!this.mainFabButtonComponent||0===this.fabListComponents.length)return void console.error("The Fab component need at least one BabButton component and FabList component, please check!");this.mainFabButtonComponent.$el.addEventListener("click",this.clickHandler.bind(this))}}},1032:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(27),i=t(1);e.default={name:"FabButton",data:function(){return{isMainButton:!1}},props:{mini:Boolean,mode:{type:String,default:function(){return this.$config&&this.$config.get("mode")}},color:String},watch:{},computed:{modeClass:function(){return"fab fab-"+this.mode},colorClass:function(){return this.color&&"fab-"+this.mode+"-"+this.color}},methods:{setElementClass:function(o,e){(0,i.setElementClass)(this.$el,o,e)},clickHandler:function(){this.$emit("click")},setActiveClose:function(o){this.setElementClass("fab-close-active",o)}},components:{Icon:n.Icon}}},1033:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1);e.default={name:"FabList",data:function(){return{fabs:[],visible:!1}},props:{side:{type:String,default:"bottom"},mode:{type:String,default:function(){return this.$config&&this.$config.get("mode")}}},methods:{setVisible:function(o){var e=(0,n.isTrueProperty)(o);if(e!==this.visible){this.visible=e;var t=this.fabs,i=1;e?t.forEach(function(o){window.setTimeout(function(){return o.setElementClass("show",!0)},30*i),i++}):t.forEach(function(o){return o.setElementClass("show",!1)}),this.setElementClass("fab-list-active",e)}},setElementClass:function(o,e){(0,n.setElementClass)(this.$el,o,e)}},mounted:function(){var o=this;this.$children.forEach(function(e){"fabbutton"===e.$options._componentTag.toLowerCase()&&o.fabs.push(e)}),0===this.fabs.length&&console.error("The FabList component need at least one BabButton component, please check!");var e="fab-"+this.mode+"-in-list";this.fabs.forEach(function(o){o.setElementClass("fab-in-list",!0),o.setElementClass(e,!0)})}}},1074:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1154);e.default={name:"name",methods:{clickHandler:function(o){for(var e in this.$refs)this.$refs[e].close();console.debug("当前点击的是: "+o)}},components:{Fab:n.Fab,FabButton:n.FabButton,FabList:n.FabList}}},1154:function(o,e,t){"use strict";function n(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(e,"__esModule",{value:!0}),e.FabList=e.FabButton=e.Fab=void 0;var i=t(758),a=n(i),r=t(759),s=n(r),c=t(760),A=n(c);e.Fab=a.default,e.FabButton=s.default,e.FabList=A.default},441:function(o,e,t){t(924);var n=t(0)(t(1074),t(801),"data-v-18238ac2",null);o.exports=n.exports},642:function(o,e,t){e=o.exports=t(414)(),e.push([o.i,"","",{version:3,sources:[],names:[],mappings:"",file:"fab.vue",sourceRoot:""}])},709:function(o,e,t){e=o.exports=t(414)(),e.push([o.i,"","",{version:3,sources:[],names:[],mappings:"",file:"fabList.vue",sourceRoot:""}])},710:function(o,e,t){e=o.exports=t(414)(),e.push([o.i,"","",{version:3,sources:[],names:[],mappings:"",file:"fabButton.vue",sourceRoot:""}])},737:function(o,e,t){e=o.exports=t(414)(),e.push([o.i,".fab{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:block;overflow:hidden;width:56px;height:56px;border-radius:50%;font-size:14px;line-height:56px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;background-clip:padding-box;-webkit-font-kerning:none;font-kerning:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:strict}.fab .ion-icon{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:2.4rem}.fab[mini]{margin:8px;width:40px;height:40px}.fab[mini],.fab[mini] .fab-close-icon{line-height:40px}.ion-fab{position:absolute;z-index:999}.ion-fab[center]{left:50%;margin-left:-28px}.ion-fab[middle]{top:50%;margin-top:-28px}.ion-fab[top]{top:10px}.ion-fab[right]{right:10px}.ion-fab[bottom]{bottom:10px}.ion-fab[left]{left:10px}.ion-fab[top][edge]{top:-28px}.ion-fab[bottom][edge]{bottom:-28px}.ion-fab-list{position:absolute;top:0;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:66px 0;min-width:56px;min-height:56px}.fab-in-list{margin:8px 0;width:40px;height:40px;opacity:0;visibility:hidden;-webkit-transform:scale(0);transform:scale(0)}.fab-in-list.show{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.ion-fab-list[side=left] .fab-in-list,.ion-fab-list[side=right] .fab-in-list{margin:0 8px}.ion-fab-list[side=top]{top:auto;bottom:0;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ion-fab-list[side=left]{right:0;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;margin:0 66px}.ion-fab-list[side=right]{left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 66px}.fab-list-active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.fab-close-icon{position:absolute;top:0;right:0;left:0;line-height:56px;opacity:0;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg)}.fab-close-icon,.fab .button-inner{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fab-close-active .fab-close-icon{opacity:1;-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}.fab-close-active .button-inner{opacity:0;-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg)}.fab-ios{color:#fff;background-color:#387ef5}.fab-ios:active{background-color:#3474e1}.fab-ios-in-list{color:#000;background-color:#f4f4f4;-webkit-transition:opacity .2s ease 10ms,-webkit-transform .2s ease 10ms;transition:opacity .2s ease 10ms,-webkit-transform .2s ease 10ms;transition:transform .2s ease 10ms,opacity .2s ease 10ms;transition:transform .2s ease 10ms,opacity .2s ease 10ms,-webkit-transform .2s ease 10ms}.fab-ios-in-list:active{background-color:#e0e0e0}.fab-ios-primary{color:#fff;background-color:#387ef5}.fab-ios-primary.activated{background-color:#3474e1}.fab-ios-secondary{color:#fff;background-color:#32db64}.fab-ios-secondary.activated{background-color:#2ec95c}.fab-ios-danger{color:#fff;background-color:#f53d3d}.fab-ios-danger.activated{background-color:#e13838}.fab-ios-light{color:#000;background-color:#f4f4f4}.fab-ios-light.activated{background-color:#e0e0e0}.fab-ios-dark{color:#fff;background-color:#222}.fab-ios-dark.activated{background-color:#343434}.fab-md{color:#fff;background-color:#387ef5;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);-webkit-transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1)}.fab-md:active{background-color:#3474e1;box-shadow:0 5px 15px 0 rgba(0,0,0,.4),0 4px 7px 0 rgba(0,0,0,.1)}.fab-md-in-list{color:#000;background-color:#f4f4f4;-webkit-transition:opacity .2s ease 10ms,box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-transform .2s ease 10ms;transition:opacity .2s ease 10ms,box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-transform .2s ease 10ms;transition:transform .2s ease 10ms,opacity .2s ease 10ms,box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1);transition:transform .2s ease 10ms,opacity .2s ease 10ms,box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-transform .2s ease 10ms}.fab-md-in-list:active{background-color:#e0e0e0}.fab-md .button-effect{background-color:#fff}.fab-md-primary{color:#fff;background-color:#387ef5}.fab-md-primary:active{background-color:#3474e1}.fab-md-primary .button-effect{background-color:#fff}.fab-md-secondary{color:#fff;background-color:#32db64}.fab-md-secondary:active{background-color:#2ec95c}.fab-md-secondary .button-effect{background-color:#fff}.fab-md-danger{color:#fff;background-color:#f53d3d}.fab-md-danger:active{background-color:#e13838}.fab-md-danger .button-effect{background-color:#fff}.fab-md-light{color:#000;background-color:#f4f4f4}.fab-md-light:active{background-color:#e0e0e0}.fab-md-light .button-effect{background-color:#000}.fab-md-dark{color:#fff;background-color:#222}.fab-md-dark:active{background-color:#343434}.fab-md-dark .button-effect{background-color:#fff}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/raw/components/fab/fab.vue"],names:[],mappings:"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",file:"fab.vue",sourcesContent:["\n.fab {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  font-size: 14px;\n  line-height: 56px;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  background-clip: padding-box;\n  -webkit-font-kerning: none;\n          font-kerning: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  contain: strict;\n}\n.fab .ion-icon {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 2.4rem;\n}\n.fab[mini] {\n  margin: 8px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n.fab[mini] .fab-close-icon {\n  line-height: 40px;\n}\n.ion-fab {\n  position: absolute;\n  z-index: 999;\n}\n.ion-fab[center] {\n    left: 50%;\n    margin-left: -28px;\n}\n.ion-fab[middle] {\n    top: 50%;\n    margin-top: -28px;\n}\n.ion-fab[top] {\n    top: 10px;\n}\n.ion-fab[right] {\n    right: 10px;\n}\n.ion-fab[bottom] {\n    bottom: 10px;\n}\n.ion-fab[left] {\n    left: 10px;\n}\n.ion-fab[top][edge] {\n    top: -28px;\n}\n.ion-fab[bottom][edge] {\n    bottom: -28px;\n}\n.ion-fab-list {\n  position: absolute;\n  top: 0;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 66px 0;\n  min-width: 56px;\n  min-height: 56px;\n}\n.fab-in-list {\n  margin: 8px 0;\n  width: 40px;\n  height: 40px;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fab-in-list.show {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.ion-fab-list[side=left] .fab-in-list,\n.ion-fab-list[side=right] .fab-in-list {\n  margin: 0 8px;\n}\n.ion-fab-list[side=top] {\n  top: auto;\n  bottom: 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.ion-fab-list[side=left] {\n  right: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  margin: 0 66px;\n}\n.ion-fab-list[side=right] {\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 66px;\n}\n.fab-list-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.fab-close-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  line-height: 56px;\n  opacity: 0;\n  -webkit-transform: scale(0.4) rotateZ(-45deg);\n          transform: scale(0.4) rotateZ(-45deg);\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.fab .button-inner {\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.fab-close-active .fab-close-icon {\n  opacity: 1;\n  -webkit-transform: scale(1) rotateZ(0deg);\n          transform: scale(1) rotateZ(0deg);\n}\n.fab-close-active .button-inner {\n  opacity: 0;\n  -webkit-transform: scale(0.4) rotateZ(45deg);\n          transform: scale(0.4) rotateZ(45deg);\n}\n.fab-ios {\n  color: #fff;\n  background-color: #387ef5;\n}\n.fab-ios:active {\n  background-color: #3474e1;\n}\n.fab-ios-in-list {\n  color: #000;\n  background-color: #f4f4f4;\n  -webkit-transition: opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n  transition: opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n}\n.fab-ios-in-list:active {\n  background-color: #e0e0e0;\n}\n.fab-ios-primary {\n  color: #fff;\n  background-color: #387ef5;\n}\n.fab-ios-primary.activated {\n  background-color: #3474e1;\n}\n.fab-ios-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n.fab-ios-secondary.activated {\n  background-color: #2ec95c;\n}\n.fab-ios-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n.fab-ios-danger.activated {\n  background-color: #e13838;\n}\n.fab-ios-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n.fab-ios-light.activated {\n  background-color: #e0e0e0;\n}\n.fab-ios-dark {\n  color: #fff;\n  background-color: #222;\n}\n.fab-ios-dark.activated {\n  background-color: #343434;\n}\n.fab-md {\n  color: #fff;\n  background-color: #387ef5;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.1);\n  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.fab-md:active {\n  background-color: #3474e1;\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.4), 0 4px 7px 0 rgba(0, 0, 0, 0.1);\n}\n.fab-md-in-list {\n  color: #000;\n  background-color: #f4f4f4;\n  -webkit-transition: opacity 200ms ease 10ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 200ms ease 10ms;\n  transition: opacity 200ms ease 10ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 200ms ease 10ms;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 200ms ease 10ms;\n}\n.fab-md-in-list:active {\n  background-color: #e0e0e0;\n}\n.fab-md .button-effect {\n  background-color: #fff;\n}\n.fab-md-primary {\n  color: #fff;\n  background-color: #387ef5;\n}\n.fab-md-primary:active {\n  background-color: #3474e1;\n}\n.fab-md-primary .button-effect {\n  background-color: #fff;\n}\n.fab-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n.fab-md-secondary:active {\n  background-color: #2ec95c;\n}\n.fab-md-secondary .button-effect {\n  background-color: #fff;\n}\n.fab-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n.fab-md-danger:active {\n  background-color: #e13838;\n}\n.fab-md-danger .button-effect {\n  background-color: #fff;\n}\n.fab-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n.fab-md-light:active {\n  background-color: #e0e0e0;\n}\n.fab-md-light .button-effect {\n  background-color: #000;\n}\n.fab-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n.fab-md-dark:active {\n  background-color: #343434;\n}\n.fab-md-dark .button-effect {\n  background-color: #fff;\n}\n"],sourceRoot:""}])},758:function(o,e,t){t(1019);var n=t(0)(t(1031),t(900),null,null);o.exports=n.exports},759:function(o,e,t){t(992);var n=t(0)(t(1032),t(873),null,null);o.exports=n.exports},760:function(o,e,t){t(991);var n=t(0)(t(1033),t(872),null,null);o.exports=n.exports},801:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("Page",[t("Header",[t("Navbar",[t("Title",[o._v("Fab")])],1)],1),o._v(" "),t("Content",{attrs:{padding:""}},[t("Fab",{ref:"fab1",attrs:{top:"",right:"",edge:""},slot:"fixed"},[t("FabButton",{attrs:{mini:""}},[t("Icon",{attrs:{name:"add"}})],1),o._v(" "),t("FabList",{attrs:{side:"bottom"}},[t("FabButton",{on:{click:function(e){o.clickHandler("facebook")}}},[t("Icon",{attrs:{name:"logo-facebook"}})],1),o._v(" "),t("FabButton",{on:{click:function(e){o.clickHandler("twitter")}}},[t("Icon",{attrs:{name:"logo-twitter"}})],1),o._v(" "),t("FabButton",{on:{click:function(e){o.clickHandler("vimeo")}}},[t("Icon",{attrs:{name:"logo-vimeo"}})],1),o._v(" "),t("FabButton",{on:{click:function(e){o.clickHandler("googleplus")}}},[t("Icon",{attrs:{name:"logo-googleplus"}})],1)],1)],1),o._v(" "),t("Fab",{ref:"fab2",attrs:{top:"",left:""},slot:"fixed"},[t("FabButton",{attrs:{color:"secondary"}},[t("Icon",{attrs:{name:"arrow-dropright"}})],1),o._v(" "),t("FabList",{attrs:{side:"right"}},[t("FabButton",{on:{click:function(e){o.clickHandler("facebook")}}},[t("Icon",{attrs:{name:"logo-facebook"}})],1),o._v(" "),t("FabButton",{on:{click:function(e){o.clickHandler("twitter")}}},[t("Icon",{attrs:{name:"logo-twitter"}})],1),o._v(" "),t("FabButton",{on:{click:function(e){o.clickHandler("vimeo")}}},[t("Icon",{attrs:{name:"logo-vimeo"}})],1)],1),o._v(" "),t("FabList",{attrs:{side:"bottom"}},[t("FabButton",{on:{click:function(e){o.clickHandler("googleplus")}}},[t("Icon",{attrs:{name:"logo-googleplus"}})],1)],1)],1),o._v(" "),t("Fab",{ref:"fab3",attrs:{center:"",middle:""},slot:"fixed"},[t("FabButton",{attrs:{color:"danger"}},[t("Icon",{attrs:{name:"md-share"}})],1),o._v(" "),t("FabList",{attrs:{side:"right"}},[t("FabButton",{attrs:{color:"danger"},on:{click:function(e){o.clickHandler("facebook")}}},[t("Icon",{attrs:{name:"logo-facebook"}})],1)],1),o._v(" "),t("FabList",{attrs:{side:"bottom"}},[t("FabButton",{attrs:{color:"secondary"},on:{click:function(e){o.clickHandler("googleplus")}}},[t("Icon",{attrs:{name:"logo-googleplus"}})],1)],1),o._v(" "),t("FabList",{attrs:{side:"top"}},[t("FabButton",{attrs:{color:"primary"},on:{click:function(e){o.clickHandler("vimeo")}}},[t("Icon",{attrs:{name:"logo-vimeo"}})],1)],1),o._v(" "),t("FabList",{attrs:{side:"left"}},[t("FabButton",{attrs:{color:"dark"},on:{click:function(e){o.clickHandler("twitter")}}},[t("Icon",{attrs:{name:"logo-twitter"}})],1)],1)],1),o._v(" "),t("Fab",{ref:"fab4",attrs:{bottom:"",left:""},slot:"fixed"},[t("FabButton",{attrs:{color:"dark"}},[t("Icon",{attrs:{name:"arrow-dropup"}})],1),o._v(" "),t("FabList",{attrs:{side:"top"}},[t("FabButton",{attrs:{color:"danger"},on:{click:function(e){o.clickHandler("facebook")}}},[t("Icon",{attrs:{name:"logo-facebook"}})],1),o._v(" "),t("FabButton",{attrs:{color:"secondary"},on:{click:function(e){o.clickHandler("googleplus")}}},[t("Icon",{attrs:{name:"logo-googleplus"}})],1),o._v(" "),t("FabButton",{attrs:{color:"dark"},on:{click:function(e){o.clickHandler("twitter")}}},[t("Icon",{attrs:{name:"logo-twitter"}})],1),o._v(" "),t("FabButton",{attrs:{color:"primary"},on:{click:function(e){o.clickHandler("vimeo")}}},[t("Icon",{attrs:{name:"logo-vimeo"}})],1)],1)],1),o._v(" "),t("Fab",{ref:"fab5",attrs:{bottom:"",right:""},slot:"fixed"},[t("FabButton",{attrs:{color:"dark"}},[t("Icon",{attrs:{name:"arrow-dropleft"}})],1),o._v(" "),t("FabList",{attrs:{side:"left"}},[t("FabButton",{attrs:{color:"danger"},on:{click:function(e){o.clickHandler("facebook")}}},[t("Icon",{attrs:{name:"logo-facebook"}})],1),o._v(" "),t("FabButton",{attrs:{color:"secondary"},on:{click:function(e){o.clickHandler("googleplus")}}},[t("Icon",{attrs:{name:"logo-googleplus"}})],1),o._v(" "),t("FabButton",{attrs:{color:"dark"},on:{click:function(e){o.clickHandler("twitter")}}},[t("Icon",{attrs:{name:"logo-twitter"}})],1),o._v(" "),t("FabButton",{attrs:{color:"primary"},on:{click:function(e){o.clickHandler("vimeo")}}},[t("Icon",{attrs:{name:"logo-vimeo"}})],1)],1)],1),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("h5",[o._v("注意")]),o._v(" "),t("p",[o._v("Fab需要手动放置在fixed的slot中, 关闭使用ref获取组件示例之后执行close()方法.")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")]),o._v(" "),t("p",[o._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus explicabo laudantium nobis quas, quidem ratione recusandae vel! Assumenda blanditiis ducimus illum itaque molestiae ut. At culpa dolores modi quod vitae?")])],1)],1)},staticRenderFns:[]}},872:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement;return(o._self._c||e)("div",{staticClass:"ion-fab-list",attrs:{side:o.side}},[o._t("default")],2)},staticRenderFns:[]}},873:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("button",{class:[o.modeClass,o.colorClass],attrs:{"ion-fab":"",mini:o.mini},on:{click:o.clickHandler}},[t("Icon",{staticClass:"fab-close-icon",attrs:{name:"close"}}),o._v(" "),t("span",{staticClass:"button-inner"},[o._t("default")],2)],1)},staticRenderFns:[]}},900:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement;return(o._self._c||e)("div",{staticClass:"ion-fab",attrs:{top:o.top,bottom:o.bottom,left:o.left,right:o.right,middle:o.middle,center:o.center,edge:o.edge}},[o._t("default")],2)},staticRenderFns:[]}},924:function(o,e,t){var n=t(642);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);t(415)("7793413d",n,!0)},991:function(o,e,t){var n=t(709);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);t(415)("1e3d1826",n,!0)},992:function(o,e,t){var n=t(710);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);t(415)("44700356",n,!0)}});
//# sourceMappingURL=8.e0f7bcb077dfea6decd4.js.map