INSERT INTO
    department (name)
values ("Customer Service"),
    ("Marketing"),
    ("IT"),
    ("Manager");

INSERT INTO
    role (title, salary, department_id)
values ("Phone", 3000.00, 1),
    ("Messaging", 30000.00, 1),
    ("Lead", 40000.00, 1),
    ("SEO", 60000.00, 2),
    ("Strategy", 70000.00, 2),
    ("Advertising", 70000.00, 2),
    ("Debugger Guy", 80000.00, 3),
    ("Electrical Guy", 90000.00, 3),
    (
        "Customer Service Manager",
        80000.00,
        4
    ),
    (
        "Marketing Manager",
        90000.00,
        4
    ),
    ("IT Manager", 80000.00, 4),
    (
        "The Head Honcho",
        100000.00,
        4
    );

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    )
values ("Zeno", "Gallegos", 2, 11),
    ("Bonnie", "Beast", 2, 11),
    ("Jeff", "Goldblum", 2, 11),
    ("Johnny", "Jenses", 2, 11),
    ("Sam", "Timothy", 1, 10),
    ("Harold", "Ham", 1, 10),
    ("Paul", "Stan", 1, 10),
    ("Tim", "Pratt", 1, 10),
    ("Jeremy", "Heider", 3, 11),
    ("Dylan", "Hammer", 3, 11),
    ("Jessie", "Hancock", 5, 9),
    ("Jenny", "Jill", 5, 9),
    ("Samantha", "Hugo", 6, 6),
    ("Lauren", "Green", 6, 9),
    ("Mateo", "Fuego", 5, 9),
    ("Catherine", "Thomas", 5, 9),
    ("Sally", "Jane", 7, 12),
    ("Eve", "Walker", 8, 12),
    ("Kelsie", "Fargo", 10, 12),
    ("Jill", "Congo", 9, 12),
    ("Noah", "King", 11, 12),
    ("Filipe", "Pan", 12, 12);