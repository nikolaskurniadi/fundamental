var x = "Hello World!"

// Banyak character pada strings
var resultOne = x.length
    console.log(resultOne);

// Mencari index kata dari sebuah strings
// index dimulai dari 0 
var resultTwo = x.indexOf("l")
    console.log(resultTwo);

// Mengambil character dari strings
var resultThree = x.substr(3, 6)
    console.log(resultThree);

// Index awal dan akhir
var resultFour = x.slice(1,4)
    console.log(resultFour);

// String menjadi Array
var resultFive = x.split(" ")
    console.log(resultFive);

//UpperCase dan LowerCase

    var y = "hello"
var z = "WORLD"

var resultSix = y.toUpperCase()
    console.log(resultSix)

var resultSeven = z.toLowerCase()
    console.log(resultSeven);

// Me-replace karakter dengan karakter lain
// g means global
var resultEight = x.replace(/l/g, 'n')
    console.log(resultEight);

// Mengetahui apakah di dalam string ada karakter tersebu
    console.log(x.includes("World"));
    console.log(x.includes("world"));
    
