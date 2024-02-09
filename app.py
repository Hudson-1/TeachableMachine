from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/time')
def timer():
    return render_template("countdown.html")

@app.route('/endscreen')
def endscreen():
    return render_template("endscreen.html")


if __name__ == '__main__':
    app.run()

