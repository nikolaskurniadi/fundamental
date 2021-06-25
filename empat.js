//485 hari

var days = parseInt(prompt("Silakan masukkan hari"))
var years = Math.floor(days / 360)
var daysLeft = days % 360
var months = Math.floor(daysLeft / 30)
var monthsLeft = daysLeft % 30
var weeks = Math.floor(monthsLeft / 7)
var weeksLeft = monthsLeft % 7

alert(`${days} = ${years} tahun, ${months} bulan, ${weeks} minggu, dan ${weeksLeft} hari`)