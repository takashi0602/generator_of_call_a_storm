webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW");function l(){var t=document.getElementById("output_field").getContext("2d");t.beginPath();var e=t.createLinearGradient(0,410,0,1620);e.addColorStop(0,"#FD81A6"),e.addColorStop(1,"#FFFF83"),t.fillStyle=e,t.fillRect(0,0,2880,1620)}$(function(){l(),$("#enter").click(function(){(n=document.getElementById("output_field").getContext("2d")).clearRect(0,0,2880,1620),l(),n.font="250px sans-serif",n.textAlign="left";var t=$("#title_top").val(),e=$("#title_bottom").val();n.fillStyle="#5853A0",n.fillText(t,140,590),n.textAlign="right",n.fillText(e,2740,930);var i=$("#left_cap").val();n.textAlign="left",n.lineWidth=5,n.fillStyle="#FFF",n.font="90px cursive",n.fillText(i,400,1350),n.strokeStyle="gray",n.strokeText(i,400,1350);var s=$("#right_cap").val();n.textAlign="right",n.lineWidth=5,n.fillStyle="#FFF",n.font="90px cursive",n.fillText(s,2480,1350),n.strokeStyle="gray",n.strokeText(s,2480,1350);var n,a=(n=document.getElementById("output_field")).toDataURL();document.getElementById("output_image").src=a,$("#output").css("border","0"),$("#output_field").hide(),$("#output_image").show()})});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("header",[i("h1",[t._v(t._s(t.msg))])]),t._v(" "),i("h3",[t._v("上の段")]),t._v(" "),t._m(0),t._v(" "),i("h3",[t._v("下の段")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input_text"},[e("input",{staticClass:"form-control",attrs:{id:"title_top",value:"はじめての"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input_text"},[e("input",{staticClass:"form-control",attrs:{id:"title_bottom",value:"懇親会LTだゾ"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("p",[this._v("左側")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"left_cap",value:"脚本 : フロント 太郎"}})]),this._v(" "),e("div",{staticClass:"col-sm-6"},[e("p",[this._v("左側")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"right_cap",value:"監督 : エンド 次郎"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"submit"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"enter"}},[this._v("嵐を呼ぶ!")]),this._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"tweet"}},[this._v("嵐をシェアする!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("canvas",{attrs:{id:"output_field",width:"2880",height:"1620"}}),this._v(" "),e("img",{attrs:{id:"output_image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("poewred by ITCreateClub")])])}]};var a={name:"App",components:{HelloWorld:i("VU/8")({name:"HelloWorld",data:function(){return{msg:"嵐を呼ぶサブタイトルジェネレータ"}}},n,!1,function(t){i("SNCP")},"data-v-e553dc6a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},staticRenderFns:[]};var o=i("VU/8")(a,r,!1,function(t){i("cbuX")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:o},template:"<App/>"})},SNCP:function(t,e){},cbuX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.983d5c81998c5f038b1d.js.map