class QuestionPrinter{
    id = 1;
    print(fn,...args){
        console.log(`Questão ${this.id}: `, fn(...args),  "\n");
        this.id ++;
    }
}

export class Answer {
    fn;
    testParams;
    constructor(fn,...testParams){
        this.fn = fn;
        this.testParams = testParams;
    }
}

class batchPrinter{
    batchPrint(answers){
        answers.forEach(answer => {
            printer.print(answer.fn,...answer.testParams)
        })
    }
}

const printer = new QuestionPrinter();

export const answerPrinter = new batchPrinter();

// answerPrinter.batchPrint([new Answer((a,b) => a + b,10,15),new Answer((a,b) => a - b,10,15)])

