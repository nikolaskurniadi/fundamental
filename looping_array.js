var categories = ['Beruang' , 'Anjing' , 'Kucing' , 'Semut' , 'Bebek' , 'Gajah']
var init = 'Terdapat 5 jenis hewan yang uwu:\n'

for (var i = 0 ; i < categories.length ; i++){

    init += categories[i] + '\n'

}

console.table(init);