module.exports ={
  dbs: "mongodb://127.0.0.1:27017/student",//数据库的地址，student：数据库名称
  redis: {
    get host() {
      return "127.0.0.1"
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host(){
      return "smtp.qq.com"
    },
    get user(){
      return "787420277@qq.com"
    },
    get pass(){
      return "123456"//授权码密码
    },
    get code(){
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return ()=>{
        return parseInt(new Date().getTime()) + (60*1000);
      }
    }
  },
  // sign: "a3c9fe0782107295ee9f1709edd15218",
  // requestUrl: "http://cp-tools.cn"
}
