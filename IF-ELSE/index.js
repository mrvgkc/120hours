const yas=20;
if(yas>18)
{
    //console.log("18 yasından buyuktur");

}
const adSoyad=["merve","gökçe","tugce"];

if(adSoyad.length>2){
   // console.log("iştebenim öğrencilerim");
}
const sifre ="sdsd";

if(sifre.length>=8){
    console.log("sifre yeterince uzun");
}
else{
    //console.log("sifreyi yeniden giriniz");
}


//const yeniSifre="dasd";
//if(yeniSifre.length>=12){
    //console.log("sifre güçlü");
//}
//else if(yeniSifre.length>=8){
//console.log("sifre yeterli");
//}
//else{
    //console.log("sifreyi yeniden giriniz");
//}


//ve -veya -not kullanımları(&&-)
const yeniSifre="sccsdc!d";
//if(yeniSifre.length>=12 && yeniSifre.includes("!")){
   if(yeniSifre.length>=12 && yeniSifre.includes("!")){
       console.log("sifre baya güçlü");
   }
//console.log("sifre baya güçlü");
//}

else if(yeniSifre.length>=8){
console.log("sifre yeterli");
}
else{
    console.log("sifreyi yeniden giriniz");
}

const kontrol=false;
if(!kontrol){
    console.log("kontol başarılı");
    
}
//break continue

const notlar=[15,45,32,0,100,90,7];
for(let i =0;i<notlar.length;i++){

    if (notlar[i]===32) {
        continue;//32 console de cıkmyacacak
    }
    console.log(notlar[i]);

if(notlar[i]===100){
    console.log("bravo en yüksek notu sen aldın");
    break;//90 ve 7 yazılmaycak cunku break kullanıldı 
}








}
