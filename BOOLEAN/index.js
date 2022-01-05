//console.log(true,false,'true','false');

let email="mervegokce1253@gmail.com";

let adSoyad=['mero','aslı','tugce'];
let varmi2=adSoyad.includes('t');
//console.log(varmi2);//cıktısı false olur cunku t bir eleman değil
//tugce merve aslı bırer elemandır.
let varmi3=adSoyad.includes('mero');
//console.log(varmi3);//cıktısı true 


let varmi=email.includes('@');
//console.log(varmi);
//includes içeriyor mu diye sooruyo

//true false ler en cok karsılastırma operatorlerınde kullanılır

let yas=20;

console.log(yas==20);//== eşit mi diye sorar.dogruysa true değilse false
console.log(yas==34);
console.log(yas!=25);//!=esit değilmi
console.log(yas>50);//false
console.log(yas<25);//true
console.log(yas>=20);//true
console.log(yas<=20);//true

let ad='merve';
console.log(ad=='merve');
console.log(ad=='Merve');
console.log(ad>'Merve');//true cıkar cunku buyuk harfler kucuk harflerden her zaman daha buyuktur.
console.log(ad>'aslı');//a harfi m den once gelir 

