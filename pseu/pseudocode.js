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