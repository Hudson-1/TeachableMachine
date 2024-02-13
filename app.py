from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/test')
def test():
    return render_template("test.html")


@app.route('/time')
def timer():
    return render_template("countdown.html")

@app.route('/endscreen')
def endscreen():
    score = request.args.get('score')
    props = {
        'score':score
    }
    return render_template("endscreen.html",data=props)


if __name__ == '__main__':
    app.run()

