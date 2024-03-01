from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/login', methods=['POST'])
def login():
    print("LOGIN")
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    print(username)
    if username == 'gunjan' and password == 'ibm':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'error': 'Invalid credentials'})
if __name__ == '__main__':
    app.run(debug=True)