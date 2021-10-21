document.getElementById("adelanteMes").addEventListener("click", function () {
    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);

    if (indexMesActual < 11) {


        var indexmesSiguiente = indexMesActual + 1;
        var mesSiguiente = mes[indexmesSiguiente];

        document.getElementById("mes").innerHTML = mesSiguiente

        console.log(mesActual);
        console.log(indexMesActual)
    } else {

        document.getElementById("mes").innerHTML = mes[0];
    }

})

document.getElementById("atrasMes").addEventListener("click", function () {
    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);

    if (indexMesActual > 0) {


        var indexmesSiguiente = indexMesActual - 1;
        var mesSiguiente = mes[indexmesSiguiente];

        document.getElementById("mes").innerHTML = mesSiguiente

        console.log(mesActual);
        console.log(indexMesActual)
    } else {

        document.getElementById("mes").innerHTML = mes[11];
    }

})

function cargarPagina() {

    var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]


    const fecha = new Date().toISOString();
    var lista = fecha.split("-");
    console.log(lista);
    var nmes = parseInt(lista[1]);
    var mes = meses[nmes - 1];
    document.getElementById("mes").innerHTML = mes;




}