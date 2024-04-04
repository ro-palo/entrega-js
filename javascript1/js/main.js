


const productos=[
    {
        nombre:"cuadros",
        precio:50000,
        material:"marco en yeso",
        detalle:"cuadro en marco de yeso, con tematica a eleccion.",
        img:"./img/maquina-mano.png"
    },
    {
        nombre:"cuadros",
        precio:40000,
        material:"marco de madera",
        detalle:"cuadros en marco de madera, con tematica a eleccion.",
        img:"./img/masc_dere.jpg"
    },
    {
        nombre:"espejos",
        precio:60000,
        material:"halloween en yeso",
        detalle:"espejos con marco de yeso, tematica y color a eleccion",
        img:"./img/espejo-cala-medio.jpg"
    },
    {
        nombre:"espejos",
        precio:40000,
        material:"halloween en madera",
        detalle:"espejos con marco de madera y serpiente.",
        img:"./img/espejo-serpiente.jpg"
    },
    {
        nombre:"calaveras",
        precio:10000,
        material:"calaca en yeso y apliques",
        detalle:"calavera con apliques de colores a eleccion.",
        img:"./img/calaca2.webp"
    },
    {
        nombre:"calaveras",
        precio:10000,
        material:"calacas en yeso",
        detalle:"calaveras varios modelos",
        img:"./img/mecanico.png"
    }
]
let buscador=prompt("que producto queres ver?")
const productoEncontrado= productos.filter((producto) =>producto.nombre===buscador)
console.log(productoEncontrado)



