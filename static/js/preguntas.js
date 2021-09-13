var btn_save_question = document.getElementById('btn_save_question');
var btn_refrescar = document.getElementById('resfrescar');
var btn_save_answer = document.getElementById('btn_save_answer');

if (btn_save_answer) {
    btn_save_answer.addEventListener('click', save_answer);
}

if (btn_refrescar) {
    btn_refrescar.addEventListener('click', refrescar);
}

if (btn_save_question) {
    $('#categoria').focusout(function () {
        var categoria = $('#categoria').val();
        if (categoria == 'Categoria') {
            var alert = document.getElementById('alert_text');
            $('#alert').removeClass('alert alert-primary');
            $('#alert').addClass('alert alert-danger');
            alert.innerHTML = 'Ingrese categoria';
            $('#alert').fadeIn(100);
            setTimeout(function () {
                $('#alert').fadeOut(300)
            }, 1500);
        }
    })
    $("#nivel").focusout(function () {
        var nivel = $('#nivel').val();
        var premio = document.getElementById('premio');
        if (nivel == 'muy bajo') {
            var premio_nivel = 100;
            premio.value = premio_nivel;
        } else if (nivel == 'bajo') {
            var premio_nivel = 200;
            premio.value = premio_nivel;
        } else if (nivel == 'intermedio') {
            var premio_nivel = 400;
            premio.value = premio_nivel;
        } else if (nivel == 'alto') {
            var premio_nivel = 800;
            premio.value = premio_nivel;
        } else if (nivel == 'muy alto') {
            var premio_nivel = 1600;
            premio.value = premio_nivel;
        } else if (nivel == 'Nivel') {
            premio.value = 'Premio';
            var alert = document.getElementById('alert_text');
            $('#alert').removeClass('alert alert-primary');
            $('#alert').addClass('alert alert-danger');
            alert.innerHTML = 'Ingrese nivel';
            $('#alert').fadeIn(100);
            setTimeout(function () {
                $('#alert').fadeOut(300)
            }, 1500);
        }
    });
    btn_save_question.addEventListener('click', create_question);
}
//  CREAR PREGUNTAS

class preguntas {

    constructor(categoria, nivel, pregunta, premio) {

        this.categoria = categoria;
        this.nivel = nivel;
        this.pregunta = pregunta;
        this.premio = premio;

    }

    crear_pregunta() {

        $.ajax({
            url: '/create_question',
            type: 'POST',
            data: { 'categoria': this.categoria, 'nivel': this.nivel, 'pregunta': this.pregunta, 'premio': this.premio },
            success: function (res) {
                console.log(res);
                var alert = document.getElementById('alert_text');
                $('#alert').removeClass('alert alert-danger');
                $('#alert').addClass('alert alert-primary');
                alert.innerHTML = 'Pregunta guardada';
                $('#alert').fadeIn(100);
                setTimeout(function () {
                    $('#alert').fadeOut(300)
                }, 1500);
            },
            error: function (error) {
                console.log('error', error);
            }
        })
    }

}

function create_question() {

    var pregunta = $('#pregunta').val();
    var categoria = $('#categoria').val();
    var level = $('#nivel').val();
    var premio_nivel = $('#premio').val();
    if (categoria == 'DEPORTES') {
        var categoria_enviar = 1;
    } else if (categoria == 'BIOLOGIA') {
        var categoria_enviar = 2;
    } else if (categoria == 'GEOGRAFIA') {
        var categoria_enviar = 3;
    } else if (categoria == 'HISTORIA') {
        var categoria_enviar = 4;
    } else if (categoria == 'ARTE') {
        var categoria_enviar = 5;
    }
    if (level == 'muy bajo') {
        var level_enviar = 1;
    } else if (level == 'bajo') {
        var level_enviar = 2;
    } else if (level == 'intermedio') {
        var level_enviar = 3;
    } else if (level == 'alto') {
        var level_enviar = 4;
    } else if (level == 'muy alto') {
        var level_enviar = 5;
    }
    var nueva_pregunta = new preguntas(categoria_enviar, level_enviar, pregunta, premio_nivel);
    nueva_pregunta.crear_pregunta();
}

// FUNCION PARA HACER APARECER TODAS LA PREGUNTAS Y EDITAR O AGREGAR SUS RESPECTIVAS RESPUESTAS

function refrescar() {
    var preguntas_creadas = document.getElementById('preguntas_creadas');
    var options = preguntas_creadas.getElementsByTagName('option');
    for (var i = 0; i < options.length; i++) {
        preguntas_creadas.removeChild(options[i]);
        i--;
    }
    $.ajax({
        url: '/seach_questions',
        type: 'POST',
        data: {},
        success: function (res) {
            const select = document.getElementById("preguntas_creadas");
            var resp = JSON.parse(res);
            console.log(resp);
            resp.forEach(el => {
                console.log(el);
                for (let prop in el) {
                    var option = document.createElement("option");
                    option.innerHTML = `${el[prop]}`;
                    select.appendChild(option);
                    console.log(el[prop]);
                }
            });
        },
        error: function (error) {
            console.log('error', error);
        }
    });
}

// FUNCION PARA HACER EL GUARDADO DE LAS RESPUESTAS SEGUN LA PREGUNTA 

function save_answer() {
    var pregunta = $('#preguntas_creadas').val();
    var respuesta_correcta = $('#true').val();
    var respuesta_incorrecta_1 = $('#false_1').val();
    var respuesta_incorrecta_2 = $('#false_2').val();
    var respuesta_incorrecta_3 = $('#false_3').val();
    $.ajax({
        url: '/guardar_respuestas',
        type: 'POST',
        data: {
            'pregunta': pregunta,
            'respuesta_correcta': respuesta_correcta,
            'respuesta_incorrecta_1': respuesta_incorrecta_1,
            'respuesta_incorrecta_2': respuesta_incorrecta_2,
            'respuesta_incorrecta_3': respuesta_incorrecta_3
        },
        success: function (res) {
            console.log(res);
            var alert = document.getElementById('alert_text');
            $('#alert').removeClass('alert alert-danger');
            $('#alert').addClass('alert alert-primary');
            alert.innerHTML = 'Respuestas guardadas';
            $('#alert').fadeIn(100);
            setTimeout(function () {
                $('#alert').fadeOut(300);
            }, 1500)
        },
        error: function (error) {
            console.log('error', error);
        }
    });

}