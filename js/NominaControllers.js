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
        Swal.fire({
            icon: 'error' ,
            title: 'Oops...',
            text: 'error: Debe agregar el número de días laborados!',
          })
    }else if(valorHora==""){
        Swal.fire({
            icon: 'error' ,
            title: 'Oops...',
            text: 'error: Debe agregar el valor por hora laborada!',
          })
    }else if(descSalud==""){
        Swal.fire({
            icon: 'error' ,
            title: 'Oops...',
            text: 'error: Debe agregar el descuento de salud!',
          })
    }else if(descPension==""){
        Swal.fire({
            icon: 'error' ,
            title: 'Oops...',
            text: 'error: Debe agregar el descuento de salud!',
          })
    }else if(subTransporte==""){
        Swal.fire({
            icon: 'error' ,
            title: 'Oops...',
            text: 'error: Debe agregar el subsidio de transporte!',
          })
    }else{
        salarioNeto = diasLaborados * valorHora;
        deducciones = salarioNeto - descSalud - descPension
        valorTotal = parseFloat(deducciones) + parseFloat(subTransporte);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El valor de tu nomina es: ' + valorTotal,
            showConfirmButton: false,
            timer: 6000
          })
    }
})