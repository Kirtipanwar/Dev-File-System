let {helpFn} = require("./commands/help");
let {organizeFn} = require("./commands/organize");
let {viewFn} = require("./commands/view");

let input = process.argv.slice(2);

let cmd = input[0];

switch (cmd) {
    case "view":
        viewFn();
        break;
    case "organize":
        organizeFn();
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Wrong command. Enter help to see list of all the commands")
}