var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }

];

const cambiarColor = (color) => {
    document.getElementById("capa").style.backgroundColor = color;
}

const contadorCaracteres = (e) => {
    let cantidad = e.value.length;
    document.getElementById("cantCaracteres").innerHTML = cantidad + ' caracteres';
}

const alumAprobados = () => {
    let alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);
    console.log(alumnosAprobados);
    alert("En total hay " + alumnosAprobados.length + " alumnos aprobados.\nPara detalles mire la consola.")
}