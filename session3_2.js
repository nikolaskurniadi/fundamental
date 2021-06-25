var berat = parseInt(prompt(`Silakan masukkan BERAT badan ANDA (kg)`))
var tinggi = parseFloat(prompt(`Silakan masukkan TINGGI badan ANDA (m)`))
var imt = berat / Math.pow(tinggi,2)
    // alert(`Berat ${berat} kg & Tinggi ${tinggi} m`)


if (imt <18.5) {
    alert(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, BERAT BADAN ANDA KURANG!`)
    console.log(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, BERAT BADAN ANDA KURANG!`);
    
} else if (imt >=18.5 && imt <=24.9){
    alert(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, BERAT BADAN ANDA IDEAL!`)

} else if (imt >=25.0 && imt <=24.9){
    alert(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, BERAT BADAN ANDA BERLEBIH!`)

} else if (imt >=30.0 && imt <=39.9){
    alert(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, BERAT BADAN ANDA SANGAT BERLEBIH!`)

} else {
    alert(`Berat : ${berat} kg, Tinggi : ${tinggi} m\nIMT = ${imt}, ANDA OBESITAS`)
}

