from flask import Flask
import psycopg2
import json

try:
  conn = psycopg2.connect("dbname='d7mljc6ucfr00v' user='tbhjpczlgvogwq' host='ec2-54-235-132-202.compute-1.amazonaws.com' password='7985f8dbb39774362cf00b8d502d2cf337f821276b684f10c7c081634b99346f'")
  cur = conn.cursor()
except:
  print("Cannot connect to database")

app = Flask(__name__)

@app.route('/')
def index():
  return "hey there"

@app.route('/produce/<string:name>', methods=['GET'])
def get_produce(name):
  query = """
    select g.* from produce p
    inner join garden_produce gp on gp.produce_name = p.name
    inner join garden g on g.name = gp.garden_name
    where p.name like '%%%s%%'
  """ % name
  cur.execute(query)

  return json.dumps(cur.fetchall(), indent=2)

if __name__ == '__main__':
  app.run(debug=True)
