CREATE database  apirestbd;

use apirestbd;

CREATE TABLE users(id int not null auto_increment,
                    name varchar(50) not null,
                    last_name varchar(50) not null,
                    address varchar(120) not null,
                    city varchar(60) not null,
                    state varchar(60) not null,
                    country varchar(60) not null,
                    phone varchar(20) not null,
                    area_code varchar(45) not null,
                    birthdate date not null,
                    CONSTRAINT pk_user PRIMARY KEY(id));


INSERT INTO users VALUES(1,'Carlos Andres', 'Bueno Espitia', 'cra 85', 'Cali', 'Valle', 'COL', '3152136750', '4564', now());
