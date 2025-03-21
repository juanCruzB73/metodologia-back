const createTable=(basePased)=>{
    let table = `tabla del ${basePased}\n`;
    for (let i = 0; i <= 10; i++) {
        table += `${basePased} * ${i} = ${basePased * i}\n`;
    }
    return table;
}

module.exports=createTable;