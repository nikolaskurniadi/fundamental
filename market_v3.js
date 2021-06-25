
var qtyApel = 15
var qtyAnggur = 10
var qtyJeruk = 10


    
while(true){
    var jumlahApel = parseInt(prompt(`Masukkan jumlah APEL\nStok Apel : ${qtyApel}`))
    if (jumlahApel > qtyApel) {
        alert(`Permintaan Apel melebihi jumlah stock!`)
    } else {
            break
    }
    
}
while(true){
    var jumlahAnggur = parseInt(prompt(`Masukkan jumlah ANGGUR\nStok Anggur : ${qtyAnggur}`))
    if (jumlahAnggur > qtyAnggur) {
        alert(`Permintaan Anggur melebihi jumlah stock!`)
    } else {
            break
    }
}
while(true){
    var jumlahJeruk = parseInt(prompt(`Masukkan jumlah JERUK\nStok Jeruk : ${qtyJeruk}`))
    if (jumlahJeruk > qtyJeruk) {
        alert(`Permintaan Jeruk melebihi jumlah stock!`)
    } else {
            break
    }
}

var apel = 10000
var anggur = 15000
var jeruk = 20000

var totalApel = apel * jumlahApel
var totalAnggur = anggur * jumlahAnggur
var totalJeruk = jeruk * jumlahJeruk

var totalan = totalApel + totalAnggur + totalJeruk

//Memunculkan alert di browser
while(true){
    var totalBelanja = parseInt(
        prompt(`
            Detail Belanja:

            Apel: ${jumlahApel} x ${apel} = ${totalApel}
            Anggur: ${jumlahAnggur} x ${anggur} = ${totalAnggur}
            Jeruk: ${jumlahJeruk} x ${jeruk} = ${totalJeruk}

            Total: ${totalan}
        `)
    )


//menerima uang dari customer
    var margin = Math.abs(totalBelanja - totalan)

    if (totalBelanja > totalan) {

        alert(`Uang kembalian Anda sebesar ${margin}`)
        break

    } else if (totalBelanja < totalan) {

        alert(`Maaf uang Anda kurang ${margin}`)

    
    } else {

        alert(`Terima Kasih`)

        break
    }
}
