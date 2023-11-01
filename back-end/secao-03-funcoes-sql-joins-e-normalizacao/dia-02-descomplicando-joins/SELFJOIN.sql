USE hr;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager 
ON Employee.manager_id = Manager.employee_id;
    
-- Exercicios

SELECT CONCAT(e.first_name, ' ', e.last_name) AS employee, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employees e
INNER JOIN employees m
ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;

SELECT CONCAT(m.first_name, ' ', m.last_name) as Manager, COUNT(*) AS `Employee Quantity`
FROM employees e
INNER JOIN employees m
ON e.manager_id = m.employee_id
GROUP BY Manager;