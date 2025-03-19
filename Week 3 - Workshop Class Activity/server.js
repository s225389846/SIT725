varexpress= require("express")
 varapp= express()
 app.use(express.static(__dirname+'/public'))
 app.use(express.json());
 app.use(express.urlencoded({ extended:false}));
 varport= process.env.port|| 3000;
 app.listen(port,()=>{
 console.log("App listening to: "+port)
 })
