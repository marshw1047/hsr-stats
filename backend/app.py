from flask import Flask, jsonify
import requests
from character import character
from user import user

app = Flask(__name__)

@app.route('/')
def index():
    # make API call to external PI
    api_url = 'https://api.mihomo.me/sr_info_parsed/600598492'
    params = {'lang': 'en'}
    # sean: 600585642
    response = requests.get(api_url, params=params)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        currentUser = user(data.get('player', []).get('uid', []))
        characters = data.get('characters', [])

        # characters.additions (blue number in more stats prob relics maybe traces/skills etc)
        # characters.attributes (base stats)
        # check .fields for...(atk, hp, def, spd, crit_rate, crit_dmg) then add .value

        if characters:
            for currentChar in characters:
                newCharStats = character()
                characterAdditions = currentChar.get('additions', [])
                newCharStats.id = currentChar.get('id', [])
                
                for addition in characterAdditions:
                    addField = addition.get('field', [])
                    addValue = addition.get('value', [])
                    switch_case(newCharStats, addField, addValue)

                characterAttributes = currentChar.get('attributes', [])

                for attribute in characterAttributes:
                    attField = attribute.get('field', [])
                    attValue = attribute.get('value', [])
                    switch_case(newCharStats, attField, attValue)

                currentUser.characters.append(newCharStats)

        return currentUser.characters[0].__dict__

    else:
        # Return an error message if the request failed
        return jsonify({'error': 'Failed to fetch data from the API'}), 500
    
if __name__ == '__main__':
    app.run(debug=True)


def switch_case(newCharStats, field, value):
    if field == 'hp':
        newCharStats.hp += value
    elif field == 'atk':
        newCharStats.atk += value
    elif field == 'def':
        newCharStats.def_ += value
    elif field == 'spd':
        newCharStats.spd += value
    elif field == 'crit_rate':
        newCharStats.cr += value
    elif field == 'crit_dmg':
        newCharStats.cd += value
    else: 
        return