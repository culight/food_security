import psycopg2

def get_db_instance():
    conn = None

    try:
        conn = psycopg2.connect("dbname='garden' user='dmoton' host='localhost'")
    except:
        print( "I am unable to connect to the database")

    return conn
