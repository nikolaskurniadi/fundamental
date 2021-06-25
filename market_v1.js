var jumlahApel = parseInt(prompt(`Masukkan jumlah APEL`))
var jumlahAnggur = parseInt(prompt(`Masukkan jumlah ANGGUR`))
var jumlahJeruk = parseInt(prompt(`Masukkan jumlah JERUK`))

var apel = 10000
var anggur = 15000
var jeruk = 20000

var totalApel = apel * jumlahApel
var totalAnggur = anggur * jumlahAnggur
var totalJeruk = jeruk * jumlahJeruk

var totalan = totalApel + totalAnggur + totalJeruk

//Memunculkan alert di browser
alert(`
    Detail Belanja:

    Apel: ${jumlahApel} x ${apel} = ${totalApel}
    Anggur: ${jumlahAnggur} x ${anggur} = ${totalAnggur}
    Jeruk: ${jumlahJeruk} x ${jeruk} = ${totalJeruk}

    Total: ${totalan}
`)

parseInt(prompt('Masukkan jumlah uang Anda'))