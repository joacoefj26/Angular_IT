let oPrueba = {
    precio:12,
    iva:1.16,
};
oPrueba.calculaIvaAsiync = function() {
    setTimeout (function() {
        let precioFinal = this.precio * this.iva
        console.log(`
        Usando una funcion clásica:
        El precio final es ${precioFinal}
        `);
    }, 1000)
}
oPrueba.calculaIvaAsiync()


oPrueba.calculaIvaAsiync_Arrow = function() {
    setTimeout (() =>{
    let precioFinal = this.precio * this.iva;
    console.log(`
    Usando una arrow function:
    El precio final es ${precioFinal}
    `);
    }, 1000)
    }
    oPrueba.calculaIvaAsiync_Arrow();