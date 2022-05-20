const consoleTitle = require("console-title");
const gui = require("../module/gui");
const chalk = require("chalk");
const input = require("input");
const fs = require("fs");

const purpTheme = {
    theme: "default"
}

const yellowTheme = {
    theme: "yellow"
}

const redTheme = {
    theme: "red"
}

async function changeTheme() {
    console.clear();
    consoleTitle("Acunetix - Nuker")
    gui()

    const query = await input.select([
        "Dark + Purple",
        "Dark + Yellow",
        "Dark + Red"
    ]);

    if(query === "Dark + Purple") {
        const savedData = async(purpTheme) => {
            const finished = (error) => {
                if(error) {
                    console.error(error);
                    return;
                }
            }

            const jsonData = JSON.stringify(purpTheme, null, 2);
            await fs.writeFileSync("theme.json", jsonData, finished)
            console.log("Theme updated successfully");
            process.exit();

        }

        savedData(purpTheme)
    } else if(query === "Dark + Yellow") {
        const savedData = async(yellowTheme) => {
            const finished = (error) => {
                if(error) {
                    console.error(error);
                    return;
                }
            }

            const jsonData = JSON.stringify(yellowTheme, null, 2);
            await fs.writeFileSync("theme.json", jsonData, finished)
            console.log("Theme updated successfully");
            process.exit();

        }

        savedData(yellowTheme)
    } else if(query === "Dark + Red") {
        const savedData = async(redTheme) => {
            const finished = (error) => {
                if(error) {
                    console.error(error);
                    return;
                }
            }

            const jsonData = JSON.stringify(redTheme, null, 2);
            await fs.writeFileSync("theme.json", jsonData, finished)
            console.log("Theme updated successfully");
            process.exit();

        }

        savedData(redTheme)
    }
}

module.exports = changeTheme;