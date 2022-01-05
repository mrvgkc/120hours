//parametre bir değer olur bır değişken ismi olur
//fonksiyonun içerisine gönderip fonksiyonun içinde işlemleryapılacak

//const mervegkc= function(ad,soyad) {
   // console.log('ad:'+ad,'soyad:'+soyad);
//}
//mervegkc('merve','gökçe');


//eğer parametre yollamazsak yanı mervegkc nin iiçine herhangibirdeğer yollamazsak
//default olarak tanımladığımız değer olur
const mervegkc= function(ad='merve',soyad='gokce') {
    console.log('ad:'+ad,'soyad:'+soyad);
}
mervegkc();
mervegkc('meros','gokce');//parametreleri verirsek default değerini ezer ve
//parametre olarak vediklerimiz console yazılır
