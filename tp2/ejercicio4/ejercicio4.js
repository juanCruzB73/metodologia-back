/*
Desarrollar un programa en Node.js que:
1.	Reciba como argumento el nombre de un archivo de texto.
2.	Lea el contenido del archivo y cuente cuántas veces aparece una palabra específica (también pasada como argumento).
3.	Imprima en consola el número de apariciones de la palabra.
Ejemplo de uso:
node contadorPalabras.js archivo.txt palabras


archivo.txt
Hola mundo, este es un ejemplo de conteo de palabras en un archivo.
Este archivo contiene palabras repetidas. Palabras, palabras y más palabras.


Salida esperada (si la palabra aparece 3 veces en el archivo):
La palabra "palabras" aparece 5 veces en el archivo "archivo.txt".
*/
const fs=require('fs');
const inputs = process.argv;

const [,,text,word]=inputs;

const readText=async()=>{
    try{
        const data=await fs.promises.readFile(`${text}`,'utf-8');
        let dataLower =data.toLowerCase();
        return dataLower.split(/[^a-zA-Z]+/)
    }catch(err){
        console.log(err)
    }
};
const countWords=async(wordToSearch)=>{
    let counter=0;
    try{
        const data = await readText();
        data.forEach(word=>{
            if(word===wordToSearch){
                counter++;
            }
        })
        return counter;
    }catch(err){
        console.log(err);
    }
};
const runTest=async()=> {
    const counter=await countWords(word);
    console.log(`the word: ${word} appears ${counter} times`)
}
runTest();