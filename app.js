const quizData=[{
    'question':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},{
    'question':'what year was JavaScript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b',
},{
    'question':'What does CSS stands for?',
    'a':"Hypertext Markup Language",
    'b':"Cascading Style Sheet",
    'c':'Jason object Notation',
    'd':'Helicopters Terminals Motornoats lamborginis',
    'correct':'b',
}
];
let index=0;
let total=quizData.length;
let correct=0;
let incorrect=0;
const questionBox=document.getElementById("questionBox")
const allInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(total===index){
        return quizEnd();
    }
    reset()
    const data=quizData[index]
    questionBox.innerText=`${index+1}) ${data.que}`
    allInputs[0].nextElementSibling.innerText=data.a;
    allInputs[1].nextElementSibling.innerText=data.b;
    allInputs[2].nextElementSibling.innerText=data.c;
    allInputs[3].nextElementSibling.innerText=data.d;

}

document.querySelector("#submit").addEventListener(
    "click",
    function(){
    const data=quizData[index]
    const ans=getAnswer()
        if(ans===data.correct){
            correct++;
        }else{
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)
    

const getAnswer=()=>{
    let ans;
    allInputs.forEach(
        (inputEl)=>{
            if(inputEl.checked){
                ans= inputEl.value;
            }
        }
    )
    return ans;
}
const reset=()=>{
    allInputs.forEach(
        (input)=>{
            inputEl.checked=false;
        }
    )
}

const quizEnd=()=>{
    document.getElementsByClassName("container")[0].innerHTML=`
    <div class="col">
      <h3 class="w-100">Hii,you've scored ${correct}/{total}</h3>
    </div>
    `
}

loadQuestion(index);