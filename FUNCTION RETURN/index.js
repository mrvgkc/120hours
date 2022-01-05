

//return ile fonksiyonun içinden sonucu alıp fonksiyon dısında 
//o sonucu kullanıcaz


const karealani =function (kenar) {
  //  let alan=kenar**2//karesini aldık
    //console.log(alan);
//return alan;
return kenar**2;
}
const sonuc=karealani(6);
console.log(sonuc);
//console.log(alan); global olarak tanımlamadık oyuzden hata alırız
//alanı global olarak atarsak console calısır 
