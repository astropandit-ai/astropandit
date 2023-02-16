from flask import Flask, request

app = Flask(__name__)

@app.route('/astrology', methods=['POST'])
def handle_message():
    message = request.form['message']
    # TODO: parse message and generate a response
    return response

if __name__ == '__main__':
    app.run()
