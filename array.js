// var random = ["blue" , 23 , "reuw" , 3.15]
//     console.table(random);

// console.log('number :' + random[1]);

var things = ['mereka' , 'sartini' , 'wef']

// things[3] = 'ayunda'
// things[5] = 'mayabarata'

// console.log(things);
// console.log(`length pada array adalah : ${things.length}`);


//PUSH : Menambahkan value pada index terakhir
//POP : Menghapus value pada index terakhir (1 kali proses)
//UNSHIFT : Menambahkan value pada index PERTAMA
//SHIFT : Menghapus value pada index PERTAMA

// things.push('jacket' , 'manusia')

// things.pop()
// things.unshift('hujan' , 'lembayung')
// things.shift()
//     console.table(things);

// things.splice(1,2,"kamu","mereka")

// delete things[1]

var fruits = ['Apple' , 'Banana' , 'lemon' , 'watermelon']
var fruitSlice = fruits.slice(1)

console.table(fruitSlice);

/* Method yang mengubah nilai asli (tidak perlu tambah var)
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. sort
    7. reverse


    Method yang tidak mengubah nilai asli (harus tambah var)
    1. slice
    2. includes
    3. join
    4. concat
    
*/

// var colors = ['Red' , 'Green' , 'Blue' , 'Purple' , 'Yellow']
// var animals = ['Tiger' , 'Elephant' , 'Cat' , 'Liger']
// var colRed = colors.includes("Red")

//     console.log(colRed);

// var colRed = colors.indexOf("Yellow")
//     console.log(colRed);

// var sortColors = colors.reverse ()

//     console.table(sortColors);

// var joinDash = colors.join(" - ")
//     console.log(joinDash);

// var one = things.concat(colors, animals)
//     console.table(one)

//Membuat array 2 dimensi

// var barang = [
//     ['blue pen' , 'red pen'],
//     ['analog clock' , 'digital clock'],
//     ['badminton shoes' , 'futsal shoes'],

// ]
// barang.splice(0,1)

// console.table(barang)

var categories = ['Horror' , 'Sci-fi' , 'Thriller' , 'Adventure' , 'Animation']
var listCat = 'Terdapat 5 kategori film :\n'

for (var i = 0 ; i <4 ; i++) listCat += categories [i] + '\n' 
        console.log(listCat);