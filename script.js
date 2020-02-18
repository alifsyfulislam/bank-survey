var surveyField = document.querySelector('.survey_filed');
var startBtn = document.querySelector('.start_btn');
var slide_1 = document.querySelector('.slide_1');
var slide_2 = document.querySelector('.slide_2');
var slide_3 = document.querySelector('.slide_3');
var slide_4 = document.querySelector('.slide_4');
var next_1 = document.querySelector('.next_1');
var next_2 = document.querySelector('.next_2');
var next_3 = document.querySelector('.next_3');
var values = [];

var firstError = document.querySelector('.myError');
var secondError = document.querySelector('.myError1');
var thirdError = document.querySelector('.myError2');

startBtn.addEventListener('click',()=>{
    surveyField.classList.remove("show");
    surveyField.classList.add("hide");
    slide_1.classList.remove("hide");
    slide_1.classList.add("show");
});

next_1.addEventListener('click',()=>{
    var ans_1 = document.querySelectorAll('input[name="ans_1"]:checked');
    values.push( ans_1.length>0? ans_1[0].value: null);
    console.log(values);
    if (values[0] == null){
        values.pop();
        console.log(values);
        firstError.innerHTML = 'choose one at least!'
    }else{
        slide_1.classList.remove("show");
        slide_1.classList.add("hide");
        slide_2.classList.remove("hide");
        slide_2.classList.add("show");
    }
});

next_2.addEventListener('click',()=>{
    var ans_2 = document.querySelectorAll('input[name="ans_2"]:checked');
    values.push(ans_2.length>0? ans_2[0].value: null);
    console.log(values);
    if (values[1] == null){
        values.pop();
        console.log(values);
        secondError.innerHTML = 'choose one at least!'
    }
    else{
        slide_2.classList.remove("show");
        slide_2.classList.add("hide");
        slide_3.classList.remove("hide");
        slide_3.classList.add("show");
    }
});

next_3.addEventListener('click',()=>{
    var ans_3 = document.querySelectorAll('input[name="ans_3"]:checked');
    values.push(ans_3.length>0? ans_3[0].value: null);
    console.log(values);
    if (values[2] == null){
        values.pop();
        console.log(values);
        thirdError.innerHTML = 'choose one at least!'
    }
    else{
        slide_3.classList.remove("show");
        slide_3.classList.add("hide");
        slide_4.classList.remove("hide");
        slide_4.classList.add("show");
    }
});








