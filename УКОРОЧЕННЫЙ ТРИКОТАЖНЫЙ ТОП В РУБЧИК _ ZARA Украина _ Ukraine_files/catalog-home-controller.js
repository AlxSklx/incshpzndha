(window.zwstdWebpackLoader=window.zwstdWebpackLoader||[]).push([[18],{144:function(t,o,n){"use strict";var i;void 0===(i=function(t){var o=n(67),i=n(131);return o.extend({name:"HomeController",dataKeys:["showWishlistPopup"],init:function(){i.sendInfo({type:"home"}),this.data.showWishlistPopup&&n(827).show()}})}.call(o,n,o,t))||(t.exports=i)},827:function(t,o,n){"use strict";(function(i){var e;void 0===(e=function(t){var o=n(1),i=n(6),e=n(7),p=n(41),r=n(34);function s(){e.trigger(e.types.APP_BANNER_GO_TO_APP,{platform:"IOS"}),c("ios")}function a(){e.trigger(e.types.APP_BANNER_GO_TO_APP,{platform:"Android"}),c("android")}function c(t){var o=i.appLinks&&i.appLinks[t];r.open(o,"_blank")}return{show:function(){p.create({popupId:"wishlist-popup",template:"catalog/_wishlist-popup",contentData:{},verticalCenter:!0,onPopupCreated:function(){o("._ios-button").on("click",s),o("._android-button").on("click",a)},onPopupDestroyed:function(){e.trigger(e.types.APP_BANNER_CLOSE)}})}}}.call(o,n,o,t))||(t.exports=e)}).call(this,n(1))}}]);