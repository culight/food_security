import csv
import psycopg2
from database_functions import DatabaseCursor

try:
    conn = psycopg2.connect("dbname='garden' user='dmoton' host='localhost'")
except:
    print( "I am unable to connect to the database")

cur = conn.cursor()
