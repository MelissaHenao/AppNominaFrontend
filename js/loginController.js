let button = document.getElementById('ingresar');

button.addEventListener('click', function (event) {
    var usuario = document.getElementById("userName").value;
    let contraseña = document.getElementById("password").value;

    console.log(usuario)
    console.log(contraseña)

    let user = {
        "username": usuario,
        "password": contraseña
    }

    fetch('http://localhost:5000/api/user',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        if(response.status == 200){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvendio: ' + usuario,
                showConfirmButton: false,
                timer: 10000
              })
            setTimeout(()=>   window.location.href = "./index.html", 1500)
            return;
        }else{
            Swal.fire({
                icon: 'error' ,
                title: 'Oops...',
                text: 'Error: Datos incorrectos o usuarios no registrados!',
              })
            return;
        }
    })
    .catch((err) => {
        console.log(err)
        return err;
    })
})