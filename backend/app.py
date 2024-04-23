from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    # make API call to external PI
    api_url = 'https://api.mihomo.me/sr_info_parsed/600598492'
    # param = {id: 100114514}
    response = requests.get(api_url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        # Return the data as JSON
        return jsonify(data)
    else:
        # Return an error message if the request failed
        return jsonify({'error': 'Failed to fetch data from the API'}), 500
    
if __name__ == '__main__':
    app.run(debug=True)