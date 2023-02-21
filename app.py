from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/predict-emission')
def predict_emission():
    print(request)
