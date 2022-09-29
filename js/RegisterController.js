let button = document.getElementById('registrarse');

button.addEventListener('click', function (event) {
    
    var usuario = document.getElementById("userName").value;
    let contraseña = document.getElementById("password").value;
    let correo = document.getElementById("correo").value

    console.log(usuario)
    console.log(contraseña)

    if(usuario == "" || contraseña=="" || correo==""){
        alert("Todos los datos son requeridos")
    }else{
        let user = {
            "username": usuario,
            "password": contraseña,
            "email": correo
        }
    
        fetch('http://localhost:5000/api/registro',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if(response.status == 201){
                alert("Registro Exitoso" );
                window.location.href = "login.html"
                return;
            }else{
                alert("Usuario ya Registrado");
                console.log(response)
                return;
                
            }
            
        })
        .catch((err) => {
            console.log(err)
            return err;
        })
    }
})
