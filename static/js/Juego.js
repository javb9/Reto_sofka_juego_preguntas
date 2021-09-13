var btn_play = document.getElementById('play');
var btn_primer_round = document.getElementById('btn_check');
var pregunta = document.getElementById('preguntas');
var round = document.getElementById('round');
var btn_iniciar = document.getElementById('btn_iniciar');
var incremento = 0;

if (btn_iniciar) {
    btn_iniciar.addEventListener('click', juego);
}

if (btn_play) {
    btn_play.addEventListener('click', play);
}

if (btn_primer_round) {
    btn_primer_round.addEventListener('click', validar_respuesta)
}

function juego() {
    incremento = incremento + 1;
    console.log(incremento);
    if (incremento == 6) {
        window.location = '/dashboard';
    }
    if (incremento == 1) {
        var input_1 = document.getElementById('respuesta_1');
        var input_2 = document.getElementById('respuesta_2');
        var input_3 = document.getElementById('respuesta_3');
        var input_4 = document.getElementById('respuesta_4');
        input_1.checked = false;
        input_2.checked = false;
        input_3.checked = false;
        input_4.checked = false;
        btn_iniciar.setAttribute('style', 'display:none;');
        var numero_aleatorio = Math.round(Math.random() * (5 - 1) + parseInt(1));
        console.log(numero_aleatorio);
        $.ajax({
            url: '/traer_pregunta',
            type: 'POST',
            data: { 'data': numero_aleatorio, 'incremento': incremento },
            success: function (res) {
                console.log(res);
                var resp = JSON.parse(res);
                console.log(resp);
                round.innerHTML = 'Round 1'
                pregunta.innerHTML = resp;
                $.ajax({
                    url: '/traer_respuestas',
                    type: 'POST',
                    data: { 'datos': resp[0] },
                    success: function (resp) {
                        var resp_2 = JSON.parse(resp);
                        console.log(resp_2);
                        var label_1 = document.getElementById('label_1');
                        var label_2 = document.getElementById('label_2');
                        var label_3 = document.getElementById('label_3');
                        var label_4 = document.getElementById('label_4');
                        var array = []
                        var cantidad = 4;
                        for (var i = 0; i < cantidad; i++) {
                            array = insert(array, i, Math.random() * (cantidad + 1))
                        }
                        label_1.innerHTML = resp_2[array[0]];
                        label_2.innerHTML = resp_2[array[1]];
                        label_3.innerHTML = resp_2[array[2]];
                        label_4.innerHTML = resp_2[array[3]];

                    },
                    error: function (error) {
                        console.log('error', error);
                    }
                });
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    } else if (incremento == 2) {
        var input_1 = document.getElementById('respuesta_1');
        var input_2 = document.getElementById('respuesta_2');
        var input_3 = document.getElementById('respuesta_3');
        var input_4 = document.getElementById('respuesta_4');
        input_1.checked = false;
        input_2.checked = false;
        input_3.checked = false;
        input_4.checked = false;
        var numero_aleatorio = Math.round(Math.random() * (5 - 1) + parseInt(1));
        console.log(numero_aleatorio);
        $.ajax({
            url: '/traer_pregunta',
            type: 'POST',
            data: { 'data': numero_aleatorio, 'incremento': incremento },
            success: function (res) {
                console.log(res);
                var resp = JSON.parse(res);
                console.log(resp);
                round.innerHTML = 'Round 2'
                pregunta.innerHTML = resp;
                $.ajax({
                    url: '/traer_respuestas',
                    type: 'POST',
                    data: { 'datos': resp[0] },
                    success: function (resp) {
                        var resp_2 = JSON.parse(resp);
                        console.log(resp_2);
                        var label_1 = document.getElementById('label_1');
                        var label_2 = document.getElementById('label_2');
                        var label_3 = document.getElementById('label_3');
                        var label_4 = document.getElementById('label_4');
                        var array = []
                        var cantidad = 4;
                        for (var i = 0; i < cantidad; i++) {
                            array = insert(array, i, Math.random() * (cantidad + 1))
                        }
                        label_1.innerHTML = resp_2[array[0]];
                        label_2.innerHTML = resp_2[array[1]];
                        label_3.innerHTML = resp_2[array[2]];
                        label_4.innerHTML = resp_2[array[3]];

                    },
                    error: function (error) {
                        console.log('error', error);
                    }
                });
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    } else if (incremento == 3) {
        var input_1 = document.getElementById('respuesta_1');
        var input_2 = document.getElementById('respuesta_2');
        var input_3 = document.getElementById('respuesta_3');
        var input_4 = document.getElementById('respuesta_4');
        input_1.checked = false;
        input_2.checked = false;
        input_3.checked = false;
        input_4.checked = false;
        var numero_aleatorio = Math.round(Math.random() * (5 - 1) + parseInt(1));
        console.log(numero_aleatorio);
        $.ajax({
            url: '/traer_pregunta',
            type: 'POST',
            data: { 'data': numero_aleatorio, 'incremento': incremento },
            success: function (res) {
                console.log(res);
                var resp = JSON.parse(res);
                console.log(resp);
                round.innerHTML = 'Round 3'
                pregunta.innerHTML = resp;
                $.ajax({
                    url: '/traer_respuestas',
                    type: 'POST',
                    data: { 'datos': resp[0] },
                    success: function (resp) {
                        var resp_2 = JSON.parse(resp);
                        console.log(resp_2);
                        var label_1 = document.getElementById('label_1');
                        var label_2 = document.getElementById('label_2');
                        var label_3 = document.getElementById('label_3');
                        var label_4 = document.getElementById('label_4');
                        var array = []
                        var cantidad = 4;
                        for (var i = 0; i < cantidad; i++) {
                            array = insert(array, i, Math.random() * (cantidad + 1))
                        }
                        label_1.innerHTML = resp_2[array[0]];
                        label_2.innerHTML = resp_2[array[1]];
                        label_3.innerHTML = resp_2[array[2]];
                        label_4.innerHTML = resp_2[array[3]];

                    },
                    error: function (error) {
                        console.log('error', error);
                    }
                });
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    } else if (incremento == 4) {
        var input_1 = document.getElementById('respuesta_1');
        var input_2 = document.getElementById('respuesta_2');
        var input_3 = document.getElementById('respuesta_3');
        var input_4 = document.getElementById('respuesta_4');
        input_1.checked = false;
        input_2.checked = false;
        input_3.checked = false;
        input_4.checked = false;
        var numero_aleatorio = Math.round(Math.random() * (5 - 1) + parseInt(1));
        console.log(numero_aleatorio);
        $.ajax({
            url: '/traer_pregunta',
            type: 'POST',
            data: { 'data': numero_aleatorio, 'incremento': incremento },
            success: function (res) {
                console.log(res);
                var resp = JSON.parse(res);
                console.log(resp);
                round.innerHTML = 'Round 4'
                pregunta.innerHTML = resp;
                $.ajax({
                    url: '/traer_respuestas',
                    type: 'POST',
                    data: { 'datos': resp[0] },
                    success: function (resp) {
                        var resp_2 = JSON.parse(resp);
                        console.log(resp_2);
                        var label_1 = document.getElementById('label_1');
                        var label_2 = document.getElementById('label_2');
                        var label_3 = document.getElementById('label_3');
                        var label_4 = document.getElementById('label_4');
                        var array = []
                        var cantidad = 4;
                        for (var i = 0; i < cantidad; i++) {
                            array = insert(array, i, Math.random() * (cantidad + 1))
                        }
                        label_1.innerHTML = resp_2[array[0]];
                        label_2.innerHTML = resp_2[array[1]];
                        label_3.innerHTML = resp_2[array[2]];
                        label_4.innerHTML = resp_2[array[3]];

                    },
                    error: function (error) {
                        console.log('error', error);
                    }
                });
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    } else if (incremento == 5) {
        var input_1 = document.getElementById('respuesta_1');
        var input_2 = document.getElementById('respuesta_2');
        var input_3 = document.getElementById('respuesta_3');
        var input_4 = document.getElementById('respuesta_4');
        input_1.checked = false;
        input_2.checked = false;
        input_3.checked = false;
        input_4.checked = false;
        var seguir_jugando = document.getElementById('seguir_jugando');
        seguir_jugando.setAttribute('style', 'display:none;');
        var numero_aleatorio = Math.round(Math.random() * (5 - 1) + parseInt(1));
        console.log(numero_aleatorio);
        $.ajax({
            url: '/traer_pregunta',
            type: 'POST',
            data: { 'data': numero_aleatorio, 'incremento': incremento },
            success: function (res) {
                console.log(res);
                var resp = JSON.parse(res);
                console.log(resp);
                round.innerHTML = 'Round 5'
                pregunta.innerHTML = resp;
                $.ajax({
                    url: '/traer_respuestas',
                    type: 'POST',
                    data: { 'datos': resp[0] },
                    success: function (resp) {
                        var resp_2 = JSON.parse(resp);
                        console.log(resp_2);
                        var label_1 = document.getElementById('label_1');
                        var label_2 = document.getElementById('label_2');
                        var label_3 = document.getElementById('label_3');
                        var label_4 = document.getElementById('label_4');
                        var array = []
                        var cantidad = 4;
                        for (var i = 0; i < cantidad; i++) {
                            array = insert(array, i, Math.random() * (cantidad + 1))
                        }
                        label_1.innerHTML = resp_2[array[0]];
                        label_2.innerHTML = resp_2[array[1]];
                        label_3.innerHTML = resp_2[array[2]];
                        label_4.innerHTML = resp_2[array[3]];

                    },
                    error: function (error) {
                        console.log('error', error);
                    }
                });
            },
            error: function (error) {
                console.log('error', error);
            }
        });
    }
}


//  VALIDAR QUE LA RESPUESTA ESTE BIEN

function validar_respuesta() {

    if ($("#respuesta_1").is(':checked')) {
        console.log("1");
        var question = pregunta.innerHTML;
        var respuesta = label_1.innerHTML;
        console.log(question);
        $.ajax({
            url: '/validar_respuesta',
            type: 'POST',
            data: { 'pregunta': question, 'respuesta': respuesta },
            success: function (res) {
                console.log(res);
                if (res == 'si') {
                    $.ajax({
                        url: '/premio',
                        type: 'POST',
                        data: { 'pregunta': question },
                        success: function (res) {
                            var resp = JSON.parse(res);
                            var premios = document.getElementById('premios');
                            premios.value = resp;
                            var p = document.getElementById('modal_text');
                            p.innerHTML = 'Desea seguir jugando?'
                            var salir = document.getElementById('salir_modal');
                            var seguir_jugando = document.getElementById('seguir_jugando');
                            seguir_jugando.addEventListener('click', juego);
                            salir.addEventListener('click', salir_dashboard);
                        },
                        error: function (error) {
                            console.log('error', error);
                        }
                    })
                } else {
                    document.getElementById('premios').value='0';
                    var p = document.getElementById('modal_text');
                    p.innerHTML = 'Ah perdido la ronda'
                    var salir = document.getElementById('salir_modal');
                    var seguir_jugando = document.getElementById('seguir_jugando');
                    seguir_jugando.setAttribute('style', 'display:none;');
                    salir.addEventListener('click', salir_dashboard);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });
        console.log(respuesta);
    } else if ($("#respuesta_2").is(':checked')) {
        console.log("2");
        var question = pregunta.innerHTML;
        var respuesta = label_2.innerHTML;
        $.ajax({
            url: '/validar_respuesta',
            type: 'POST',
            data: { 'pregunta': question, 'respuesta': respuesta },
            success: function (res) {
                console.log(res);
                if (res == 'si') {
                    $.ajax({
                        url: '/premio',
                        type: 'POST',
                        data: { 'pregunta': question },
                        success: function (res) {
                            var resp = JSON.parse(res);
                            var premios = document.getElementById('premios');
                            premios.value = resp;
                            var p = document.getElementById('modal_text');
                            p.innerHTML = 'Desea seguir jugando?'
                            var salir = document.getElementById('salir_modal');
                            var seguir_jugando = document.getElementById('seguir_jugando');
                            seguir_jugando.addEventListener('click', juego);
                            salir.addEventListener('click', salir_dashboard);
                        },
                        error: function (error) {
                            console.log('error', error);
                        }
                    })
                } else {
                    document.getElementById('premios').value='0';
                    var p = document.getElementById('modal_text');
                    p.innerHTML = 'Ah perdido la ronda'
                    var salir = document.getElementById('salir_modal');
                    var seguir_jugando = document.getElementById('seguir_jugando');
                    seguir_jugando.setAttribute('style', 'display:none;');
                    salir.addEventListener('click', salir_dashboard);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });
        console.log(respuesta);
    } else if ($("#respuesta_3").is(':checked')) {
        console.log("3");
        var question = pregunta.innerHTML;
        var respuesta = label_3.innerHTML;
        $.ajax({
            url: '/validar_respuesta',
            type: 'POST',
            data: { 'pregunta': question, 'respuesta': respuesta },
            success: function (res) {
                console.log(res);
                if (res == 'si') {
                    $.ajax({
                        url: '/premio',
                        type: 'POST',
                        data: { 'pregunta': question },
                        success: function (res) {
                            var resp = JSON.parse(res);
                            var premios = document.getElementById('premios');
                            premios.value = resp;
                            var p = document.getElementById('modal_text');
                            p.innerHTML = 'Desea seguir jugando?'
                            var salir = document.getElementById('salir_modal');
                            var seguir_jugando = document.getElementById('seguir_jugando');
                            seguir_jugando.addEventListener('click', juego);
                            salir.addEventListener('click', salir_dashboard);
                        },
                        error: function (error) {
                            console.log('error', error);
                        }
                    })
                } else {
                    document.getElementById('premios').value='0';
                    var p = document.getElementById('modal_text');
                    p.innerHTML = 'Ah perdido la ronda'
                    var salir = document.getElementById('salir_modal');
                    var seguir_jugando = document.getElementById('seguir_jugando');
                    seguir_jugando.setAttribute('style', 'display:none;');
                    salir.addEventListener('click', salir_dashboard);
                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });
        console.log(respuesta);
    } else if ($("#respuesta_4").is(':checked')) {
        console.log("4");
        var question = pregunta.innerHTML;
        var respuesta = label_4.innerHTML;
        $.ajax({
            url: '/validar_respuesta',
            type: 'POST',
            data: { 'pregunta': question, 'respuesta': respuesta },
            success: function (res) {
                console.log(res);
                if (res == 'si') {
                    $.ajax({
                        url: '/premio',
                        type: 'POST',
                        data: { 'pregunta': question },
                        success: function (res) {
                            var resp = JSON.parse(res);
                            var premios = document.getElementById('premios');
                            premios.value = resp;
                            var p = document.getElementById('modal_text');
                            p.innerHTML = 'Desea seguir jugando?'
                            var salir = document.getElementById('salir_modal');
                            var seguir_jugando = document.getElementById('seguir_jugando');
                            seguir_jugando.addEventListener('click', juego);
                            salir.addEventListener('click', salir_dashboard);
                        },
                        error: function (error) {
                            console.log('error', error);
                        }
                    })
                } else {
                    document.getElementById('premios').value='0';
                    var p = document.getElementById('modal_text');
                    p.innerHTML = 'Ah perdido la ronda'
                    var salir = document.getElementById('salir_modal');
                    var seguir_jugando = document.getElementById('seguir_jugando');
                    seguir_jugando.setAttribute('style', 'display:none;');
                    salir.addEventListener('click', salir_dashboard);

                }
            },
            error: function (error) {
                console.log('error', error);
            }
        });
        console.log(respuesta);
    }

}



function insert(array, valor, posición) {
    var inicio = array.slice(0, posición)
    var medio = valor
    var fin = array.slice(posición)
    var resultado = inicio.concat(medio).concat(fin)
    return resultado
}

function salir_dashboard() {
    var user = localStorage.getItem('user');
    var premios = document.getElementById('premios').value;
    $.ajax({
        url: '/historial',
        type: 'POST',
        data: { 'user': user, 'premio': premios },
        success: function (res) {
            console.log(res);
            window.location = '/dashboard';
        },
        error: function (error) {
            console.log('error', error);
        }
    });

}

function play() {
    window.location = '/preguntas';
}

