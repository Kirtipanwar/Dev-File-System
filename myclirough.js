//commands --> view, tree, flat
//organize --> same folder
//input
let input=process.argv.slice(2);
console.log("Input is ",input);
//
//<node, mycli.js, view, dirname, mode>
//node mycli.js organize -/foldername
//node mycli.js help

let input=process.argv.slice(2);
let cmd=input[0];
switch(cmd){
    case "view":
        //console.log("view command executed");
        viewExecuter();
        break;
    case "organise":
        //console.log("organise command executed");
        organiseExecuter();
        break;
    case "help":
        //console.log(`List of all the commands:
                     //1. view <dir-na> --tree
                     //2. view <dir-na> --flat
                     //3. organise <dir-na>/_
                     //4. help
                    // `)
        helpExecuter();
        break;
}
//multiple line strings cannot be used in js --> it can be used using
function HelpExecuter(){

}

function ViewExecuter(){

}

function OrganizeExecuter(){

}