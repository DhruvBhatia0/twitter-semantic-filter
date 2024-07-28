from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/tweets', methods=['POST'])
def tweets():
    if request.method == 'POST':
        data = request.json
        print("Received tweet data:", data)
        return jsonify({"message": "Tweet received successfully!", "data": data}), 200
    else:
        return "Method not allowed", 405

if __name__ == '__main__':
    app.run(port=5000, debug=True)