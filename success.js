var type =[];
var counter = 0;

function tabulateAnswers(){
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++){
        if (choices[i].checked){
            if (choices[i].value == 'longevity'){
                type.push('longevity');
                counter = counter+1;
                if(counter>=2){break;}
            }
            if (choices[i].value == 'stability'){
                type.push('stability');
                counter = counter+1;
                if(counter>=2){break;}
            }
            if (choices[i].value == 'satisfaction'){
                type.push('satisfaction');
                counter = counter+1;
                if(counter>=2){break;}
            }
            if (choices[i].value == 'salary'){
                type.push('salary');
                counter = counter+1;
                if(counter>=2){break;}
            }
        }
    }
}