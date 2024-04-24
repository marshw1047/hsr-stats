import sqlite3
from user import user
from character import character

def addToDB(user):
    # Connect to the database
    conn = sqlite3.connect('databaseMain.db')
    c = conn.cursor()

    UID = user.uid

    for currentCharacter in user.characters:
        ID = currentCharacter.id
        HP = currentCharacter.hp
        ATK = currentCharacter.atk
        DEF = currentCharacter.def_
        SPD = currentCharacter.spd
        CR = currentCharacter.cr
        CD = currentCharacter.cd

        insert = """
            INSERT INTO characters (id, HP, ATK, DEF, SPD, CR, CD, UID) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """

        c.execute(insert, (ID, HP, ATK, DEF, SPD, CR, CD, UID))

    conn.commit()
    conn.close()

    



