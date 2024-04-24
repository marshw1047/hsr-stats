import sqlite3

def deleteDupDB():
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()
    try: 
        c.execute('''
            DELETE FROM characters
            WHERE rowid NOT IN (
                SELECT MIN(rowid)
                FROM characters
                GROUP BY id, UID)
        ''')
        conn.commit()
    except sqlite3.Error as e:
        print("Error:", e)
    finally:
        # Close the connection
        conn.close()