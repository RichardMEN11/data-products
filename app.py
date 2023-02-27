from flask import Flask
from flask import request
import pickle 

model = pickle.load(open('./models/regr-model.pkl', 'rb'))

app = Flask(__name__)

@app.route('/predict-emission', methods=['POST'])
def predict_emission():
    data = request.get_json()
    predicted_val = model.predict([[data['value']]])
    predicted_val_as_list = predicted_val.tolist()
    return predicted_val_as_list[0]
