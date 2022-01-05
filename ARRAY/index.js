let isimler = ['merve','gökçe','elif'];
//console.log(isimler[1]);//birinci indexteki elemanı bastırı

isimler[1]='tuğçe';
//console.log(isimler[1]);

let yaslar=[18,25,50,3];
//console.log(yaslar[3]);

let rastgele=['merve','tuğçe',10,11];
//console.log(rastgele);
//console.log(rastgele.length);


//join ekleme işlemi gormektedir
let tireli = isimler.join('-');
console.log(tireli);

let virgullu = isimler.join(',')
console.log(virgullu);

let sira=isimler.indexOf('merve');
console.log(sira);

let ekle= isimler.concat(['cansu','aslı']);
console.log(ekle);

//push-bir diziye eleman eklemek için kullanılır
//pop son elemanı cıkarmak için kullanılır

let elemanekle=isimler.push('ezgi');
console.log(isimler);

isimler.pop();
console.log(isimler);

