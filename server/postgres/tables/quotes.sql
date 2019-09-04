BEGIN TRANSACTION;

CREATE TABLE quotes (
  id serial PRIMARY KEY,
  content text NOT NULL,
  author text

);

COMMIT;