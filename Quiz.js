const quizData = [
    {
        question : 'How old is Florin?',
        a : '10',
        b : '17',
        c : '26',
        d : '110',
        correct:'c'
    },{
        question : 'What is the most used programming language in 2019?',
        a : 'Java',
        b : 'C',
        c : 'Python',
        d : 'Javascript',
        correct:'d'

    },{
        question : 'who is the Prisident of US?',
        a : 'Florin Pop',
        b : 'Donald trump',
        c : 'Ivan Saldono',
        d : 'Mihai Andrei',
        correct:'b'

    },{
        question : 'What does Html stand for ?',
        a : 'Hypertext Markup Language',
        b : 'Cascading Style Sheet',
        c : 'Jason Object Notation',
        d : 'Helicopers Terminals Motorboats Lamborginis',
        correct:'a'
    },{
        question : 'What years was Javascript ?',
        a : '1996',
        b : '1995',
        c : '1994',
        d : 'none of the above',
        correct:'d'

    }

];
const questionEl = document.getElementById
('questiion');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
 const currentQuizData = quizData[currentQuiz];

 question.El.innerText =

    currentQuestion++;
}

