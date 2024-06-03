DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

use employee_dbcreate
table department (
    id INTO NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30)
);

create table role (
    id INT NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    foreign key (department_id),
    REFERENCES department (id)
);

create table employee (
    id INT NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id),
    REFERENCES role (id)
)