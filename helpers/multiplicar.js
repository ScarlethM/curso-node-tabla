
const fs = require('fs');
const colors =require('colors/safe');
const crearArchivo = async (base = 5, listar= false, hasta=10) => {

    try {

        let salida= '';
        let consola= '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} ${'x'}  ${i} ${'='} ${base * i} \n`);
            consola += (`${base} ${'x'.brightMagenta}  ${i} ${'='.cyan} ${base * i} \n`);
        }
        if(listar){

            console.log(colors.rainbow('==========================='));
            console.log('       Tabla del:'.gray, colors.brightMagenta(base));
            console.log(colors.rainbow('==========================='));
    
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return`tabla-${base}.txt creado`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}