FROM postgres:15

ENV POSTGRES_PASSWORD xyz789
ENV POSTGRES_DB hw2db

COPY schema_v1.sql /docker-entrypoint-initdb.d/
COPY seed_v1.sql /docker-entrypoint-initdb.d/