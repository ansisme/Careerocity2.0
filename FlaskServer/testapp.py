from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)

jobs_dict = {
    0: 'AI ML Specialist',
    1: 'API Integration Specialist',
    2: 'Application Support Engineer',
    3: 'Business Analyst',
    4: 'Customer Service Executive',
    5: 'Cyber Security Specialist',
    6: 'Data Scientist',
    7: 'Database Administrator',
    8: 'Graphics Designer',
    9: 'Hardware Engineer',
    10: 'Helpdesk Engineer',
    11: 'Information Security Specialist',
    12: 'Networking Engineer',
    13: 'Project Manager',
    14: 'Software Developer',
    15: 'Software Tester',
    16: 'Technical Writer'
}

@app.route('/check', methods=['GET'])
def career():
    return jsonify({"Success": "Granted"})

@app.route('/predict', methods=['POST'])
def result():
    if request.method == 'POST':
        payload = request.json
        final = np.array([[int(payload[f'skill_{i}']) for i in range(1, 13)]])

        loaded_model = pickle.load(open("../FlaskServer/careerlast.pkl", 'rb'))

        predictions = loaded_model.predict(final)
        ans = str(predictions)
        ans = ans.replace("[", "")
        ans = ans.replace("]", "")
        ans = ans.replace("'", "")
        pred = loaded_model.predict_proba(final)
        count = 0
        prob = pred[0]
        ls = []
        inn = []
        for i in prob:
            if(i > 0.0):
                ls.append(i)
                inn.append(count)
            count = count+1
        jobforya = [jobs_dict[i] for i in inn]
        return jsonify({"Your Recommended Job": jobforya})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    
    
    
    
# @app.route('/predict', methods=['GET'])
# def result():
#     if request.method == 'GET':
#         ratings=[]
#         for i in range(1,13):
#              rating = int(input(f"Rate yourself out of 10 for skill {i}: "))
#              ratings.append(rating)
#         final = np.array([ratings])
#         print(final)
#         loaded_model = pickle.load(open("../FlaskServer/careerlast.pkl", 'rb'))

#         predictions = loaded_model.predict(final)
#         ans = str(predictions)
#         print(ans)
#         ans = ans.replace("[", "")
#         ans = ans.replace("]", "")
#         ans = ans.replace("'", "")
#         pred = loaded_model.predict_proba(final)
#         print(pred)
#         count = 0
#         prob = pred[0]
#         print(prob)
#         ls = []
#         inn = []
#         for i in prob:
#             print(i)
#             if(i > 0.0):
#                 ls.append(i)
#                 inn.append(count)
#             count = count+1
#         print(ls)
#         print(inn)
#         jobforya = []
#         for i in inn:
#             jobforya.append(jobs_dict[i])
#         print(jobforya)
#         return jsonify({"Your Recommended Job": jobforya})