document.getElementById("adelanteAno").addEventListener("click", function () {


    var ano = parseInt(document.getElementById("ano").innerHTML);


    var anoSiguiente = ano + 1;

    document.getElementById("ano").innerHTML = anoSiguiente;
    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);
    tablaMes(anoSiguiente, indexMesActual)




})

document.getElementById("atrasAno").addEventListener("click", function () {


    var ano = parseInt(document.getElementById("ano").innerHTML);

    var anoSiguiente = ano - 1;
    document.getElementById("ano").innerHTML = anoSiguiente;

    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);
    tablaMes(anoSiguiente, indexMesActual)




})


document.getElementById("adelanteMes").addEventListener("click", function () {
    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);
    var ano = parseInt(document.getElementById("ano").innerHTML);

    if (indexMesActual < 11) {


        var indexmesSiguiente = indexMesActual + 1;
        var mesSiguiente = mes[indexmesSiguiente];

        document.getElementById("mes").innerHTML = mesSiguiente
        tablaMes(ano, indexmesSiguiente)


    } else {

        document.getElementById("mes").innerHTML = mes[0];
        tablaMes(ano, 0)
    }

})

document.getElementById("atrasMes").addEventListener("click", function () {
    var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var mesActual = document.getElementById("mes").innerHTML;
    var indexMesActual = mes.indexOf(mesActual);
    var ano = parseInt(document.getElementById("ano").innerHTML);

    if (indexMesActual > 0) {


        var indexmesSiguiente = indexMesActual - 1;
        var mesSiguiente = mes[indexmesSiguiente];

        document.getElementById("mes").innerHTML = mesSiguiente
        tablaMes(ano, indexmesSiguiente)


    } else {

        document.getElementById("mes").innerHTML = mes[11];
        tablaMes(ano, 11)
    }

})

function cargarPagina() {

    var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]


    const fecha = new Date().toISOString();
    var lista = fecha.split("-");

    var nmes = parseInt(lista[1]);
    var mes = meses[nmes - 1];
    document.getElementById("mes").innerHTML = mes;

    var anoActual = lista[0];

    document.getElementById("ano").innerHTML = anoActual
    tablaMes(anoActual, nmes - 1)




}

function tablaMes(ano, mes) {
    var dias = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    let fecha1 = new Date(ano, mes, 0);
    let nuDias = fecha1.getDate();


    let fecha2 = new Date(ano, mes, 1);
    let listafecha2 = fecha2.toString().split(" ");
    console.log(listafecha2)

    let dia = listafecha2[0];

    let indxdia = dias.indexOf(dia)




    var diat = 1

    document.getElementById("tBody").innerHTML = ""


    for (let m = 0; m <= 7; m++) {

        var mensaje = ""




        for (let i = 0; i < 7; i++) {


            if (diat <= nuDias) {

                if (i < indxdia) {
                    mensaje += `<td></td>`


                } else {
                    mensaje += `<td>` + diat + `</td>`
                    diat += 1;
                    indxdia = 0






                }
            }
        }
        document.getElementById("tBody").innerHTML += mensaje



    }









}