webpackJsonp([27],{1004:function(n,t,A){var e=A(722);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);A(415)("4f50cee1",e,!0)},1038:function(n,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"NoticeBar",data:function(){return{shouldAnimate:!1,duration:9,typeClass:null,actionClass:null}},props:{speed:{type:Number,validator:function(n){return n>=30},default:30},delay:{type:Number,default:2},type:{type:String,default:"notice"},action:{type:String,default:"close"},onDismiss:Function},computed:{styleObj:function(){return{animationDuration:this.duration+"s",animationDelay:this.delay+"s"}},noticeBarWrapElement:function(){return this.$refs.noticeBarWrap},noticeBarContentElement:function(){return this.$refs.noticeBarContent}},methods:{close:function(){this.onDismiss&&this.onDismiss(),this.$el.remove()}},created:function(){switch(this.type){case"notice":this.typeClass="vm-icon-notice";break;case"warn":this.typeClass="vm-icon-warn";break;case"hide":this.typeClass="";break;default:this.typeClass=""}switch(this.action){case"close":this.actionClass="vm-icon-close";break;case"right":this.actionClass="vm-icon-right";break;case"hide":this.actionClass="";break;default:this.actionClass=""}},mounted:function(){var n=this.noticeBarWrapElement.getBoundingClientRect(),t=this.noticeBarContentElement.getBoundingClientRect();t.width>n.width&&(this.shouldAnimate=!0),this.duration=.87*t.width/this.speed>>0},components:{}}},1109:function(n,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=A(1159);t.default={name:"notice-bar",components:{NoticeBar:e.NoticeBar},data:function(){return{}},props:{},watch:{},computed:{},methods:{onDismissHandler:function(){window.alert("这个NoticeBar关闭了")}},created:function(){},mounted:function(){},activated:function(){},deactivate:function(){},destroyed:function(){}}},1159:function(n,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoticeBar=void 0;var e=A(765),i=function(n){return n&&n.__esModule?n:{default:n}}(e);t.NoticeBar=i.default},473:function(n,t,A){A(1004);var e=A(0)(A(1109),A(885),"data-v-a0a6b294",null);n.exports=e.exports},679:function(n,t,A){t=n.exports=A(414)(),t.push([n.i,".vm-noticebar{height:35px;width:100%;background:#fff9db;padding:0 3px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.vm-noticebar,.vm-noticebar .vm-noticebar-wrap{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.vm-noticebar .vm-noticebar-wrap{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100%;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.vm-noticebar .vm-noticebar-wrap .vm-noticebar-content{white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;left:0;top:0;z-index:1;opacity:1;height:100%;font-size:14px;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.vm-noticebar .vm-noticebar-wrap .vm-noticebar-content.animate{-webkit-animation-name:animations;animation-name:animations;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes animations{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}10%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}97%{opacity:1;-webkit-transform:translate(-110%);transform:translate(-110%)}97.000001%{display:none;opacity:0;visibility:hidden}98.9999999999%{-webkit-transform:translate(0);transform:translate(0)}99%{opacity:0;display:block;visibility:visible}to{opacity:1}}@keyframes animations{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}10%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}97%{opacity:1;-webkit-transform:translate(-110%);transform:translate(-110%)}97.000001%{display:none;opacity:0;visibility:hidden}98.9999999999%{-webkit-transform:translate(0);transform:translate(0)}99%{opacity:0;display:block;visibility:visible}to{opacity:1}}.vm-noticebar .vm-action,.vm-noticebar .vm-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 26px;-ms-flex:0 0 26px;flex:0 0 26px;top:0;height:35px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#ef4644}.vm-noticebar .vm-icon{left:0}.vm-noticebar .vm-action{right:0}.vm-noticebar .vm-icon-notice{background:url("+A(742)+") no-repeat 50%/15px 15px}.vm-noticebar .vm-icon-warn{background:url("+A(744)+") no-repeat 50%/15px 15px}.vm-noticebar .vm-icon-right{background:url("+A(743)+") no-repeat 50%/15px 15px}.vm-noticebar .vm-icon-close{background:url("+A(741)+") no-repeat 50%/15px 15px}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/raw/components/noticebar/noticebar.vue"],names:[],mappings:"AAEA,cACE,YAAa,AACb,WAAY,AACZ,mBAAoB,AAEpB,cAAe,AAKf,yBAA0B,AAC1B,sCAAuC,AACnC,sBAAuB,AACnB,6BAA+B,CAKxC,AACD,+CAfE,kBAAmB,AAEnB,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AAKd,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,kBAAoB,CAsB7B,AApBD,iCAKI,uBAAwB,AACxB,mCAAoC,AAChC,oBAAqB,AACjB,2BAA4B,AAKpC,YAAa,AACb,gBAAiB,AAEjB,mBAAoB,AACpB,eAAgB,AACZ,WAAY,AACR,MAAQ,CACnB,AACD,uDACM,mBAAoB,AACpB,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,UAAW,AACX,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,oCAAuC,AACvC,2BAA+B,CACpC,AACD,+DACQ,kCAAmC,AAC3B,0BAA2B,AAInC,yCAA0C,AAClC,iCAAkC,AAI1C,2CAA4C,AACpC,mCAAoC,AAE5C,mCAAoC,AAC5B,2BAA4B,AAEpC,iCAAkC,AAC1B,yBAA0B,AAElC,qCAAsC,AAC9B,4BAA8B,CAC7C,AACD,8BACA,GACI,UAAW,AACX,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,mCAAoC,AAC5B,0BAA4B,CACvC,AACD,WACI,aAAc,AACd,UAAW,AACX,iBAAmB,CACtB,AACD,eACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,cAAe,AACf,kBAAoB,CACvB,AACD,GACI,SAAW,CACd,CACA,AACD,sBACA,GACI,UAAW,AACX,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,mCAAoC,AAC5B,0BAA4B,CACvC,AACD,WACI,aAAc,AACd,UAAW,AACX,iBAAmB,CACtB,AACD,eACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,UAAW,AACX,cAAe,AACf,kBAAoB,CACvB,AACD,GACI,SAAW,CACd,CACA,AACD,gDACI,oBAAqB,AACrB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AACpB,sBAAuB,AACnB,kBAAmB,AACf,cAAe,AACvB,MAAO,AACP,YAAa,AACb,wBAAyB,AACzB,+BAAgC,AAC5B,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AAC1B,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAe,CAClB,AACD,uBACI,MAAQ,CACX,AACD,yBACI,OAAS,CACZ,AACD,8BACI,gEAAuE,CAC1E,AACD,4BACI,gEAAqE,CACxE,AACD,6BACI,gEAAsE,CACzE,AACD,6BACI,gEAAsE,CACzE",file:"noticebar.vue",sourcesContent:['\n@charset "UTF-8";\n.vm-noticebar {\n  height: 35px;\n  width: 100%;\n  background: #fff9db;\n  position: relative;\n  padding: 0 3px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vm-noticebar .vm-noticebar-wrap {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    overflow: hidden;\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.vm-noticebar .vm-noticebar-wrap .vm-noticebar-content {\n      white-space: nowrap;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 1;\n      opacity: 1;\n      height: 100%;\n      font-size: 14px;\n      -webkit-transition: opacity ease 100ms;\n      transition: opacity ease 100ms;\n}\n.vm-noticebar .vm-noticebar-wrap .vm-noticebar-content.animate {\n        -webkit-animation-name: animations;\n                animation-name: animations;\n        /*检索或设置对象所应用的动画名称*/\n        /*animation-duration: 9s;*/\n        /*检索或设置对象动画的持续时间*/\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n        /*检索或设置对象动画的过渡类型*/\n        /*animation-delay: 2s;*/\n        /*检索或设置对象动画延迟的时间*/\n        -webkit-animation-iteration-count: infinite;\n                animation-iteration-count: infinite;\n        /*检索或设置对象动画的循环次数*/\n        -webkit-animation-direction: normal;\n                animation-direction: normal;\n        /*检索或设置对象动画在循环中是否反向运动*/\n        -webkit-animation-fill-mode: none;\n                animation-fill-mode: none;\n        /*检索或设置对象动画时间之外的状态*/\n        -webkit-animation-play-state: running;\n                animation-play-state: running;\n}\n@-webkit-keyframes animations {\n0% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n10% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n97% {\n    opacity: 1;\n    -webkit-transform: translate(-110%);\n            transform: translate(-110%);\n}\n97.000001% {\n    display: none;\n    opacity: 0;\n    visibility: hidden;\n}\n98.9999999999% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n99% {\n    opacity: 0;\n    display: block;\n    visibility: visible;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes animations {\n0% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n10% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n97% {\n    opacity: 1;\n    -webkit-transform: translate(-110%);\n            transform: translate(-110%);\n}\n97.000001% {\n    display: none;\n    opacity: 0;\n    visibility: hidden;\n}\n98.9999999999% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n}\n99% {\n    opacity: 0;\n    display: block;\n    visibility: visible;\n}\n100% {\n    opacity: 1;\n}\n}\n.vm-noticebar .vm-icon, .vm-noticebar .vm-action {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 26px;\n        -ms-flex: 0 0 26px;\n            flex: 0 0 26px;\n    top: 0;\n    height: 35px;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #ef4644;\n}\n.vm-noticebar .vm-icon {\n    left: 0;\n}\n.vm-noticebar .vm-action {\n    right: 0;\n}\n.vm-noticebar .vm-icon-notice {\n    background: url(./images/notice.png) no-repeat center center/15px 15px;\n}\n.vm-noticebar .vm-icon-warn {\n    background: url(./images/warn.png) no-repeat center center/15px 15px;\n}\n.vm-noticebar .vm-icon-right {\n    background: url(./images/right.png) no-repeat center center/15px 15px;\n}\n.vm-noticebar .vm-icon-close {\n    background: url(./images/close.png) no-repeat center center/15px 15px;\n}\n'],sourceRoot:""}])},722:function(n,t,A){t=n.exports=A(414)(),t.push([n.i,".noticeBar[data-v-a0a6b294]{margin-bottom:10px}","",{version:3,sources:["/Users/Hsiang/GitHub/Vimo/dev/src/example/notice-bar.vue"],names:[],mappings:"AACA,4BACE,kBAAoB,CACrB",file:"notice-bar.vue",sourcesContent:["\n.noticeBar[data-v-a0a6b294] {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},741:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUxpce5FQu9GQu9GQ+9FQ+9FRO9GRFNkoZYAAAAGdFJOUwBMPF3SvrLrcTUAAADpSURBVEjH7dWxDYMwEIVhYIJUniBJnSp1kiITRNQgJO8/QgQ2cPfe3UmRUuLOlv0V+Aea5hj/HN3nRGuXl5hc80hnchaHejWrZ/JDbRgJyIPaDsS8ctunbQZiBia5kIAAgAgCkCAACAPQhAEowgQkYQKCcICdcICNcIGVcIFKBEAhkg8UIgIKEQCVmKK8Uwwsz4ADh5A4cAAiYgbuAbE8xDYgyi0kl6i34BPrNXrEdo0esXdgE6IDm5AhWYQKySJ0iUxAiUxgykhQykjwuwBETyW2+ivXc4kJPoOTEbg407055fPz+If9Mr5Mu3o5Kj2emwAAAABJRU5ErkJggg=="},742:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcexGRO9FQ+9FRO9FRO9FQ+5GQ+9GRO9FQ+9GQ+9FQ+9FRO9FQ+9FQ+9GQ+9FQ+9FQ+9GRF1tQD0AAAARdFJOUwAKjV8lmRZ7plG9Oc/mRm/1TGQrzgAAAi9JREFUWMOll1eChSAMRVGKFH3K/jc7FoKJoDIxn8o9AqkK0WLKxp/4YHNcrePr+00fHVfe2V0fe6bejPETwMT4CaDiN0A49VEz9C5pByZgTnrFBBzuj4sRPEBy/7hGIAfQ+UPvtwhmAMyEr54Cuil61ej+QVQA+92oJvdLUQMcsW0a3J9LAAUcr/27+4OoA9IWJD7yYK3uN9MWkg+fMgPM7M4EM8WWsU34jDvAHne7+TVckqOi96SAAcCCTtMtlPotdeWUMxgAGmqboQl+lS8OIrFyhOPL+5NcZw+uk5s5F1AkXgBCwpcN8XNZdLsUyVfAGUQ2P6oBuuRLVwCOQ8zgiBuAWqgeAVKSr9/AfqCrTX+NZAxQIJzQEgCsL5cp+yKIGkAsabFG2ZoAivhSiTpgSH6Q6FkCeBwKRtwAfikVf+gWE2A+9Za2YgzY9zlRN8AdSNDPlwTHAJOENcCtte6gCRDu76ANQLzgGYApLe7LOGgCPEZiC0C/58IjQEG/eczGB4An9UATwM/t9gsPAAnluCP5UtRUdwM4G8Ie9uNzVa4AemhJHU34//UFCw06b+BMopbONObOhCqG0t5bvZq1frrrjduXVS9F0VaK4WYoCDiUc83u3ueDUAcM78N7uNRlCoj0Bh9nJFkDjO8z0jmkDxWAavr7gN8EXQIYkyYLAKm/hRQTIAYyrTMAOcbZgFS7U7di/TOFrwDUspmAPPizATkg2AAIiA+AIyDm+rs/+thTxW2XXoMAAAAASUVORK5CYII="},743:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUxpcfBEQ+tFRO9FQ+9GQ+9FQ+9GQu9FQ+9FRO9FQ+9GQ+9FRO9FQ+9GRJfe8ngAAAANdFJOUwAWCjdOYySM1Xmft+2oCwE4AAAA8UlEQVRIx83VvQkCQRiE4fX8QyNjUTBTMLEBwQYEGxBsQLABA80PbODABkzMDYyMhBP/T68Xv2tgXmEDvfhhg7mZXef+6KsnNQ3C9KRBmqYTAmcJ5iYGClQMXOURYxMrBQoG7vKIvom1AnkDr5YSUxMLBXJHEzLwjoGbAsHORE+JqoGLX+BFDHz4TeAJBr5VoGTgIQNvmtjLwEOqZxfruaHAyxh4ZGJEgccUeOx1QgQ/nWqDxaPqYvlpPjhAmjBeAnSN4EVEy6K2BdTXBoScbeZNIS99Qs6WP4MiPn3GgHPCQeKk8c0K9bXiXPvQ+tWT/QE8gL0/hUUELwAAAABJRU5ErkJggg=="},744:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpce9IRe9GROtERO9FQ+9FQ+9FQ+9GQ+9FQ+9ERO9FRO9GQ+5GQ+9FRO9GROrzCQAAAAAOdFJOUwAcZAyCk/k1pEwv5MO0y2NEKQAAAYVJREFUSMeFVU1Kw1AQ/uJv6x/FA4gE3EpX4kriBaRY3IkguA7iAUQvUDxB6cK1S1fiEcQTiA1N1KpzBttYyJvvJZlv92a+vMzMm/kGcHF1+pg9HV+iAvex/ONiUOYOjqTAYYm/Jy5u2T9/JhpdIvSFcaf8+55fPttuALFPkHOHcC1lKOqxXOqXD+OC4oqgwi/DGWGvipDNEulVEeQm9zcr/fKVEw4cSxKGocvI/+G+QgLMuYQO58CEaR4N1zACFtSDTAhbriEFFlWYLcBtJPkF1hUhAtT5B1hThnesqPM3sKoMYx2TCLAhOuqlekKm6lhCEO6FtvfFrkWgeWjpwk0ILxbhWZ8HeCBCzH1KUcMbuH79DducFsfgEyiLSD+/X4cOG/jGV7zVv0V6Qmlx6T1wP3jjyR3FGFFPehhTV0uyKdTVVBh+7ogmi2dzOlkNEoQmz2ZQN7xD1gfuqA4rjKQ74imMqVGmytk6aSqtqdW22pv7wt445s6yt569N83Na+/uqu3/B5orpdz+CYNkAAAAAElFTkSuQmCC"},765:function(n,t,A){A(961);var e=A(0)(A(1038),A(839),null,null);n.exports=e.exports},839:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"vm-noticebar"},[n.typeClass?A("div",{staticClass:"vm-icon",class:n.typeClass}):n._e(),n._v(" "),A("div",{ref:"noticeBarWrap",staticClass:"vm-noticebar-wrap"},[A("div",{ref:"noticeBarContent",staticClass:"vm-noticebar-content",class:{animate:n.shouldAnimate},style:n.styleObj},[n._t("default")],2)]),n._v(" "),n.actionClass?A("div",{staticClass:"vm-action",class:n.actionClass,on:{click:n.close}}):n._e()])},staticRenderFns:[]}},885:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("Page",[A("Header",[A("Navbar",[A("Title",[n._v("Notice Bar")])],1)],1),n._v(" "),A("Content",{staticClass:"outer-content"},[A("div",{attrs:{padding:""}},[A("h4",[n._v("简介")]),n._v(" "),A("p",[n._v("这是一个通知条. 如果长度超过容器的宽度时, 则会自动滚动. 此时设置的speed和delay将会在这个情况生效. 其中speed属性的单位是px/s")])]),n._v(" "),A("div",{attrs:{padding:""}},[A("h5",[n._v("所有传参效果")])]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar"},[n._v("国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解! ")]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar",attrs:{type:"warn"}},[n._v("\n            国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解! \n        ")]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar",attrs:{type:"hide"}},[n._v("\n            国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解! \n        ")]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar",attrs:{action:"right"}},[n._v("\n            国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解! \n        ")]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar",attrs:{action:"hide"}},[n._v("\n            国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解! \n        ")]),n._v(" "),A("NoticeBar",{staticClass:"noticeBar",attrs:{type:"hide",action:"hide"}},[n._v("\n            国庆节期间余额宝收益和转出到账时间调整到节后, 给您带来不便, 敬请谅解!  \n        ")]),n._v(" "),A("div",{attrs:{padding:""}},[A("h5",[n._v("关闭回调")])]),n._v(" "),A("NoticeBar",{attrs:{onDismiss:n.onDismissHandler}},[n._v("这是一个很简短的通知, 不会滚动")])],1)],1)},staticRenderFns:[]}},961:function(n,t,A){var e=A(679);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);A(415)("44ab07d5",e,!0)}});
//# sourceMappingURL=27.54011efd55997a91b7d3.js.map