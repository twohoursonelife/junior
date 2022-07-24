#!bin/bash

docker pull ghcr.io/twohoursonelife/junior
docker stop junior
docker system prune -f
docker run -d --name=junior -e PROD_TOKEN=ABC ghcr.io/twohoursonelife/junior