from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/hsr_stats_character')
def get_data():
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()
    c.execute('SELECT * FROM characters')

    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug = True)