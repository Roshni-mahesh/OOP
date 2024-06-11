import inquirer from "inquirer";

import chalk from "chalk";

class person{
    private _personality: string ;
    constructor(){
        this ._personality =  'mystry';
    }

    UserInput (input:string) {
        if (input.includes ('Talk to other about yourself openly')) {
            this ._personality = 'happly';
        }else if(input.includes('keep your word to yourself')) {
            this ._personality = 'talk rude'
        }
    }
get personality(){
    return this._personality
}
}

class main {
    public async main (){
        const ans = await inquirer.prompt({
            type:'list',
            name:'choices',
            message: chalk.yellow('tell your behaviour'),
            choices:[
                '1:Talk to orhter about my self',
                '2:keep quite and dont ask for question'
            ]
        })
        let myperson = new person ()

        myperson.UserInput(ans.choices);

        console.log('you are ${myperson.personality}')
    }
}
const myObject = new main();
myObject.main();
