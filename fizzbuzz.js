var fizzBuzz = parseInt(prompt(`Masukkan Angka FizzBuzz`))


for(var i = 1 ; i <=fizzBuzz ; i++){
    
    if(i %3 == 0 && i % 5 ==0){
        console.log(`FizzBuzz`); 
        continue
    }
    if(i % 3 == 0){
        console.log(`Fizz`);
        continue
    }

    if(i % 5 == 0){
        console.log(`Buzz`);
        continue
    }

    
    console.log(i)
}