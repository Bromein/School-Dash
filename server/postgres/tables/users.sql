BEGIN TRANSACTION;
CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(30),
  email text UNIQUE NOT NULL,
  joined TIMESTAMP NOT NULL

);


COMMIT;



-- TODO - Search for Social Media Schema, how should I integrate my database to be able to allow users to have their own staff page
