let button = document.getElementById('calcular');

button.addEventListener('click', function () {
    let diasLaborados = document.getElementById('diasLaborados').value;
    let valorHora = document.getElementById('valorHora').value;
    let descSalud = document.getElementById('descSalud').value;
    let descPension = document.getElementById('descPension').value;
    let subTransporte = document.getElementById('subTransporte').value;

    let salarioNeto=0;
    let deducciones=0;
    let valorTotal=0;

    if(diasLaborados==""){
        alert("Por favor ingresar los dias laborados");
    }else if(valorHora==""){
        alert("Por favor ingresar valor de la hora");
    }else if(descSalud==""){
        alert("Por favor ingresar deduccion de salud");
    }else if(descPension==""){
        alert("Por favor ingresar deduccion de pension");
    }else if(subTransporte==""){
        alert("Por favor ingresar subsdio de transporte");
    }else{
        salarioNeto = diasLaborados * valorHora;
        deducciones = salarioNeto - descSalud - descPension
        valorTotal = parseFloat(deducciones) + parseFloat(subTransporte);

        alert("Tu Nomina es: " + valorTotal);
    }
})