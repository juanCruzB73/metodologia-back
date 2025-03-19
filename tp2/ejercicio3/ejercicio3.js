/*
Instrucciones:
Crear un archivo llamado contactos.json con el siguiente 
contenido inicial:

json
Copiar
Editar
[
    {
        "nombre": "Juan Pérez",
        "telefono": "123-456-7890",
        "email": "juan@example.com"
    }
]
Crear una función en Node.js que agregue un nuevo contacto 
al archivo contactos.json. El contacto debe ser un objeto con 
los siguientes campos:

json
Copiar
Editar
{
    "nombre": "[Tu Nombre]",
    "telefono": "[Tu Teléfono]",
    "email": "[Tu Email]"
}
crear una funcion para Leer y mostrar en la consola todos los 
contactos almacenados en contactos.json.

Agregar una función que elimine un contacto dado su nombre.

// Código de prueba
agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
mostrarContactos();
eliminarContacto('Juan Pérez');
mostrarContactos();
*/
const fs=require('fs');

const initialValue=[
    {
        "nombre": "Juan Pérez",
        "telefono": "123-456-7890",
        "email": "juan@example.com"
    }
];


const initializeFile=async()=>{
    try{
        await fs.promises.writeFile('contactos.json',JSON.stringify(initialValue),'utf-8')
        console.log('Initial data written to contactos.json');
    }catch(err){
        console.log(err);
    }
};

const readContacts=async()=>{
    try{
        const data=await fs.promises.readFile('contactos.json','utf-8');
        console.log("All contacts",JSON.parse(data));
    }catch(err){
        console.log(err)
    }
};

const addContact=async(contact)=>{
    try{
        const data=await fs.promises.readFile('contactos.json','utf-8');
        let dataParse=JSON.parse(data);
        dataParse.push(contact);
        await fs.promises.writeFile('contactos.json',JSON.stringify(dataParse),'utf-8');
        console.log("contact sucesfullya added")
    }catch(err){
        console.log(err);
    }
    
};

const deleteContact=async(name)=>{
    try{
        const data=await fs.promises.readFile('contactos.json','utf-8');
        let dataParse=JSON.parse(data);
        dataParse=dataParse.filter(contact=>contact.nombre!==name);
        await fs.promises.writeFile('contactos.json',JSON.stringify(dataParse),'utf-8');
        console.log("contact succesfully deletead")
    }catch(err){
        console.log(err);
    }
}

newContact={
    "nombre": "JuanB",
    "telefono": "261591182",
    "email": "juan@asdw.com"
}

const runTest=async()=> {
    await initializeFile();
    await addContact(newContact);
    await readContacts();
    await deleteContact("Juan Pérez");
    await readContacts();
}
runTest()