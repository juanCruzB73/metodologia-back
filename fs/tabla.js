const fs=require('fs');

const inputs = process.argv;

//verify if there is a base for default value or base inputed
let base;
inputs.forEach(arg => {
    if(arg.startsWith("base=")){
        return base=arg.slice(5);
    }else{
        base=5;
    }
});

//function write tables
const tables=[1,2,3,4,5,6,7,8,9,10]
const tablesResult=[]
tables.forEach(num=>{
    try{
        let num2=Number(base);
        if(num2!==NaN){
            tablesResult.push(num*num2);
        }else{
            throw("the input was invalid: ",base);
        }
    }catch(err){
        
    }
});

//check if directory exist and creates it
if(!fs.existsSync('data')){
    fs.mkdir('data',err=>{
        if(err)throw err;
    })
}

//redir and check if file exist and create or alert
fs.readdir('data',(err)=>{
    if(err)throw err;
    if(!fs.existsSync(`data/tabla-${base}.txt`)){
        fs.writeFile(`data/tabla-${base}.txt`,tablesResult.toString(),'utf-8',(err)=>{
            if(err)throw err;
    })
    }else{
        console.log("that table already exists")
    }
})