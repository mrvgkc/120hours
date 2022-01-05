//function tanımlama
//functıon yazıp isim vermeliyiz merve burda fonksiyonun ismi
//
function merve() {
    console.log('merve');//console merve ismini basıcak
    //fonksiyonu tanımlama işlemini yaptık şimdi kullanma işlemini yapıcaz
    //kullanma işlemi için önce fonksiyonu çağırmamız gerekiyor yoksa console yazmaz
}
merve();
merve();
merve();
merve();//fonksiyonu bir cok kez cağırabiliriz.

//
//bir değişken ismini fonksiyona atama 
const mervegkc =function() {
    console.log('mervegkc');
}
mervegkc();

//bir fonksiyonu tanımlamadan çağırabilir miyiz???

merve();//ilk önce fonksiyonu çağırdıksonra tanımladık
merve();
merve();
merve();
function merve() {//fonksiyonu tanımladık
    console.log('merve');
}

    //functıon espression olanlarda yok orada başlangıc atamasını yapamadınız diye error veriyor 
    //önce tanımlama gerekıyor