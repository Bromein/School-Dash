BEGIN TRANSACTION;

INSERT into users (name, email, joined) values ('admin', 'admin@dashr.com', '2019-01-25');
INSERT into login (hash, email) values ('$2a$10$F/nbSEi0ERw5kuwRiHGtZOtEcugFOoVxB27znM2hRO7SsOlns4wJC', 'admin@dashr.com');
INSERT into staff (author_id, staff_name, staff_position, staff_salary, hire_date) values
(1, 'Frank Jaeger', 'VP of QA', 160000, '2012-05-23'),
(1, 'Meryl Silverburgh', 'VP Of HR', 135000, '2013-09-05'),
(1, 'Iroquois Pliskin', 'Pen Tester', 180000, '2013-07-04'),
(1, 'Roy Campbell', 'Colonel of Internal Affairs', 120000, '2007-02-17'),
(1, 'Hal Emmerich', 'R&D Engineer', 160000, '2012-05-23'),
(1, 'Kazuhira Miller', 'Field Instructor', 135000, '2013-09-05'),
(1, 'Tretij Rebenok', 'VP Of Intel Division', 180000, '2013-07-04'),
(1, 'Naomi Hunter', 'R&D Assistant', 180000, '2013-07-04'),
(1, 'Richard Ames', 'SVP of Intel Division', 180000, '2013-07-04'),
(1, 'Jack ''Raiden'' ', 'Company Mascot', 95000, '2006-03-04');

INSERT into quotes (content, author) values
('Your limitation is only your imagination', 'DashR'),
('Push yourself, because no one else is going to do it for you', 'DashR'),
('Sometimes later becomes never. Do it now', 'DashR'),
('The greatest things in life are not born in the comfort zone', 'DashR'),
('Today is the day. Do it', 'DashR'),
('Dream it. Wish it. Do it', 'DashR'),
('Success doesn''t just find you. You have to go and get it', 'DashR'),
('Don''t stop when you''re tired. Stop when you''re done', 'DashR'),
('Little things make big days', 'DashR'),
('Don''t wait for opportunity. Create it', 'DashR'),
('Sometimes we''re tested not to show our weaknesses, but to discover our strengths', 'DashR');



COMMIT;

-- Login: admin@gmail.com password: secret