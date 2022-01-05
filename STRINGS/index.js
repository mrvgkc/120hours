//console.log("merhaba dünya");


//let email="mervegokce@gmail.com";
//console.log(email);

//birleştirme

//let ad= "merve";
//let soyad ="gökçe";
//let adSoyad= ad + " " +soyad;
//console.log(adSoyad);

//karakter çekme 

//console.log(adSoyad[1])//string bir array gibi düşünüyor.birinci karakter sıfırıncı index

//kaç karakterden olusur
//console.log(adSoyad.length);
//11 karakter cunku bosluguda sayıyo
//if(adSoyad.length>0)
//{}

//methodlar
 //console.log(adSoyad.toUpperCase());
 //bütün karakterleri buyuk harf yapıyo
 //let kucukAdSoyad=adSoyad.toLocaleLowerCase();
 //hepsini kucuk harf yapıyo
 //console.log(kucukAdSoyad);
 //console.log(adSoyad);//normal hali

 //let index=adSoyad.indexOf("e");
 //console.log("e nin bulunduğu index:"+index);

 let adSoyad ="merve gökçe";

 //let son=adSoyad.lastIndexOf("e");
 //içerisine girilen karakterin en son kaçıncı indexte olfugunu soylıuo
//10.index
 //console.log(son);

 let bastanSona=adSoyad.slice(0,2);
 console.log(bastanSona);

 let bastanSonaSubstr=adSoyad.substring(3,5);
 //3.indexten basla 5.indexse kadar
 console.log(bastanSonaSubstr);

 let yerDegistir=adSoyad.replace('m','X');
 console.log(yerDegistir);
 //M GÖRDÜĞÜN  YERİ X YAP
 
 
 



