import functools
from flask import (
    abort, Blueprint, flash, g, redirect, render_template, request, session, url_for
)

import random


bp = Blueprint('play', __name__, url_prefix='/')

@bp.route("/", methods={'GET'})
def root():
    return redirect("/play",code=302)

@bp.route("/play", methods={'GET'})
def play():
    table = create_table()
    for row in table:
        print(row)
    return render_template("play.jinja", title="Play Nonogram", page="Play Nonogram")

# Nonogram Shape
# [
#     [[], [2],[1], [1], [2]]
#     [[1,2], [True, False, True, True]],
#     [[2,1], [True, True, False, True]]
# ]

def create_table():
    col_len = 20
    table = []

    for i in range(0,col_len):
        row = []
        key = []
        gram = []
        count = 0
        for j in range(0,col_len):
            option = random.choice([True,False])
            if option:
                count += 1
            else:
                if count > 0:
                    key.append(count)
                count = 0
            gram.append(option)
        row.append(key)
        row.append(gram)
        table.append(row)

    return table

def count_columns(table):
    pass
