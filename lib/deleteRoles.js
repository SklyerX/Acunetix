const user = require('discord.js-self');
const robot = require('discord.js');
const consoleTitle = require("console-title");
const gui = require("../module/gui");
const chalk = require("chalk");
const input = require("input");

const robo = new robot.Client();
const self = new user.Client();

async function deleteRoles() {
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


                if(!findGuild.me.hasPermission("MANAGE_ROLES")) return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_ROLES`);
                try {
                    findGuild.roles.cache.forEach((role) => {
                        role.delete();
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Deleted ${chalk.magenta(`${role.id}`)}`)
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

                const findGuild = self.guilds.cache.get(gId);
                if(!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);

                if(!findGuild.me.hasPermission("MANAGE_ROLES")) return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_ROLES`);
                findGuild.roles.cache.forEach((role) => {
                    role.delete();
                    console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Deleted ${chalk.magenta(`${role.id}`)}`)
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

module.exports = deleteRoles;