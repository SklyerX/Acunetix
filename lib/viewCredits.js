const consoleTitle = require("console-title");
const chalk = require("chalk");
const manageTheme = require("../theme.json");

let theme;

if(manageTheme.theme === "yellow") {
    theme = chalk.yellow;   
} else if(manageTheme.theme === "red") {
    theme = chalk.redBright
} else if(manageTheme.theme === "default") {
    theme = chalk.magenta;
} else {
    theme = chalk.white;
}

async function changeTheme() {
    console.clear();
    consoleTitle("Acunetix - Nuker")

    console.log(`
                        ${theme("╔═╗┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬─┐ ┬")}
                        ╠═╣│  │ ││││├┤  │ │┌┴┬┘
                        ╩ ╩└─┘└─┘┘└┘└─┘ ┴ ┴┴ └─`)
    console.log(`
    ${theme("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
    ${theme("┃")}  Github: ${theme("https://github.com/SklyerX")}                                 ${theme("┃")}
    ${theme("┃")}  Discord: ${theme("ba#6621")}                                                   ${theme("┃")}
    ${theme("┃")}  Exit: ${theme("CTRL + C")}                                                     ${theme("┃")}
    ${theme("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}\n\n`)
}

module.exports = changeTheme;