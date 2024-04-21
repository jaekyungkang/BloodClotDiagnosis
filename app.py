from flask import Flask,jsonify
from gemniapi import gen_res

app = Flask(__name__)

@app.route("/")
def hello_world():
    final_calc = gen_res(0.8)
    return jsonify({"message": final_calc.text})