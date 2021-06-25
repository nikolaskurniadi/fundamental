var distance = 120
var velocityA = 60
var velocityB = 40

var  startTimeHour = 8
var startTimeMinute = 0

var ketemuan = distance / (velocityA + velocityB)
var setingMenit = ketemuan * 60

var jam = startTimeHour + (Math.floor(ketemuan))
var menit = startTimeMinute + setingMenit % 60

console.log(`Mereka akan bertemu pada pukul ${jam}:${menit}`)