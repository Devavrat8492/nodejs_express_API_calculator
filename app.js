const express= require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res) =>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{
    
    const n1=Number(req.body.num1)
    
    const n2=Number(req.body.num2)

    const value = req.body.operation;

    if(value == 'ADD'){
        var output=n1+n2
    }
    else if(value == 'SUBTRACT'){
        var output=n1-n2
    }
    else if(value == 'MULTIPLY'){
        var output=n1*n2
    }
    else if(value == 'DIVIDE'){
        var output=n1/n2
    }
    else if(value == 'SIN'){
        var output=Math.sin(n1*Math.PI/180)
    }
    else if(value == 'COS'){
        var output=Math.cos(n1*Math.PI/180)
    }
    else if(value == 'TAN'){
        var output=Math.tan(n1*Math.PI/180)
    }
    else if(value == 'AC'){
        res.sendFile(__dirname+"/index.html")
    }
    res.send('The Value is '+output)
})

app.listen(3000,(res) => {
    console.log("server started at port 3000")
})