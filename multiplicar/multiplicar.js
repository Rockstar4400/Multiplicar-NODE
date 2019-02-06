const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');


let crearArchivo = (base, limite) => {

    console.log('================'.green);
    console.log(`tabla de la base ${ base }`.green);
    console.log('================'.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base } no es un numero`);
            return;
        }

        let result = 0;
        let data = '';

        for (let i = 1; i < limite; i++) {
            // console.log(base + ` * ` + i + ` = ` + result);
            result = i * base;
            data += base + ` * ` + i + ` = ` + result + "\n";
        }

        fs.writeFile(`tabla - ${base }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}


let listar = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base } no es un numero`);
            return;
        }

        let result = 0;

        for (let i = 1; i < limite; i++) {

            result = i * base;
            console.log(base + ` * ` + i + ` = ` + result);
        }

    });
}


module.exports = {
    crearArchivo,
    listar
}