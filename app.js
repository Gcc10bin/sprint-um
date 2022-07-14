import readline from "readline"

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let arr = []
let pergunta = "Digite uma propriedade CSS: "

function perguntaCss(pergunta){
    rl.question(pergunta, (name) => {
        if (name === "sair") {
            console.log(arr.sort());
            rl.close();
        } else {
            arr.push(name);
            perguntaCss(pergunta)
        }
    })
};

perguntaCss(pergunta);