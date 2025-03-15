/*
Desarrollar un programa en Node.js que realice las siguientes operaciones utilizando el módulo `fs`:

1. Crear un archivo llamado `datos.txt` y escribir en él el siguiente contenido:
   ```
   Nombre: [Tu Nombre]
   Edad: [Tu Edad]
   Carrera: [Tu Carrera]
   ```
   
2. Leer el archivo `datos.txt` e imprimir su contenido en la consola.

3. Agregar al final del archivo la fecha y hora actuales en el siguiente formato:
   ```
   Fecha de modificación: [YYYY-MM-DD HH:MM:SS]
   ```

4. Renombrar el archivo `datos.txt` a `informacion.txt`.

5. Eliminar el archivo `informacion.txt` tras 10 segundos de haber sido renombrado.
*/
const fs=require('fs');

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

const data="Nombre: Juan Cruz Berrios\nEdad: 21\nCarrera: Programación"

fs.writeFile('datos.txt',data,'utf-8',(err)=>{
    if(err)throw err;
})

fs.readFile('datos.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.appendFile(`datos.txt`,`Fecha de modificación ${formatDate()}`,'utf-8',(err)=>{
    if(err)throw err;
})

fs.rename('datos.txt','informacion.txt',(err)=>{
    if(err)throw err;
})

setTimeout(()=>{
    fs.unlink('informacion.txt',err=>{
        if(err)throw err;
    })
},10000)