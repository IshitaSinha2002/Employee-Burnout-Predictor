from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)

model = pickle.load(open("burnout_model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    features = np.array([[
        data['Gender'],
        data['Company Type'],
        data['WFH Setup Available'],
        data['Designation'],
        data['Resource Allocation'],
        data['Mental Fatigue Score']
    ]])

    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)[0]

    if prediction < 0.3:
        risk = "Low Risk"
        suggestion = "Maintain your current work habits and balance."
    elif prediction < 0.6:
        risk = "Moderate Risk"
        suggestion = "Consider reducing workload and taking breaks."
    else:
        risk = "High Risk"
        suggestion = "High burnout risk. Take immediate actions and rest."

    return jsonify({
        "burn_rate": float(prediction),
        "risk": risk,
        "suggestion": suggestion
    })

if __name__ == '__main__':
    app.run(debug=True)