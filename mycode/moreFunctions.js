let sample = 5;


function firstFunc(){
    sample = sample + 5;
    console.log(sample);
}

function secondFunc(){
    sample = sample - 5;
    console.log(sample);
}

function thirdFunc(){
    sample = sample * 3;
    console.log(sample);
}

secondFunc(); // log 0
firstFunc(); // log 5
thirdFunc(); // log 15