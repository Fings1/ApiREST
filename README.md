# ApiREST

Api REST With node.JS  Using express and MySQL.

Steps:
-----------------------------

+ git clone https://github.com/Fings1/ApiREST
+ cd ApiREST
+ npm install
+ Import file sql in folder db/bd.sql
+ Config file for DB config/connection.js
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
Mocha and chai-http were used for the tests:

+ cd ApiREST
+ execute command `mocha`

