// Points : 85 - 100 = A
// Points : 75 - 84 = B
// Points : 60 - 74 = C
// Points : 0 - 59 = D
// Points : null = A

var nilaiAkhir = "alpha"
var grade

if (nilaiAkhir >= 85 && nilaiAkhir <= 100){
    grade = "A"

} else if (nilaiAkhir >= 75 && nilaiAkhir <= 84){
    grade = "B"

} else if (nilaiAkhir >= 60 && nilaiAkhir <= 74){
    grade = "C"

} else if (nilaiAkhir >= 0 && nilaiAkhir <= 59){
    grade = "D"

} else {
    grade = "F"
}

    console.log(`Nilai : ${nilaiAkhir}\nGrade = ${grade}`);