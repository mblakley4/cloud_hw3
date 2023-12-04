#!/usr/bin/env bash

echo "Initializing database"
docker network create hw2_network

docker build -t postgres15_db ./db/

docker run --name hw2_db --net hw2_network -p 5432:5432 -d postgres15_db postgres

echo "Database initialization complete, running on port 5432"
echo "------------------------"
echo "Starting server"

docker build -t node_server_image ./server/

docker run --name node_server --net hw2_network -p 8080:8080 -d node_server_image

echo "Server listenting on port 8080"
echo "------------------------"
echo "Get an HTML list of names at http://localhost:8080/people/html"
echo "Get a JSON list of names at 'curl localhost:8080/people/json'"

echo "Executing JSON curl route from script:"
curl http://localhost:8080/people/json
echo -e "\n"