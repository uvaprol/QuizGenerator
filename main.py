from flask import Flask, render_template, request, jsonify
# from seting import *
import sqlite3

DEV_MODE = False
app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/quiz/<str:quiz_id>', methods=['GET'])
def get_quiz(quiz_id):
    data: dict
    return render_template('quiz.html', data)

@app.route('/quiz', methods=['POST'])
def add_quiz():
    if request.method == 'POST':
        data = request.form.get('Quize')
        print(data)
        return 'success', 200

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/setting')
def quiz_setting():
    pass

app.run(host='0.0.0.0', port=80, debug=DEV_MODE)