BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('TestTim', 'Tim@gmail.com', '2019-01-25');
INSERT into login (hash, email) values ('$2a$10$F/nbSEi0ERw5kuwRiHGtZOtEcugFOoVxB27znM2hRO7SsOlns4wJC', 'Tim@gmail.com');

COMMIT;