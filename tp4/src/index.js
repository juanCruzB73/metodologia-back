import 'dotenv/config'
import { sumar } from './math.js';
import readline from 'readline/promises';
import fs from 'fs';

//ejercicio 1
console.log("-----------------ejercicios 1-----------------")
console.log(`DB_HOST: ${process.env.DB_HOST} - DB_USER: ${process.env.DB_USER} - DB_PASS: ${process.env.DB_PASS}`);
//ejercicio 2
console.log("-----------------ejercicios 2-----------------")
const num1=5;
const num2=3;
console.log(sumar(num1,num2));
//ejercicio 3
console.log("-----------------ejercicios 3-----------------")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('¿cual es tu nombre?')
    .then(nombre=>{
    console.log(`Hola, ${nombre}`);
    return rl.question('¿cual es tu edad?');//to chain another .then is necesary to return a promise
})
   .then(age=>{
        const birthDate=new Date().getFullYear()-parseInt(age);
        console.log(`Tu año de nacimiento es: ${birthDate}`);
    }).finally(()=>{
        rl.close();
    });
//ejercicio 2
console.log("-----------------ejercicios 2-----------------")
let data='';
rl.question('¿cual es tu nombre?')
    .then(nombre=>{
    const name=nombre;
    data+=`nombre: ${name} \n`
    return rl.question('¿cual es tu edad?');//to chain another .then is necesary to return a promise
})
   .then(age=>{
        const edad=age;
        data+=`edad: ${edad} \n`
        return rl.question('¿cual es tu email?');
    })
    .then(email=>{
        const correo = email;
        data+=`correo: ${correo}`
    })
    .finally(()=>{
        fs.writeFile('datos_usuario.txt',data,'utf-8',(err)=>{
            if (err)throw err;
        });
        fs.readFile('datos_usuario.txt','utf-8',(err,data)=>{
            if(err)throw err;
            console.log(data);
        })
        rl.close();
        
    })


/*
PREGUNTAS

¿Qué ventajas tiene usar dotenv para manejar configuraciones sensibles en vez de tenerlas directamente en el código?

las ventajas de usarlo es que se mantiene en provado varibales que no se quiere dar a conocer, para proteger los datos.

¿Por qué es importante utilizar Nodemon durante el desarrollo en proyectos de Node.js?

nodemon ayuda a relizar cambios automaticos en la aplicación sin necesidad de reiniciar la aplicacion

¿Qué diferencias encuentras entre el uso de require y import/export? ¿Por qué es preferible utilizar la sintaxis ES6 en proyectos modernos?

la diferencia que es import/export es la manera de moderna de exportar/importan en java script y mantiene un codigo mas limpio en comparacion con module/require

*/

