const user = require('discord.js-self');
const robot = require('discord.js');
const consoleTitle = require("console-title");
const gui = require("../module/gui");
const chalk = require("chalk");
const input = require("input");

const robo = new robot.Client();
const self = new user.Client();

async function createChannels() {
    console.clear();
    consoleTitle("Acunetix - Nuker")
    gui()

    const query = await input.select([
        "Robot Account",
        "User Account"
    ])

    if (query === "Robot Account") {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(chalk.magenta(">") + ' Enter the bot\'s token: ', (token) => {
            robo.once("ready", async () => {
                consoleTitle(`Logged in as: ${robo.user.tag}`)

                const gId = await input.text(`${chalk.magenta(">")} Guild ID: `);
                const channelName = await input.text(`${chalk.magenta(">")} Channel Name`)

                const findGuild = robo.guilds.cache.get(gId);
                if(!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);


                if(!findGuild.me.hasPermission("MANAGE_CHANNELS")) return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS`);
                try {
                    setInterval(() => {
                        findGuild.channels.create(channelName).then((role) => {
                            console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Created ${chalk.magenta(`${role.id}`)}`)
                        });
                    })
                } catch (err) {
                    console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed ${chalk.magenta(`${role.id}`)}`)
                    console.log(err);
                }
            })

            robo.login(token).catch(O_o => {
                console.clear();
                gui();
                console.log(`${time} | ${chalk.red("[Invalid Token]")} please provide a valid bot token.`);
            })
        });
    } else if (query === "User Account") {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(chalk.magenta(">") + ' Enter the account\'s token: ', (token) => {
            self.once("ready", async () => {
                consoleTitle(`Logged in as: ${self.user.tag}`)
            })

            self.once("ready", async () => {
                consoleTitle(`Logged in as: ${self.user.tag}`)

                const gId = await input.text(`${chalk.magenta(">")} Guild ID: `);
                const channelName = await input.text(`${chalk.magenta(">")} Channel Name`)

                const findGuild = self.guilds.cache.get(gId);
                if(!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);

                if(!findGuild.me.hasPermission("MANAGE_CHANNELS")) return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS`);
                try {
                    findGuild.channels.create(channelName).then((channel) => {
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Created ${chalk.magenta(`${channel.id}`)}`)
                    });
                } catch (err) {
                    console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed ${chalk.magenta(`${channel.id}`)}`)
                    console.log(err);
                }
            })

            self.login(token).catch(O_o => {
                console.clear();
                gui();
                console.log(`${time} | ${chalk.red("[Invalid Token]")} please provide a valid user token.`);
            })
        });

    } else {
        console.log("\nInvalid Option");
        process.exit();
    }

}

module.exports = createChannels;