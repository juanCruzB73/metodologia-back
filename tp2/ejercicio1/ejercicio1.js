/*
Escribir en el archivo un mensaje de inicio cada vez que el programa
se ejecuta, con la fecha y hora actual en el formato:

[YYYY-MM-DD HH:MM:SS] - Inicio del programa
Simular la ejecución de una tarea que tarda 5 segundos. 
Mientras la tarea se ejecuta, escribir en log.txt:

[YYYY-MM-DD HH:MM:SS] - Ejecutando tarea...
Cuando la tarea finaliza, escribir en log.txt:

[YYYY-MM-DD HH:MM:SS] - Tarea completada

*/
const fs=require('fs')

//function to get date as string
const formatDate=(date=new Date())=>{
    //one line function to ensure always two numbers
    const pad = (num)=>num.toString().padStart(2,'0');


    const year = date.getFullYear();
    const month=pad(date.getMonth()+1);//+1 because get month starts by 0
    const day=pad(date.getDate());
    const hour=pad(date.getHours());
    const minute=pad(date.getMinutes());
    const second=pad(date.getSeconds());

    return `[${year}-${month}-${day} ${hour}:${minute}:${second}]`
}

fs.appendFile(`log.txt`,`${formatDate()} - Inicio del programa\n`,'utf-8',(err)=>{
    if(err)throw err;
})
fs.appendFile(`log.txt`,`${formatDate()} - Ejecutando programa\n`,'utf-8',(err)=>{
    if(err)throw err;
})
setTimeout(()=>{
    fs.appendFile(`log.txt`,`${formatDate()} - Fin programa\n`,'utf-8',(err)=>{
        if(err)throw err;
    })
},5000)