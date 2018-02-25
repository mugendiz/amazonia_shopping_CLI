DROP DATABASE IF EXISTS amazonia_DB;
CREATE database amazonia_DB;

USE amazonia_DB;

CREATE TABLE products (
  item_id VARCHAR(30) NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Mavic Pro Drone", "Drones", 849.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, "Parrot Bebop Drone", "Drones", 494.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12, "Holy Stone F181W", "Drones", 119.95, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (13, "Traxxas Slash 1", "RC Cars", 229.95, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (14, "Traxxas Ford Mustang GT", "RC Cars", 226.01, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (15, "Axial SCX10 Deadbolt", "RC Cars", 299.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (16, "Sphero R001ROW BB-8", "Robots", 88.49, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (17, "Lynx Home Robot", "Robots", 494.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (18, "Jibo Home Robot", "Robots", 699.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (19, "Echo Spot", "Smart Tools", 129.99, 10);

SELECT *
FROM products;
