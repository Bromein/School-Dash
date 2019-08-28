BEGIN TRANSACTION;

CREATE TABLE staff (
  id serial PRIMARY KEY,
  author_id SMALLINT NOT NULL,
  staff_name VARCHAR(50) NOT NULL,
  staff_position VARCHAR(50) NOT NULL,
  staff_salary BIGINT NOT NULL,
  hire_date VARCHAR(10) NOT NULL

);

COMMIT;