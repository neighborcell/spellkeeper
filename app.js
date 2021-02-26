import pTemp from "./temp.js"

var app = new Vue({
  el: "#vApp",
  data: {
    dDic: [],
    dCrt: [],
  },
  created() {
    this.dCrt = pTemp.crt;
  },
});