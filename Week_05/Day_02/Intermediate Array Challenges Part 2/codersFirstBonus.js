function codersFirst(arr) {
   let result = [];

   for(let i =0;i<arr.length;i++){
       if(arr[i] === 'Coders'){
        result.push(arr[i]);
       }
   }

   for(let i = 0; i<arr.length;i++){
       if(arr[i] !== 'Coders'){
           result.push(arr[i]);
       }
   }
   
   return result;
}

let example1 = codersFirst(['Doctors','Coders','Lawyers','Coders']);
let example2 = codersFirst(['Brokers','Bakers']);

console.log(example1);
console.log(example2);