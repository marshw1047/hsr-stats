from flask import Flask, jsonify, make_response
import sqlite3

app = Flask(__name__)

# Gets all characters in database
@app.route('/hsr_character_stats', methods=['GET'])
def get_stats_all():
    data = getDatabaseAll()
    if data:
        return jsonify(data), 200
    else:
        return make_response(jsonify({'Error': 'Could not retrieve from database'}), 404)


# Gets characters by id
@app.route('/hsr_character_stats/<int:character_id>', methods=['GET'])
def get_stats_id(character_id):
    data = getDatabaseID(character_id)
    if data:
        return jsonify(data), 200
    else:
        return make_response(jsonify({'Error': 'Could not retrieve by id'}), 404)
    
def getDatabaseAll():
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

def getDatabaseID(character_id):
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()
    c.execute('SELECT * FROM characters WHERE id = ?', (character_id,))
    rows = c.fetchall()
    conn.close()

    if rows:
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
    else:
        return None

if __name__ == '__main__':
    app.run(debug = True)