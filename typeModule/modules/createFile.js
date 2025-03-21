import fs from 'fs';

export const crearArchivo=(tabla,basePased)=>{
    try {
        fs.writeFileSync(`./Ctabla/tabla${basePased}.txt`, tabla, "utf-8");
    } catch (err) {
        if (err) throw err;
    }
}