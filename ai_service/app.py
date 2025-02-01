from flask import Flask, jsonify, request
from transformers import pipeline
from flask_cors import CORS

app=Flask(__name__)
CORS(app)
generator = pipeline('text-generation', model="distilgpt2")

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data=request.json 
        prompt = data.get('input','')
        output=generator(prompt, max_length=500, num_return_sequences=1, truncation=True)
        # print(output)
        return jsonify(output)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__=='__main__':
    app.run(host="0.0.0.0", port=4001)