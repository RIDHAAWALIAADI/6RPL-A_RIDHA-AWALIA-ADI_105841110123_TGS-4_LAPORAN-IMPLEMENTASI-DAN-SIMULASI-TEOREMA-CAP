from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

stok = 100
transaksi = 0

@app.route("/api/dashboard")
def dashboard():

    global stok, transaksi

    return jsonify({
        "stok": stok,
        "transaksi": transaksi,
        "mode": "AP",
        "network": "ONLINE",
        "response_time": random.randint(10,50)
    })

@app.route("/api/beli")
def beli():

    global stok, transaksi

    if stok > 0:
        stok -= 1
        transaksi += 1

    return jsonify({
        "success": True
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)