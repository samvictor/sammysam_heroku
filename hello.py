import os, sys
from flask import Flask, render_template, flash, url_for, g, session, request, \
	redirect, send_from_directory, abort

app = Flask(__name__)

import logging

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

@app.route('/')
def hello():
	return render_template('home.html', message="Hello World!")