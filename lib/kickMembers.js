const user = require('discord.js-self');
const robot = require('discord.js');
const consoleTitle = require("console-title");
const gui = require("../module/gui");
const chalk = require("chalk");
const input = require("input");

const robo = new robot.Client();
const self = new user.Client();

async function kickMembers() {
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

                const findGuild = robo.guilds.cache.get(gId);
                if(!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);


                if(!findGuild.me.hasPermission("KICK_MEMBERS")) return console.log(`${chalk.red("Error:")} Lacking Permission: KICK_MEMBERS`);
                try {
                    findGuild.members.cache.forEach((member) => {
                        member.kick();
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Kicked ${chalk.magenta(`${member.id}`)}`)
                    })
                } catch (err) {
                    console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed ${chalk.magenta(`${member.id}`)}`)
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

                const findGuild = self.guilds.cache.get(gId);
                if(!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);

                if(!findGuild.me.hasPermission("KICK_MEMBERS")) return console.log(`${chalk.red("Error:")} Lacking Permission: KICK_MEMBERS`);
                findGuild.members.cache.forEach((member) => {
                    member.kick();
                    console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Kicked ${member.id}`)
                })
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

module.exports = kickMembers;