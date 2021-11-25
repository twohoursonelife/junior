# junior
Non-C Junior: Automating the lifes work of MVP community member Non Creative Guy. *Supplies helpful information and guides to players upon a phrase in the Discord, amongst other helpful things*

### Container registry info

- Docker namespace is `connorhsmith/junior`
  - You will find **stable/released** versions here
- This repo also uses Github Container Registry, namespace `ghcr.io/twohoursonelife/junior`
  - You will find **unstable/dev** versions here

### Github Actions info

- We have an action to deploy the bot, triggered by the creation of a Github release. (Version format `*.*.*`)
  - This is `.github/workflows/deploy.yml`, the action is made up of three jobs. First the image is built and exported to Docker Hub, at the same time the Slash Commands for the bot are being deployed in a seperate job and finally, dependent on the build and upload job, final deployment is triggered.
  - Deployment is a bit rougher and not as easy to quickly move to another server as I would like it to be.
  - In essence, we have a Digital Ocean Droplet setup with the 1-Click-Install Docker image which has then been setup with [adnanh/webhook](https://github.com/adnanh/webhook) and the `deploy.sh` script found in this repo, loosely following [this article](https://levelup.gitconnected.com/automated-deployment-using-docker-github-actions-and-webhooks-54018fc12e32).
  - This allows the deploy action to hit the *totally secure (and not security by obscurity)* webhook with a POST request, triggering the script to run on the server.

- The other action simply builds the image and releases it to GHCR on every push to the main branch.

### Command cheat sheet

Run latest dev image
`sudo docker run --name=junior -d -e DEV_TOKEN=thetoken ghcr.io/connorhsmith/junior`

Build Docker container
`docker build --tag connorhsmith/junior .`

Deploy commands
`export DEV/PROD_TOKEN=thetoken`
`node deploy-commands.js`

Webhook
`webhook -hooks /var/webhook/hooks.json -verbose -port 9000 -hotreload`
