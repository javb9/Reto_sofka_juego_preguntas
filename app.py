import re
import flask
from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import json

from werkzeug import datastructures

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'bd_concurso'
mysql = MySQL(app)

# RENDERIZADO DE VISTAS


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/registrar')
def registrar():
    return render_template('registro.html')


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/configurar_juego')
def configurar_juego():
    return render_template('configurar_juego.html')


@app.route('/preguntas')
def play():
    return render_template('preguntas.html')

#   REGISTRAR USUARIO


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        nombre = request.form['nombre']
        usuario = request.form['user_registro']
        contraseña = request.form['password_registro']
        cur = mysql.connection.cursor()
        if cur.execute(
            'SELECT u.USUARIO FROM usuarios u WHERE u.USUARIO=%s',
            (usuario,)
        ):
            return 'no'
        cur.execute(
            'INSERT INTO usuarios (NOMBRE, USUARIO, CLAVE) VALUES(%s, %s, %s)',
            (nombre, usuario, contraseña)
        )
        mysql.connection.commit()
        return 'si'

#   COMPARAR USUARIO PARA QUE NO SE REGISTREN DOS PERSONAS CON EL MISMO NOMBRE DE USUARIO


@app.route('/comparar_usuario', methods=['POST'])
def comparar_usuario():
    if request.method == 'POST':
        usuario = request.form['data']
        cur = mysql.connection.cursor()
        if cur.execute(
            'SELECT u.USUARIO FROM usuarios u WHERE u.USUARIO=%s',
            (usuario,)
        ):
            return 'no'
        return 'si'

#   VALIDAR QUE EL USUARIO QUE ESTA INGRESANDO YA ESTE REGISTRADO


@app.route('/validate_user', methods=['POST'])
def validate_user():
    if request.method == 'POST':
        usuario = request.form['user']
        contraseña = request.form['password']
        cur = mysql.connection.cursor()
        if cur.execute(
            'SELECT u.USUARIO FROM usuarios u WHERE u.USUARIO=%s AND u.CLAVE=%s',
            (usuario, contraseña)
        ):
            mysql.connection.commit()
            id = cur.fetchone()
            id_en = str(json.dumps(id))
            return id_en
    return 'no'

# CREAR PREGUNTA


@app.route('/create_question', methods=['POST'])
def create_question():
    if request.method == 'POST':
        categoria = request.form['categoria']
        nivel = request.form['nivel']
        pregunta = request.form['pregunta']
        premio = request.form['premio']
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO preguntas (ID_CATEGORIA, ID_NIVEL, PREGUNTA, PREMIO) VALUES (%s, %s, %s, %s)',
            (categoria, nivel, pregunta, premio)
        )
        mysql.connection.commit()
        return 'si'

#   BUSCAR PREGUNTAS EN LA TABLA PARA CREAR SUS RESPUESTAS


@app.route('/seach_questions', methods=['POST'])
def seach_questions():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT PREGUNTA FROM preguntas'
        )
        mysql.connection.commit()
        preguntas = cur.fetchall()
        datas = str(json.dumps(preguntas))
        return datas

#   GUARDADO DE LAS RESPUESTAS


@app.route('/guardar_respuestas', methods=['POST'])
def guardar_respuestas():
    if request.method == 'POST':
        pregunta = request.form['pregunta']
        respuesta_correcta = request.form['respuesta_correcta']
        respuesta_incorrecta_1 = request.form['respuesta_incorrecta_1']
        respuesta_incorrecta_2 = request.form['respuesta_incorrecta_2']
        respuesta_incorrecta_3 = request.form['respuesta_incorrecta_3']
        cursor = mysql.connection.cursor()
        cursor.execute(
            'SELECT p.ID FROM preguntas p WHERE p.PREGUNTA=%s',
            (pregunta,)
        )
        mysql.connection.commit()
        id_pregunta = cursor.fetchone()
        cursor_1 = mysql.connection.cursor()
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO respuestas (ID_PREGUNTA, ES_CORRECTA, RESPUESTA) VALUES (%s, %s, %s)',
            (id_pregunta, 1, respuesta_correcta)
        )
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO respuestas (ID_PREGUNTA, ES_CORRECTA, RESPUESTA) VALUES (%s, %s, %s)',
            (id_pregunta, 0, respuesta_incorrecta_1),
        )
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO respuestas (ID_PREGUNTA, ES_CORRECTA, RESPUESTA) VALUES (%s, %s, %s)',
            (id_pregunta, 0, respuesta_incorrecta_2)
        )
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO respuestas (ID_PREGUNTA, ES_CORRECTA, RESPUESTA) VALUES (%s, %s, %s)',
            (id_pregunta, 0, respuesta_incorrecta_3)
        )
        mysql.connection.commit()
        return 'si'

#   TRAER PRIMERA PREGUNTA


@app.route('/traer_pregunta', methods=['POST'])
def traer_pregunta():
    if request.method == 'POST':
        numero = request.form['data']
        incremento = request.form['incremento']
        if incremento == '1':
            cur = mysql.connection.cursor()
            cur.execute(
                'SELECT c.ID FROM categorias c WHERE c.ID=%s',
                (numero,)
            )
            mysql.connection.commit()
            categoria = cur.fetchone()
            cursor = mysql.connection.cursor()
            cursor.execute(
                'SELECT p.PREGUNTA FROM preguntas p WHERE p.ID_CATEGORIA=%s AND p.ID_NIVEL=1',
                (categoria,)
            )
            mysql.connection.commit()
            preguntas = cursor.fetchone()
            pregunta = str(json.dumps(preguntas))
            return pregunta
        if incremento == '2':
            cur = mysql.connection.cursor()
            cur.execute(
                'SELECT c.ID FROM categorias c WHERE c.ID=%s',
                (numero,)
            )
            mysql.connection.commit()
            categoria = cur.fetchone()
            cursor = mysql.connection.cursor()
            cursor.execute(
                'SELECT p.PREGUNTA FROM preguntas p WHERE p.ID_CATEGORIA=%s AND p.ID_NIVEL=2',
                (categoria,)
            )
            mysql.connection.commit()
            preguntas = cursor.fetchone()
            pregunta = str(json.dumps(preguntas))
            return pregunta
        if incremento == '3':
            cur = mysql.connection.cursor()
            cur.execute(
                'SELECT c.ID FROM categorias c WHERE c.ID=%s',
                (numero,)
            )
            mysql.connection.commit()
            categoria = cur.fetchone()
            cursor = mysql.connection.cursor()
            cursor.execute(
                'SELECT p.PREGUNTA FROM preguntas p WHERE p.ID_CATEGORIA=%s AND p.ID_NIVEL=3',
                (categoria,)
            )
            mysql.connection.commit()
            preguntas = cursor.fetchone()
            pregunta = str(json.dumps(preguntas))
            return pregunta
        if incremento == '4':
            cur = mysql.connection.cursor()
            cur.execute(
                'SELECT c.ID FROM categorias c WHERE c.ID=%s',
                (numero,)
            )
            mysql.connection.commit()
            categoria = cur.fetchone()
            cursor = mysql.connection.cursor()
            cursor.execute(
                'SELECT p.PREGUNTA FROM preguntas p WHERE p.ID_CATEGORIA=%s AND p.ID_NIVEL=4',
                (categoria,)
            )
            mysql.connection.commit()
            preguntas = cursor.fetchone()
            pregunta = str(json.dumps(preguntas))
            return pregunta
        if incremento == '5':
            cur = mysql.connection.cursor()
            cur.execute(
                'SELECT c.ID FROM categorias c WHERE c.ID=%s',
                (numero,)
            )
            mysql.connection.commit()
            categoria = cur.fetchone()
            cursor = mysql.connection.cursor()
            cursor.execute(
                'SELECT p.PREGUNTA FROM preguntas p WHERE p.ID_CATEGORIA=%s AND p.ID_NIVEL=5',
                (categoria,)
            )
            mysql.connection.commit()
            preguntas = cursor.fetchone()
            pregunta = str(json.dumps(preguntas))
            return pregunta

#   TRAER RESPUESTAS


@app.route('/traer_respuestas', methods=['POST'])
def traer_respuestas():
    if request.method == 'POST':
        pregunta = request.form['datos']
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT p.ID FROM preguntas p WHERE p.PREGUNTA=%s',
            (pregunta,)
        )
        mysql.connection.commit()
        id = cur.fetchone()
        cursor = mysql.connection.cursor()
        cursor.execute(
            'SELECT r.RESPUESTA FROM respuestas r WHERE r.ID_PREGUNTA=%s',
            (id,)
        )
        mysql.connection.commit()
        respuestas = cursor.fetchall()
        resp = str(json.dumps(respuestas))
        return resp
    return 'no'

# VALIDAR RESPUESTAS


@app.route('/validar_respuesta', methods=['POST'])
def validar_respuesta():
    if request.method == 'POST':
        pregunta = request.form['pregunta']
        respuesta = request.form['respuesta']
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT p.ID FROM preguntas p WHERE p.PREGUNTA=%s',
            (pregunta,)
        )
        mysql.connection.commit()
        id = cur.fetchone()
        cursor = mysql.connection.cursor()
        if cursor.execute(
            'SELECT r.ID_PREGUNTA, r.ES_CORRECTA, r.RESPUESTA FROM respuestas r WHERE r.ES_CORRECTA=1 AND r.RESPUESTA=%s AND r.ID_PREGUNTA=%s',
            (respuesta, id)
        ):
            mysql.connection.commit()
            return 'si'
    return 'no'

#   TRAER PREMIO SI SELECIONO RESPUESTA CORRECTA


@app.route('/premio', methods=['POST'])
def premio():
    if request.method == 'POST':
        pregunta = request.form['pregunta']
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT p.PREMIO FROM preguntas p WHERE p.PREGUNTA=%s',
            (pregunta,)
        )
        mysql.connection.commit()
        premio = cur.fetchone()
        p = str(json.dumps(premio))
        return p

#   GUARDAR DATOS EN EL HISTORIAL


@app.route('/historial', methods=['POST'])
def historial():
    if request.method == 'POST':
        user = request.form['user']
        premio = request.form['premio']
        cur = mysql.connection.cursor()
        cur.execute(
            'INSERT INTO historial (USER, PREMIO) VALUES (%s,%s)',
            (user, premio)
        )
        mysql.connection.commit()
        return 'si'


if __name__ == '__main__':
    app.run(port=8080, debug=True)
