var registrar_user = document.getElementById('registrar');
var back = document.getElementById('back');
var user_registro = document.getElementById('user_registro');
var config_game= document.getElementById('config_game');


if(config_game){
    config_game.addEventListener('click', configurar_juego)
}

if (back) {
    back.addEventListener('click', volver);
}

if (registrar_user) {
    registrar_user.addEventListener('click', registrar);
}

function configurar_juego(){
    window.location='/configurar_juego';
}

function registrar() {
    window.location = '/registrar';
}

function volver() {
    window.location = '/'
}
class user {

    constructor(nombre, usuario, contraseña) {

        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    //  REGISTRO DE USUARIO

    registrar_usuario() {
        var alert = document.getElementById('alert_text');
        $.ajax({
            url: '/register',
            type: 'POST',
            data: { 'nombre': this.nombre, 'user_registro': this.usuario, 'password_registro': this.contraseña },
            success: function (res) {
                if (res == 'si') {
                    console.log(res);
                    $('#alert').removeClass("alert alert-danger");
                    $('#alert').addClass("alert alert-primary");
                    alert.innerHTML = 'Registro exitoso';
                    $('#alert').fadeIn(100)
                    setTimeout(function () {
                        $("#alert").fadeOut(300);
                    }, 1500);
                } else if (res == 'no') {
                    $('#alert').removeClass("alert alert-primary");
                    $('#alert').addClass("alert alert-danger");
                    alert.innerHTML = 'Usuario ya registrado '
                    $('#alert').fadeIn(100);
                    setTimeout(function () {
                        $('#alert').fadeOut(300);
                    }, 1500);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    }

    //  VALIDACION DE QUE LE USUARIO ESTE REGISTRADO

    validate_login() {
        
        var alert = document.getElementById('alert_text');
        $.ajax({
            url: '/validate_user',
            type: 'POST',
            data: { 'user': this.usuario, 'password': this.contraseña },
            success: function (res) {
                if (res !== 'no') {
                    var resp=JSON.parse(res);
                    console.log(resp[0]);
                    localStorage.setItem('user', resp[0]);
                    window.location = '/dashboard';
                } else if (res == 'no') {
                    $('#alert').removeClass("alert alert-primary");
                    $('#alert').addClass("alert alert-danger");
                    alert.innerHTML = 'Usuario y/o contraseña incorrecta'
                    $('#alert').fadeIn(100);
                    setTimeout(function () {
                        $('#alert').fadeOut(300);
                    }, 1500);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        })
    }
}

function register_user() {
    var nombre = $('#nombre').val();
    var username = $('#user_registro').val();
    var clave = $('#password_registro').val();
    var usuario_nuevo = new user(nombre, username, clave);
    usuario_nuevo.registrar_usuario();
}

function validar_usuario() {
    var username = $('#user').val();
    var password = $('#password').val();
    var validate_user = new user(' ', username, password);
    validate_user.validate_login();
}

//  VALIDACION PARA QUE NO SE REPITA UN NOMBRE DE USUARIO

if (user_registro) {
    $('#user_registro').focusout(function () {
        var alert = document.getElementById('alert_text')
        $.ajax({
            url: '/comparar_usuario',
            type: 'POST',
            data: { 'data': user_registro.value },
            success: function (res) {
                if (res == 'si') {
                    console.log('usuario disponible')
                } else if (res == 'no') {
                    $('#alert').removeClass("alert alert-primary");
                    $('#alert').addClass("alert alert-danger");
                    alert.innerHTML = 'Usuario ya registrado '
                    $('#alert').fadeIn(100);
                    setTimeout(function () {
                        $('#alert').fadeOut(300);
                    }, 1500);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });

    });
}

function fecha() {
    var fecha = document.getElementById("fecha");
    fecha.innerHTML = "Reto Sofka" + " " + "- " + new Intl.DateTimeFormat('es-CO', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(new Date()).split('/').reverse().join('-') + "<br>" + "Javier Alexander Becerra Vega";
}
fecha();