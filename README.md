# SaperlipoBot

## Description
Welcome to the SaperlipoBot Discord bot! This bot offers a variety of features, including utility commands, games and even weather information. Explore the different commands to get the most out of your experience.

## Installation
To install and use the bot, follow these steps:
### 1. Cloning the Repository :
```bash
git clone https://github.com/phothinh/saperlipobot.git
cd your-bot-repo
```
### 2. Installing dependencies : 
```bash
npm install saperlipobot
```

### 3. Configure the config.json file:

Create a **config.json** file at the root of the project.
Add your Discord bot **token** to config.json.
Add your Discord bot **clientId** to config.json.

```json 
{
    "token": "your_token",
    "clientId": "your_client_id"
}
```

*(How to create a Discord bot bellow)*

### 4. Deploying  commands:

```bash
npm run deploy-commands
```

### 5. Start Bot :

```bash
npm start
```
## How to create a Discord bot

### 1. Create a Bot on Discord Developer Portal :

- Go to **[Discord Developer Portal](https://discord.com/developers/applications).**
- Click on **New Application**.
- In the **Bot** tab, click on **Add Bot**.

### 2. Get the bot token:

- In the **Bot** tab, click on **Copy** under **Token** to copy the bot token.
- Add this token to your **config.json** file.

### 3. Get the bot client id

- In the **General Information** tab, click on **Copy** under **APPLICATION ID** to copy the bot client id.
- Add this client id to your **config.json** file.

### 4. Invite the bot to a server:

- In the **OAuth2** > **URL Generator** tab, check 
    - bot
    - applications.commands
- Copy the generated link and open it in your browser to invite the bot onto a server.

## Discord commands
### Utility commands : 
- **/avatar** : Displays the URL of the selected user's avatar or your own avatar.
- **/server** : Provides server information.
- **/user** : Provides information about the user.
- **/weather** : Gets the weather for a given region.

### Fun commands : 
- **/matchpairs** : Play the Match Pairs game !
- **/pings** : Replies with Pong !
- **/snake** : Play the Snake game !
- **/2048** : Play the 2048 game !
- **/wordle** : Play the Wordle game ! *(in developpment)*

## Contributing
See the [specific guide](./CONTRIBUTING.md).

## Licence
This project is under the [MIT Licence](./LICENSE).