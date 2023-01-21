const chalk=require('chalk');

/*1*/   console.log(chalk.blue('Hello world!'));
/*2*/   console.log(chalk.blue.underline('Hello world!'));
/*3*/   console.log(chalk.blue.underline.italic('Hello world!'));
/*4*/   console.log(chalk.blue.italic.underline('Hello world!'));
/*5*/   console.log(chalk.blue.italic.underline.inverse('Hello world!'));