# ApiREST

Api REST con node js utilizando express y MySQL para persistir los datos

pasos para ponerlo en marcha:
-----------------------------

+ git clone https://github.com/Fings1/ApiREST
+ cd ApiREST
+ npm install
+ Importar archivo sql en la carpeta db/bd.sql
+ Configurar conexion si es necesario config/connection.js
+ node app.js

Endpoints
-----

| Path| Request Type|
| ----- | ---- |
|http://localhost:3000/users|GET|
|http://localhost:3000/users/1|GET|
|http://localhost:3000/users|POST|
|http://localhost:3000/users/1|PUT|
|http://localhost:3000/users/1|DELETE|

Test
----
Se utilizo mocha y chai-http para los test, para ejecutarlos:

+ cd ApiREST
+ ejecutar comando `mocha`

