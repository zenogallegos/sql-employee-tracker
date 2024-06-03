const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
require("dotenv").config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// make connection to SQL
const db = mysql.createConnection(
  {
    host: "localhost",
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  console.log(`You are connected to the employee_db database.`)
);

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
  });
  init();
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.log(results);
  });
  init();
}

function viewEmployees() {
  db.query("SELECT * from employee", function (err, results) {
    console.log(results);
  });
  init();
}

function addDepartment() {
  inquirer
    .prompt([
      {
        message: "What is the new department?",
        name: "newDep",
      },
    ])
    .then((response) => {
      console.log(response);
      db.query(
        `INSERT INTO department (name) VALUES (?);`,
        response.newDep,
        function (err, results) {
          console.log(" A new department has been added");
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        message: "Role name?",
        name: "newRole",
      },
      {
        message: "Role salary?",
        name: "newSalary",
      },
      {
        message: "Role Department?",
        name: "newDep",
      },
    ])
    .then((response) => {
      let tempArray = [response.newRole, response.newSalary, response.newDep];
      db.query(
        `INSERT INTO role (title, salary, department_id) VALUES (?,?,?);`,
        tempArray,
        function (err, results) {
          console.log("added new role");
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        message: "First name?",
        name: "newFirst",
      },
      {
        message: "Last name?",
        name: "newLast",
      },
      {
        message: "Role name?",
        name: "newRole",
      },
      {
        message: "Manager name?",
        name: "newMan",
      },
    ])
    .then((response) => {
      let tempArray = [
        response.newFirst,
        response.newLast,
        response.newRole,
        response.newMan,
      ];
      db.query(
        `INSERT INTO employee (first_name, Last_name, role_id, manager_id) VALUES (?,?,?,?);`,
        tempArray,
        function (err, results) {
          console.log("added new employee");
        }
      );
    });
}

function updateEmployees() {
  inquirer
    .prompt([
      {
        message: "Enter the id of the employee to change their role",
        name: "updated",
      },
      {
        message: "New role name?",
        name: "updated",
      },
    ])
    .then((response) => {
      let tempArray = [response.updated, response.updatee];
      db.query(
        "update employee set role_id = ? where id = ?",
        tempArray,
        function (err, results) {
          console.log("Employee updated");
        }
      );
    });
}

function updateEmployeesManager() {
  inquirer
    .prompt([
      {
        message: "Enter the id of the employee to change their manager",
        name: "updatee",
      },
      {
        message: "New manager name?",
        name: "updated",
      },
    ])
    .then((response) => {
      let tempArray = [response.updated, response.updatee];
      db.query(
        "update employee set manager_id = ? where id = ?",
        tempArray,
        function (err, results) {
          console.log("Employee updated");
        }
      );
    });
}

function deleteInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What table do you want to delete from?",
        name: "table",
        choices: ["department", "role", "employee"],
      },
      {
        message: "what id from the table do you want to delete?",
        name: "deleting",
      },
    ])
    .then((response) => {
      let tempArray = [response.table, parseInt(response.deleting)];
      console.log(tempArray);
      db.query(
        "delete from ? where id = ?",
        tempArray,
        function (err, results) {
          console.log(results);
          console.log("row deleted");
        }
      );
    });
}

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do?",
        name: "firstQuestion",
        choices: [
          "View departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update employee role",
          "Update employee manager",
          "delete from a table",
        ],
      },
    ])
    .then((response) => {
      switch (response.firstQuestion) {
        case "View departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployees();
          break;
        case "Update employee manager":
          updateEmployeesManager();
          break;
        case "delete from a table":
          deleteInfo();
          break;
      }
    });
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  init();
});
