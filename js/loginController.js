
let button = document.getElementById('ingresar');

//Funcion Validar
// function validarLogin() {
//     var usuario = document.getElementById("userName").value;
//     let contraseña = document.getElementById("password").value;

//     fetch(`http://localhost:5000/api/user/${usuario}` + `${contraseña}`,{
//         method:'GET',
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((response) =>{
//         console.log(response)
//         return response.json()
//     })

//     if(usuario=="" || contraseña==""){
//         alert("Por favor Ingrese los datos");
//         return;
//     }else{
//         if (usuario==response.username && contraseña==response.password) {
//             alert("Bienvenido " + response.username);
//             window.location.href = "./registro.html"
//             return;
//         }
//     }
    
//     alert("Datos Incorrectos o Usuario No Registrado");
//     return;
// }

//Escucho el Click en el boton de registro
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
            alert("Bienvenido " + usuario);
            window.location.href = "./index.html"
            return;
        }else{
            alert("Datos Incorrectos o Usuario No Registrado");
            return;
        }
    })
    .catch((err) => {
        console.log(err)
        return err;
    })
})
