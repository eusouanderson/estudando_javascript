FROM postgres:alpine

ENV POSTGRES_USER=studies
ENV POSTGRES_PASSWORD=studies123
ENV POSTGRES_DB=studydb

COPY docker/db/init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
