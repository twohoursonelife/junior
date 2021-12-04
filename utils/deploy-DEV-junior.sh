#!/bin/bash

docker pull ghcr.io/twohoursonelife/junior:latest
docker stop DEV_junior
docker system prune -f
docker run -d --name=DEV_junior -e DEV_TOKEN=TOKEN ghcr.io/twohoursonelife/junior:latest
