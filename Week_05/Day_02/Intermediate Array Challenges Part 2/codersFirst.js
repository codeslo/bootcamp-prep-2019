function codersFirst(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Coders') {
            // (arr.splice(i, 1));
            arr.unshift(arr.splice(i,1)[0]);
        }
    }

    if (arr[0] !== 'Coders') {
        arr.unshift('Coders');
    }
    return arr;
}

let example = codersFirst(['Doctors','Lawyers','Coders']);
let example2 = codersFirst(['Brokers','Bakers']);

console.log(example);
console.log(example2);