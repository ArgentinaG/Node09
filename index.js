const questions = [

];

function writeToFile(fileName, data) {

}

function init() {

    init();

    const fs = require("fs");
    const axios = require("axios");
    const inquirer = require("inquirer");

    inquirer.prompt({
        message: "Enter your GitHub username:",
        name: "username"
    })
        .then(function ({ username }) {
            const queryUrl = `https://api.github.com/users/${username}`));

    axios.get(queryUrl).then(function (res) {
        const repoNames = res.data.map(function () {
            return repo.name;
        });

        const repoNamesStr = repoNames.join("\n");

        fs.writeFile("repos.txt", repoNamesStr, function (err) {
            if (err) {
                throw err;
            }

            console.log(`Saved ${repoNames.length} repos`);
        });
    });
});