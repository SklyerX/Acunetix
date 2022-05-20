// Required Modules
const consoleTitle = require("console-title");
const input = require("input");
const chalk = require("chalk");

// Our Modules
const gui = require("./module/gui.js");
const banMembers = require("./lib/banMembers.js");
const kickMembers = require("./lib/kickMembers.js");
const pruneMembers = require("./lib/pruneMembers.js");
const deleteRoles = require("./lib/deleteRoles.js");
const deleteChannels = require("./lib/deleteChannels.js");
const createRoles = require("./lib/createRoles.js");
const createChannels = require("./lib/createChannels.js");
const nukeServer = require("./lib/nukeServer.js");
const scrapeInfo = require("./lib/scrapeInfo.js");
const changeTheme = require("./lib/changeTheme.js");
const viewCredits = require("./lib/viewCredits.js");

// Application
console.log(`${chalk.yellow("[")}${chalk.blueBright("#")}${chalk.yellow("]")} Loading..`)

async function main() {
    console.clear();
    
    gui();
    consoleTitle("Acunetix - Home")
        
    const question = await input.text(`${chalk.magenta(">")} Choice: `)

    if (question === "1") {
        banMembers();
    } else if (question === "2") {
        kickMembers();
    } else if(question === "3") {
        console.log("Might not work..")
        pruneMembers();
    } else if(question === "4") {
        deleteRoles();
    } else if (question === "5") {
        deleteChannels();
    } else if (question === "6") {
        createRoles();
    } else if (question === "7") {
        createChannels();
    } else if(question === "8") {
        nukeServer();
    } else if(question === "9") {
        scrapeInfo();
    } else if(question === "0") {
        changeTheme();
    } else if(question === "C" || question === "c") {
        viewCredits();
    } else if(question === "X" || question === "x"){
        console.log("Exiting Tool..")
        process.exit();
    } else {
        console.log("Invalid option... Trying again 2 seconds");
        setTimeout(() => {
            main()
        }, 2000)
    }
}

module.exports = main;

process.on('unhandledRejection', (error) => {
    console.log(`${error.stack}`)
  });
  process.on("uncaughtException", (err, origin) => {
    console.log(`${err.stack}`)
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(`${err.stack}`)
  });
  process.on('beforeExit', (code) => {
    console.log(`${code}`)
  });
  process.on('exit', (code) => {
    console.log(`${code}`)
  });
  process.on('multipleResolves', (type, promise, reason) => {
  });

main();