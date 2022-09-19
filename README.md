# junior
Non-C Junior: Automating the life's work of MVP community member Non Creative Guy. *Supplies helpful information and guides to players upon a phrase in the Discord, amongst other helpful things*

**Always check the Dockerfile for the current version of Node this project is developed against.**

### How to deploy and release a new version
- Make desired changes/commits
- Create a new release via Github, naming the tag in the example format 1.0.0
- Github action Deploy will trigger, building the image, pushing it to GHCR and finally will redeploy it.
- Voila, bot is now updated in Discord. Check with /version

### Necessary Environment Variables
#### For running the bot
When **DEV_TOKEN** is set, **PROD_TOKEN** will not be checked to prevent deploying dev commands to prod accidentally. Default hardcoded dev CLIENT and GUILD ID's will be used; If only **PROD_TOKEN** is set, it will be expected the ID variables are also set.
- **DEV_TOKEN**: Development bot token
- **PROD_TOKEN**: Production bot token

#### For deploying commands
- **CLIENTID**: ID of the bot client to deploy the commands
- **GUILDID**: ID of the guild to deploy the commands

- Junior: 888800450533548123
- 2HOL Discord: 423293333864054833

- Dev Junior: 912705407850532904
- Dev 2HOL Discord: 678098930503909386

### Container registry info

- We use GitHub's container registry, namespace `ghcr.io/twohoursonelife/junior`
  - You will find **stable/released** versions here

### Github Actions info

- We have an action to deploy the bot, triggered by the creation of a GitHub release. (Version format `*.*.*`)
  - This is `.github/workflows/deploy.yml`, the action is made up of three jobs. First the image is built and exported to GHCR, at the same time the Slash Commands for the bot are being deployed in a seperate job and finally, dependent on the build and upload job, final deployment is triggered.
  - Deployment is a bit rougher and not as easy to quickly move to another server as I would like it to be.
  - In essence, we have a Digital Ocean Droplet setup with the 1-Click-Install Docker image which has then been setup with [adnanh/webhook](https://github.com/adnanh/webhook) and the `deploy.sh` script found in this repo, loosely following [this article](https://levelup.gitconnected.com/automated-deployment-using-docker-github-actions-and-webhooks-54018fc12e32).
  - This allows the deploy action to hit the *totally secure (and not security by obscurity)* webhook with a POST request, triggering the script to run on the server.

### Command cheat sheet

Build Docker container
`docker build . --tag ghcr.io/twohoursonelife/junior`

Run latest dev image
`docker run --name=junior-dev --detach --env DEV_TOKEN=thetoken ghcr.io/twohoursonelife/junior-dev:latest`

Deploy commands
`export DEV/PROD_TOKEN=thetoken`
`export GUILDID=id` (Defaults to dev token if unset)
`export CLIENTID=id` (Defaults to dev token if unset)
`node deploy-commands.js`

Webhook
`webhook -hooks /var/webhook/hooks.json -verbose -port 9000 -hotreload`
To manage the Webhook app, a screen is running titled 'webhooks'

Use correct node version
`nvm use (version)` *Always check the Dockerfile for the current version of Node this project is developed against.*

Update packages
`npm update`

Better way to update packages (Will tell you about any new versions, including major)
`npx npm-check-updates` provide `-u` for the program to update them itself

Get current Junior version
`git describe --tags --abbrev=0 > version.txt`