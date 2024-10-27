# junior
Non-C Junior: Automating the life's work of MVP community member Non Creative Guy. *Supplies helpful information and guides to players upon a phrase in the Discord, amongst other helpful things*

### Deploy and release a new version
- Make desired changes/commits
- Create a new release via GitGub, naming the tag in the example format 1.0.0
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

### Dev command cheat sheet

- `bun run build`
- `bun run start`

Deploy commands
GUILDID and CLIENTID defaults to dev token if unset
```bash
export DEV/PROD_TOKEN=
export GUILDID=
export CLIENTID=
bun run commands
```

Update packages
`bun update`
`bun npm-check-updates -u`
