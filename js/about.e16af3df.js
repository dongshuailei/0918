"use strict";(self["webpackChunkmyobj"]=self["webpackChunkmyobj"]||[]).push([[443],{5230:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"40%",height:"50%","margin-left":"30%"}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"id"}},[t("el-input",{model:{value:e.form.userid,callback:function(t){e.$set(e.form,"userid",t)},expression:"form.userid"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-radio",{attrs:{label:"0"}},[e._v("男")]),t("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{prop:"phone",label:"手机号码"}},[t("el-input",{attrs:{maxlength:"11"},model:{value:e.form.iphone,callback:function(t){e.$set(e.form,"iphone",t)},expression:"form.iphone"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),t("el-button",[e._v("取消")])],1)],1)],1)},l=[],a=o(4161),s=o(7684),n={data(){return{form:{name:"1",sex:"1",iphone:"1",userid:"1"}}},methods:{onSubmit(){let e={name:this.form.name,userid:this.form.userid,sex:this.form.sex,iphone:this.form.iphone};(0,s.C)(e).then((e=>{"用户名重复"==e.msg?this.$message({type:"success",message:"用户名重复!"}):this.$message({type:"success",message:"添加成功!"}),console.log(e)}))},handleFileChange(e){const t=e.target.files[0],o=new FileReader;o.onload=e=>{const t=e.target.result,o=new FormData;o.append("imgurl",t),a.Z.post("https://www.zzgoodqc.cn/index.php/index/upload/uploadimg",o).then((e=>{const t=e.data.data.url;this.img=`http://47.94.4.201/${t}`,console.log(e.data.data)})).catch((e=>{console.error(e)}))},o.readAsDataURL(t)}},computed:{fullImageUrl(){return this.img}},created(){}},i=n,m=o(1001),u=(0,m.Z)(i,r,l,!1,null,null,null),f=u.exports}}]);
//# sourceMappingURL=about.e16af3df.js.map