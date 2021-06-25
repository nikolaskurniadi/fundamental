var stars = ""
var rows = 10

//Loop i untuk membuat baris (\n)
//Loop j bertugas untuk menambahkan bintang

for (var i = 0 ; i < rows ; i++){

    for (var j = 0 ; j <= i ; j++){
        stars += " * "
    }

    stars += "\n"
}
console.log(stars);