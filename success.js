var type =[];
var typeindex = 0;

//var counter = 0;

function tabulateAnswers(){
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++){
        if (choices[i].checked){
            if (choices[i].value == 'longevity'){
                type.push('longevity');
//                counter = counter+1;
//                if(counter>=2){break;}
            }
            if (choices[i].value == 'stability'){
                type.push('stability');
//                counter = counter+1;
//                if(counter>=2){break;}
            }
            if (choices[i].value == 'satisfaction'){
                type.push('satisfaction');
//                counter = counter+1;
//                if(counter>=2){break;}
            }
            if (choices[i].value == 'salary'){
                type.push('salary');
//                counter = counter+1;
//                if(counter>=2){break;}
            }
        }
    }
    if (type.includes("salary")&& type.includes("satisfaction")){typeindex = 1}
    if (type.includes("salary")&& type.includes("stability")){typeindex = 2}
    if (type.includes("longevity")&& type.includes("stability")){typeindex = 3}
    if (type.includes("longevity")&& type.includes("satisfaction")){typeindex = 4}
    if (type.includes("salary")&& type.includes("longevity")){typeindex = 5}
    if (type.includes("stability")&& type.includes("satisfaction")){typeindex = 6}

    }
}

if (typeindex == 1) { 
      answerbox.innerHTML = "salary+satisfaction";
      answerbox.style.backgroundColor="green";
      answerbox.style.fontSize='24px';
      cityscape.style.opacity='1';
      cityscape.style.position
     }