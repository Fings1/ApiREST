# ApiREST

REST con node.js

pasos para ponerlo en marcha:
-----------------------------

+ git clone
+ npm install
+ Importar archivo sql en db/bd.sql
+ Configurar conexion si es necesario config/connection.sql
+ node app.js

Rutas
-----

| Path| Request Type|
| ----- | ---- |
|http://localhost:3000/users|GET|
|http://localhost:3000/users/1|GET|
|http://localhost:3000/users|POST|
|http://localhost:3000/users/1|PUT|
|http://localhost:3000/users/1|DELETE|
