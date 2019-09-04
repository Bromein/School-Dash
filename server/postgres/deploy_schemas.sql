-- Deploying fresh db with \i (runs scripts) don't forget order matters if they are dependent
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/staff.sql'
\i '/docker-entrypoint-initdb.d/tables/quotes.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'