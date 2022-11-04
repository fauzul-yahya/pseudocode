// tugas nomer 1
function menghitungluaspersegipanjang (panjang, lebar ) {
    let luas = panjang * lebar ;
    return luas
}
console.log(menghitungluaspersegipanjang(25, 15));


//tugas nomer 4
let r = 10;
let luasLingkaran = Math.PI * (r * r);

console.log(luasLingkaran);



//tugas nomer 3
for(var i=1; i<=5;i++){
    if(i%2 !=0){
          console.log(i, "ini bilangan ganjil")

    }else{
      console.log(i, "ini bilangan genap")
    }
  }


//tugas nomer 2
var x, y, jam, menit, detik,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  x     = input.value;
  y     = x % 3600;
  jam   = x / 3600;
  menit = y / 60;
  detik = y % 60;
  
  result.innerHTML = Math.floor(jam) + ' Jam ' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik ';
});


//tugas nomer 5

var a = 100;
var b = 75;
var c = 85;
var d = 90;

if ( a>b, a > d & a>c ){
  console.log("terbesar " + a )
}else if (b>a, b > d & b>c){
  console.log( "terbesar " + b )
}else if(c > a, c > b & c > d ){
  console.log("terbesar " + c )
}else{
    console.log("terbesar"+ d)
}
if (a<b, a < d & a<c){
  console.log("terkecil " + a)
}else if (b<a, b < d & b<c){
  console.log("terkecil " + b)
}else if(c < a, c < b & c < d ){
  console.log("terkecil " + c)
}else {console.log("terkecil"+d)
}
function rata_rata(){
   var rata_rata = (a+b+c+d)/4
   return rata_rata
}
console.log("ini rata ratanya "+rata_rata(a, b, c, d))





