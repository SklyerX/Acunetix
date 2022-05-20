const chalk = require("chalk");
const fs = require("fs");
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
    console.log("An invalid theme has been provided! please use OPTION: 0 to fix this!")
}

function gui() {
    console.clear();
    console.log(`
                        ${theme("╔═╗┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬─┐ ┬")}
                        ╠═╣│  │ ││││├┤  │ │┌┴┬┘
                        ╩ ╩└─┘└─┘┘└┘└─┘ ┴ ┴┴ └─`)

    if(theme === chalk.white) console.log("An invalid theme has been provided! please use OPTION: 0 to fix this!")
    console.log(`
    ${theme("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
    ${theme("┃")}  [${theme("1")}] Ban Members    ${theme("┃")}  [${theme("5")}] Delete Channels  ${theme("┃")}  [${theme("9")}] Scrape Info      ${theme("┃")}
    ${theme("┃")}  [${theme("2")}] Kick Members   ${theme("┃")}  [${theme("6")}] Create Roles     ${theme("┃")}  [${theme("0")}] Change Theme     ${theme("┃")}
    ${theme("┃")}  [${theme("3")}] Prune Members  ${theme("┃")}  [${theme("7")}] Create Channels  ${theme("┃")}  [${theme("C")}] View Credits     ${theme("┃")}
    ${theme("┃")}  [${theme("4")}] Delete Roles   ${theme("┃")}  [${theme("8")}] Nuke Server      ${theme("┃")}  [${theme("X")}] Exit             ${theme("┃")}
    ${theme("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}\n\n`)
}

module.exports = gui;
