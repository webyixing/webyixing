(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-playlistPage-playlistPage"],{1172:function(t,e,i){"use strict";i.r(e);var n=i("5533"),a=i("d8e8");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("fa95");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"34beb0a9",null,!1,n["a"],o);e["default"]=c.exports},1755:function(t,e,i){"use strict";var n=i("53ed"),a=i.n(n);a.a},1851:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(){this.$emit("click")}}};e.default=n},"1db9":function(t,e,i){"use strict";i.r(e);var n=i("ff3b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"35a0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".bg-pic-box[data-v-8b64fbe0]{position:relative;height:%?500?%;padding:%?140?% %?40?% %?100?% %?40?%}.bg-pic-box .img-bg[data-v-8b64fbe0]{width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;z-index:88;-webkit-filter:blur(%?30?%);filter:blur(%?30?%)}.bg-pic-box .img-pic[data-v-8b64fbe0]{width:100%;min-height:%?200?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;z-index:100}.pic-box-content[data-v-8b64fbe0]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;z-index:120;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pic-box-content-info[data-v-8b64fbe0]{width:%?0?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;z-index:120;color:#fff\n\t/* margin-left: 40rpx; */}\n\n/* 卡片 */.name-card-box[data-v-8b64fbe0]{background-color:#fff;margin:0 %?100?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;-webkit-box-shadow:0 0 %?3?% %?2?% #f0f0f0;box-shadow:0 0 %?3?% %?2?% #f0f0f0;position:relative;top:%?-20?%;background-color:hsla(0,0%,100%,.9);z-index:100;padding:%?20?%}.name-card-item[data-v-8b64fbe0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),t.exports=e},"53ed":function(t,e,i){var n=i("c8d3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("add44afc",n,!0,{sourceMap:!1,shadowMode:!1})},5441:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(){this.$emit("click")}}};e.default=n},5533:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"673d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("51b2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"comment-box"},[i("v-uni-view",{staticClass:"avatar-box"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.item.user.avatarUrl}})],1),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"user-name-box flex"},[i("v-uni-view",[i("v-uni-view",{staticClass:"user-name"},[t._v(t._s(t.item.user.nickname))]),i("v-uni-view",{staticClass:"date"},[t._v(t._s(t.formatTime(t.item.time)))])],1),i("v-uni-view",{staticClass:"like-bt"},[t._v(t._s(t.item.likedCount)),i("u-icon",{attrs:{name:"thumb-up"}})],1)],1),i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.item.content))])],1)],1)},r=[]},"6d5a":function(t,e,i){"use strict";i.r(e);var n=i("f413"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"6dfc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object},data:function(){return{}},computed:{},created:function(){},methods:{}};e.default=n},7147:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={sqCommentItem:i("76eb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"c-total"},[t._v("热门评论("+t._s(t.formatNumber(t.total))+")")]),t._l(t.hotComments,(function(t,e){return i("sq-comment-item",{key:e,attrs:{item:t}})}))],2)},r=[]},"71a7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * uView 组件\r\n */\r\n/* uni.scss */.u-col-0[data-v-84a226ca]{width:0}.u-col-1[data-v-84a226ca]{width:calc(100%/12)}.u-col-2[data-v-84a226ca]{width:calc(100%/12 * 2)}.u-col-3[data-v-84a226ca]{width:calc(100%/12 * 3)}.u-col-4[data-v-84a226ca]{width:calc(100%/12 * 4)}.u-col-5[data-v-84a226ca]{width:calc(100%/12 * 5)}.u-col-6[data-v-84a226ca]{width:calc(100%/12 * 6)}.u-col-7[data-v-84a226ca]{width:calc(100%/12 * 7)}.u-col-8[data-v-84a226ca]{width:calc(100%/12 * 8)}.u-col-9[data-v-84a226ca]{width:calc(100%/12 * 9)}.u-col-10[data-v-84a226ca]{width:calc(100%/12 * 10)}.u-col-11[data-v-84a226ca]{width:calc(100%/12 * 11)}.u-col-12[data-v-84a226ca]{width:calc(100%/12 * 12)}',""]),t.exports=e},"745d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".comment-box[data-v-475cce10]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?24?% %?24?%;border-bottom-color:#f0f0f0;border-bottom-style:solid;border-bottom-width:%?1?%;color:#333}.comment-box .avatar-box .avatar[data-v-475cce10]{width:%?80?%;height:%?80?%;-webkit-border-radius:50%;border-radius:50%;margin-right:%?24?%}.comment-box .info-box[data-v-475cce10]{width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1}.comment-box .user-name-box[data-v-475cce10]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?10?%}.comment-box .user-name-box .like-bt[data-v-475cce10]{font-size:%?26?%}.comment-box .user-name-box .user-name[data-v-475cce10]{font-size:%?28?%}.comment-box .user-name-box .date[data-v-475cce10]{font-size:%?24?%;color:#999}",""]),t.exports=e},"76eb":function(t,e,i){"use strict";i.r(e);var n=i("673d"),a=i("bcaf");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c2b8");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"475cce10",null,!1,n["a"],o);e["default"]=c.exports},"81fa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * uView 组件\r\n */\r\n/* uni.scss */.u-row[data-v-34beb0a9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-flex-wrap:wrap;flex-wrap:wrap}',""]),t.exports=e},"8afc":function(t,e,i){"use strict";i.r(e);var n=i("1851"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},9013:function(t,e,i){var n=i("81fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1de7470a",n,!0,{sourceMap:!1,shadowMode:!1})},"944ae":function(t,e,i){var n=i("745d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bcee0e5e",n,!0,{sourceMap:!1,shadowMode:!1})},"9c8f":function(t,e,i){"use strict";var n=i("c83b"),a=i.n(n);a.a},a973:function(t,e,i){"use strict";i.r(e);var n=i("f754"),a=i("8afc");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9c8f");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"84a226ca",null,!1,n["a"],o);e["default"]=c.exports},b430:function(t,e,i){"use strict";i.r(e);var n=i("7147"),a=i("6d5a");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("1755");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"664c25a6",null,!1,n["a"],o);e["default"]=c.exports},bcaf:function(t,e,i){"use strict";i.r(e);var n=i("6dfc"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},bde4:function(t,e,i){var n=i("35a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("a4f0d2d2",n,!0,{sourceMap:!1,shadowMode:!1})},be52:function(t,e,i){"use strict";i.r(e);var n=i("fd59"),a=i("1db9");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e0ba");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"8b64fbe0",null,!1,n["a"],o);e["default"]=c.exports},c2b8:function(t,e,i){"use strict";var n=i("944ae"),a=i.n(n);a.a},c83b:function(t,e,i){var n=i("71a7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("38e61b92",n,!0,{sourceMap:!1,shadowMode:!1})},c8d3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".c-total[data-v-664c25a6]{padding:%?30?% %?24?%;text-align:center;font-weight:bolder}",""]),t.exports=e},d8e8:function(t,e,i){"use strict";i.r(e);var n=i("5441"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},e0ba:function(t,e,i){"use strict";var n=i("bde4"),a=i.n(n);a.a},f413:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String},data:function(){return{hotComments:[],total:0}},computed:{},created:function(){},methods:{getList:function(t){var e=this,i=t.id,n=t.type,a=t.limit;this.$api.commentHot({data:{type:n,id:i,limit:a||30}}).then((function(t){e.hotComments=t.hotComments,e.total=t.total}))}}};e.default=n},f754:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},fa95:function(t,e,i){"use strict";var n=i("9013"),a=i.n(n);a.a},fd59:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("f155").default,uImage:i("c833").default,uPopup:i("b59e").default,uRow:i("1172").default,uCol:i("a973").default,uIcon:i("51b2").default,uCellGroup:i("89a3").default,uCellItem:i("c80b").default,uLoadmore:i("fa5b").default,sqComments:i("b430").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"playlist-page"},[i("u-navbar",{attrs:{"border-bottom":!1,height:55,immersive:!0,background:{background:"transparent"}}}),i("v-uni-view",{staticClass:"bg-pic-box"},[i("v-uni-image",{staticClass:"img-bg",attrs:{width:"100%",height:"100%",mode:"aspectFill",src:t.detail.picUrl}}),i("v-uni-view",{staticClass:"pic-box-content"},[i("v-uni-view",{staticStyle:{width:"220rpx",height:"220rpx","z-index":"999","margin-right":"20rpx"}},[i("u-image",{staticClass:"img-pic",attrs:{"border-radius":"20",width:"220rpx",height:"220rpx",mode:"widthFix",src:t.detail.picUrl}})],1),i("v-uni-view",{staticClass:"pic-box-content-info"},[i("v-uni-view",{staticStyle:{"font-weight":"bold","font-size":"32rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openArtist(t.detail.artist.id)}}},[t._v(t._s(t.detail.name)),t.detail.alias&&t.detail.alias.length>0?i("v-uni-text",[t._v("-("+t._s(t.detail.alias.join(","))+")")]):t._e()],1),i("v-uni-view",{staticStyle:{"margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openArtist(t.detail.artist.id)}}},[t._v(t._s(1==t.type?"作者":"歌手")+"："+t._s(t.artist.name))]),i("v-uni-view",{staticStyle:{"margin-top":"50rpx","font-size":"24rpx",color:"#ddd"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.showDesc=!t.showDesc}.apply(void 0,arguments)}}},[t.detail.publishTime?i("v-uni-view",[t._v("发行时间："+t._s(t.formatTime(t.detail.publishTime,"yyyy.MM.dd")))]):t._e(),t.detail.description?i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[t._v(t._s(t.detail.description.substr(0,50))+"...   >")]):t._e()],1)],1)],1),i("u-popup",{attrs:{mode:"bottom","border-radius":"50",height:"80%","safe-area-inset-bottom":!0,closeable:!0},model:{value:t.showDesc,callback:function(e){t.showDesc=e},expression:"showDesc"}},[i("v-uni-view",{staticStyle:{position:"relative",padding:"50rpx 40rpx"}},[i("v-uni-view",{staticStyle:{"z-index":"120","font-size":"32rpx","line-height":"50rpx"}},[t._v(t._s(t.detail.description))])],1)],1)],1),i("v-uni-view",{staticClass:"name-card-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDevToast.apply(void 0,arguments)}}},[i("v-uni-view",[i("u-row",[i("u-col",{attrs:{span:4}},[i("v-uni-view",{staticClass:"name-card-item"},[i("u-icon",{attrs:{name:"bag",size:"40"}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.detail.mark))])],1)],1),i("u-col",{attrs:{span:4}},[i("v-uni-view",{staticClass:"name-card-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openComment.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"chat",size:"40"}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.detail.info.commentCount))])],1)],1),i("u-col",{attrs:{span:4}},[i("v-uni-view",{staticClass:"name-card-item"},[i("u-icon",{attrs:{name:"share",size:"40"}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.detail.info.shareCount))])],1)],1)],1)],1)],1),i("v-uni-view",{},[i("u-cell-group",{staticClass:"cell-group-box",attrs:{border:!1}},[t._l(t.songs,(function(e){return i("u-cell-item",{attrs:{"title-width":"600",arrow:!1}},[i("v-uni-view",{attrs:{slot:"title"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClickSongItem(e)}},slot:"title"},[i("v-uni-view",{staticStyle:{"font-size":"32rpx",color:"#000000"}},[t._v(t._s(e.name))]),i("v-uni-view",{staticStyle:{"font-size":"26rpx",color:"#999"}},[t._v(t._s(e.ar?e.ar[0].name:"未知"))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},attrs:{slot:"right-icon"},slot:"right-icon"},[i("u-icon",{directives:[{name:"show",rawName:"v-show",value:e.mv,expression:"item.mv"}],staticStyle:{"margin-right":"15rpx"},attrs:{name:"play-circle-fill",size:"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openPlayVideoPage(e.mv,1)}}}),i("u-icon",{staticStyle:{transform:"rotate(90deg)"},attrs:{name:"more-dot-fill"}})],1)],1)})),i("u-loadmore",{staticStyle:{padding:"20rpx 0"},attrs:{status:"loadmore","load-text":{loadmore:"就到这里了",loading:"努力加载中",nomore:"实在没有了"}}})],2)],1),i("u-popup",{attrs:{"safe-area-inset-bottom":!0,closeable:!0,mode:"bottom","border-radius":"10",height:"800rpx"},model:{value:t.showComment,callback:function(e){t.showComment=e},expression:"showComment"}},[i("sq-comments",{ref:"comments"})],1)],1)},r=[]},ff3b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:null,type:1,detail:{picUrl:"",publishTime:0,alias:[],description:"",info:{}},artist:{id:null,name:""},showDesc:!1,songs:[],showComment:!1}},onLoad:function(t){this.id=t.id,this.type=t.type},onReady:function(){this.getPlaylistDesc()},created:function(){},methods:{getPlaylistDesc:function(){var t=this,e=this.id,i=this.type;e&&(1==i?this.$api.playlistDetail({data:{id:e}}).then((function(e){var i=e.playlist;t.detail.picUrl=i.coverImgUrl,t.detail.publishTime=i.createTime,t.detail.name=i.name,t.detail.mark=i.subscribedCount,t.detail.info={commentCount:i.commentCount,shareCount:i.shareCount},t.artist={name:i.creator.nickname},t.songs=i.tracks})):this.$api.album({data:{id:e}}).then((function(e){var i=e.album,n=e.songs;t.detail=i,t.artist=i.artist,t.songs=n})))},onClickSongItem:function(t){console.log(t,"item");var e={id:t.id,name:t.name,picUrl:t.al?t.al.picUrl:""};this.openMp3(e)},openComment:function(){var t=this;this.showComment=!0,this.$nextTick((function(){var e=1==t.type?2:3;t.$refs.comments.getList({type:e,id:t.id})}))}}};e.default=n}}]);