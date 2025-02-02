from flask import Flask, render_template, request, jsonify
from seting import *
import sqlite3

DEV_MODE = False
app = Flask(__name__)

app.run(host='0.0.0.0', port=80, debug=DEV_MODE)