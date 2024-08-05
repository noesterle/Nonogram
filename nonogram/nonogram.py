import functools
from flask import (
    abort, Blueprint, flash, g, redirect, render_template, request, session, url_for
)

import random


bp = Blueprint('play', __name__, url_prefix='/')

@bp.route("/", methods={'GET'})
def root():
    return redirect("/size",code=302)

@bp.route("/size", methods={"GET"})
def enter_size():
    return render_template("size.jinja", title="Play a Nonogram", page="Enter a Size for the Nonogram")

@bp.route("/play", methods={'POST'})
def play():
    size = int(request.form['size'])
    table = create_table(size)
    count_of_col = count_columns(table, size)
    count_of_col = [[''],count_of_col]
    table.insert(0, count_of_col)
    # for row in table:
    #     for item in row:
    #         print (str(item) + '\t')
    return render_template("play.jinja", title="Play Nonogram", page="Play Nonogram", nonogram=table)

# Nonogram Shape
# [
#     [[], [2],[1], [1], [2]]
#     [[1,2], [True, False, True, True]],
#     [[2,1], [True, True, False, True]]
# ]

def create_table(size):
    table = []

    for i in range(0,size):
        row = []
        key = []
        gram = []
        count = 0
        for j in range(0,size):
            option = random.choice([True,False])
            if option:
                count += 1
            else:
                if count > 0:
                    key.append(count)
                count = 0
            gram.append(option)
        if count > 0:
            key.append(count)
        if len(key) == 0:
            key.append(0)
        row.append(key)
        row.append(gram)
        table.append(row)

    return table

def count_columns(table, size):
    row_of_col_count = []
    for i in range(0,size):
        col_count = []
        count = 0
        for j in range(0,size):
            option = table[j][1][i]
            # print(option)
            if option:
                count += 1
            else:
                if count > 0:
                    col_count.append(count)
                count = 0
        if count > 0:
            col_count.append(count)
        if len(col_count) == 0:
            col_count.append(0)
        row_of_col_count.append(col_count)
    return row_of_col_count
