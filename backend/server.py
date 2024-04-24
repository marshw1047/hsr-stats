from flask import Flask, jsonify, redirect
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/hsr_stats_character')

@app.route('/hsr_stats_character')
def hsr_stats_character():
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()
    c.execute('SELECT * FROM characters')

    data = c.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug = True)