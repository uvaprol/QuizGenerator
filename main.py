from flask import Flask, render_template, request, jsonify
# from seting import *
import sqlite3

DEV_MODE = False
app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/quiz')
def get_quiz():
    pass

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/setting')
def quiz_setting():
    pass

app.run(host='0.0.0.0', port=80, debug=DEV_MODE)