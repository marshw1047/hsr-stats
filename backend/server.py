from flask import Flask, jsonify, request, abort
import sqlite3

app = Flask(__name__)

@app.route('/hsr_stats_character', methods=['GET'])
def get_character_stats():
    data = get_all()
    return jsonify(data)

def get_all():
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()
    c.execute('SELECT * FROM characters')
    rows = c.fetchall()
    conn.close()

    stats = []
    for row in rows:
        stats.append({
            'id': row[0],
            'HP': row[1],
            'ATK': row[2],
            'DEF': row[3],
            'SPD': row[4],
            'CR': row[5],
            'CD': row[6],
            'UID': row[7],
        })
    return stats

if __name__ == '__main__':
    app.run(debug = True)