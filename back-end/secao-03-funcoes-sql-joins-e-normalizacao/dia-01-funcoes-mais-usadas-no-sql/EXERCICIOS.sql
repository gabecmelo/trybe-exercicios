USE hr;

-- Apenas salario maximo:
SELECT MAX(salary) FROM employees;

-- Forma completa sem usar max:
SELECT employee_id, CONCAT(first_name, ' ', last_name) AS full_name, salary FROM employees
ORDER BY salary DESC
LIMIT 1;

-- Diferença
SELECT MAX(salary) - MIN(salary) AS diferenca FROM employees;

-- Média dos salários:
SELECT job_id, AVG(salary) AS average_salary FROM employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- Completando a query:
SELECT j.job_title, AVG(e.salary) AS average_salary 
FROM employees AS e
INNER JOIN jobs AS j
ON e.job_id = j.job_id
GROUP BY e.job_id 
ORDER BY average_salary DESC;

-- Quantidade necessária pra pagar a todos
SELECT SUM(salary) AS despesa_total FROM employees;

-- Arredondamento
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) from employees;

-- Quantidade de pessoas programadoras
SELECT COUNT(*) FROM employees
WHERE job_id = 'IT_PROG';

-- Pagamento de cada profissão
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id;

-- Pagamento apenas de pessoas programadoras
SELECT job_id, SUM(salary) FROM employees
WHERE job_id = 'IT_PROG';

-- Média e numero dos departamentos com mais de 10 funcionarios;
SELECT department_id, AVG(salary), COUNT(*) AS contagem FROM employees
GROUP BY department_id
HAVING contagem > 10;

-- Atualização de telefones
SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 8 ou mais caracteres
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- Apenas o ano de contratação
SELECT employee_id, first_name, YEAR(hire_date) AS year_hire_date FROM employees;

-- Apenas o dia de contratação
SELECT employee_id, first_name, DAY(hire_date) AS day_hire_date FROM employees;

-- Apenas o mês de contratação
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

-- Nomes em maiúsculo
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name FROM employees;

-- Sobrenome e data do momento especifico de contratação
SELECT last_name, hire_date FROM employees
WHERE YEAR(hire_date) = 1987;

-- Tempo de trabalho na empresa e infos específicas
SELECT first_name, last_name, DATEDIFF(DATE(NOW()), hire_date) AS days_since_hired FROM employees;
-- ou
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS days_since_hired FROM employees;
