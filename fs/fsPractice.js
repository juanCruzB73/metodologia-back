const fs=require('fs');

//read files

//const text=fs.readFileSync(parh,option)
let text;
try{
    
    text=fs.readFileSync('fs.txt','utf-8');

    console.log(text);
}catch(err){
    throw err;
}
//const text=fs.readFile(parh,option,callback)
fs.readFile('fs.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

//write files

//fs.writeFile(name,JSON.stringify(data),option,,callback)
fs.writeFile('testJSON.json',JSON.stringify({"testText":text}),'utf-8',(err)=>{
    if(err){
        throw err;
    }
})

//unlinkSync delete directories

//fs.unlink(archivo,callback)
fs.unlink('testJSON.json',err=>{
    if(err)throw err;
})

//fs.unlinkSync(archivo)

//create directories

//fs.mkdir(directoryname,callback)
fs.mkdir('test-directory',err=>{
    if(err)throw err;
})

//redir
//fs.readir('directoryname',callback)
fs.readdir('test-directory',(err,files)=>{
    if(err)throw err;
    console.log(files)
})