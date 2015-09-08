import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
	return render_template('home.html', message="Hello World!")