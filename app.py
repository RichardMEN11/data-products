from flask import Flask
from flask import request
import pickle 

model = pickle.load(open('./models/regr-model.pkl', 'rb'))

app = Flask(__name__)

# TODO: find good values for emissions
def getTrafficLightForEmission(emission):
    if emission[0] <= 100:
        return "green"
    elif emission[0] <= 200:
        return "yellow"
    else:
        return "red"

@app.route('/predict-emission', methods=['POST'])
def predict_emission():
    data = request.get_json()
    predicted_val = model.predict([[data['value']]])
    predicted_val_as_list = predicted_val.tolist()
    traffic_light = getTrafficLightForEmission(predicted_val_as_list[0])
    return {
        "predicted_emission": predicted_val_as_list[0],
        "traffic_light": traffic_light
    }

