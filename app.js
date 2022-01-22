#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
import fs from "fs";
import request from "request";
import path from "path";
import ora from "ora";
import cliSpinners from "cli-spinners";
clear();

const prompt = inquirer.createPromptModule();

const questions = {
  type: "list",
  name: "actions",
  message: "what you want to do?",
  choices: [
    {
      name: `Send me an ${chalk.hex("f850dc").bold("Email")}?`,
      value: () => {
        open("mailto:sheyko.wk@gmail.com");
        console.log("\nDone, see you soon at inbox. \n");
      },
    },
    {
      name: `Download my ${chalk.hex("f850dc").bold("Resume")}?`,
      value: () => {
        open("https://github.com/SheykoWk/SheykoWk/cv.pdf");
        //   const loader = ora({
        //     text: "Downloading Resume",
        //     spinner: cliSpinners.material,
        //   }).start();
        //   let pipe = request("https://SheykoWk.github.io/static/cv.pdf").pipe(
        //     fs.createWriteStream("./sh3yk0-resume.html")
        //   );
        //   pipe.on("finish", () => {
        //     let downloadPath = path.join(process.cwd(), "sh3yk0-resume.html");
        //     open(downloadPath);
        //     loader.stop();
        //   });
      },
    },
    {
      name: "Just quit.",
      value: () => {
        console.log("See you soon :D.\n");
      },
    },
  ],
};

const data = {
  name: chalk.bold.hex("7c67ff")("Sahid Kick"),
  handle: chalk.white("@sh3yk0"),
  work: `${chalk.white("Web Developer Full-Stack")} ${chalk
    .hex("#2b82b2")
    .bold("Academlo")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.hex("7967fe")("DevSh3yk0"),
  github: chalk.gray("https://github.com/") + chalk.hex("fd78f5")("SheykoWk"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.hex("7967fe")("sh3yk0"),
  web: chalk.hex("fd78f5")("https://SheykoWk.github.io"),
  npx: chalk.red("npx") + " " + chalk.white("sh3yk0"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "#7967fe",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.actions());
