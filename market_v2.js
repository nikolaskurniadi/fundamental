var jumlahApel = parseInt(prompt(`Masukkan jumlah APEL`))
var jumlahAnggur = parseInt(prompt(`Masukkan jumlah ANGGUR`))
var jumlahJeruk = parseInt(prompt(`Masukkan jumlah JERUK`))

var qtyApel = 15
var qtyAnggur = 10
var qtyJeruk = 10

if (jumlahApel >= qtyApel) {
    alert(`Permintaan Apel melebihi jumlah stock, quantity akan terisi sebanyak ${qtyApel}`)
    jumlahApel = qtyApel

} if (jumlahAnggur >= qtyAnggur) {
    alert(`Permintaan Anggur melebihi jumlah stock, quantity akan terisi sebanyak ${qtyAnggur}`)
    jumlahAnggur = qtyAnggur

} if (jumlahJeruk >= qtyJeruk) {
    alert(`Permintaan Jeruk melebihi jumlah stock, quantity akan terisi sebanyak ${qtyJeruk}`)
    jumlahJeruk = qtyJeruk
}

var apel = 10000
var anggur = 15000
var jeruk = 20000

var totalApel = apel * jumlahApel
var totalAnggur = anggur * jumlahAnggur
var totalJeruk = jeruk * jumlahJeruk

var totalan = totalApel + totalAnggur + totalJeruk

//Memunculkan alert di browser
var totalBelanja = parseInt(prompt(`
    Detail Belanja:

    Apel: ${jumlahApel} x ${apel} = ${totalApel}
    Anggur: ${jumlahAnggur} x ${anggur} = ${totalAnggur}
    Jeruk: ${jumlahJeruk} x ${jeruk} = ${totalJeruk}

    Total: ${totalan}
`))

//menerima uang dari customer
var margin = Math.abs(totalBelanja - totalan)

if (totalBelanja > totalan) {

    alert(`Uang kembalian Anda sebesar ${margin}`)
    
} else if (totalBelanja < totalan) {

    alert(`Maaf uang Anda kurang ${margin}`)
    
} else {

    alert(`Terima Kasih`)
}