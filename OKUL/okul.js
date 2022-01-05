let nmm=[1,2,false];
console.log(nmm.includes(0));

let string_sayi= [1,2,3,"bir"];
let aaa = string_sayi.toString();//hepsini stringe convert ediyor

let j= [1,2,3,4];
let nnnn = j.join("-");
//join array arasındakı virgülleri - tire yapar
console.log(nnnn);//cıktısı:1-2-3-4

let arr_isim=["ali","ahmet","ayse"];

function blala(){
    return 1;
}
arr_isim.forEach(item=>console.log(item));
//callbackfn:bir metoda parametre olarak gonderilen metoda denir.***
//arrowfunction:fonksıyonu function function diye fiye tekrar etmesin 
//kod satırlarını azaltmak için kullanılır (item=>item)


//find:ARRAY İÇİNDEKİ OBJECTLERDEN O KAYDI ILK SAĞLAYANI GETİRİYOR


let userss=[
{id:1, name:"ali"},
{id:1, name:"aliii"},
{id:2, name:"ahmet"},
{id:3, name:"mehmet"},
]

let res_find=userss.find(e=>e.id==1);
//id=1 ilk gordugu kaydı getireicek
//çıktısı:{id:1, name:"ali"}
console.log(res_find);

//some:şartı saglayanların herhangibirinde kayıt varsa true döndürür.
//some içerisinde sart ister 
let sayii = [5,8,3,1]
let ssss = sayii.some(x=>x > 3);//3ten buyuk kayıt varmı
//let inn= sayii.includes(5);
console.log(ssss);//cıktısı true 
let ev = sayii.every(x=>x >3);
//every de bütün kayıtlara bakıyo ve hepsinin sarta uymasını istiyor
//yanı hepsi 3 ten buyuk olmalı 

//filter kaç tane 1 varsa onları getireecek
//let kkk= userss.filter(e=>e.id==1);
//console.log(kkk);

//
//'ab';
//'a';
//'abcd';
//iki ve tekse karaktere kadar olanları dondursun , 2 den fazla olanları da basından 2 sonundan 2 tane alarak dondursun
//'abcdefg';

//let mer=['a','ab','abcdefg']; 

//const newStr= (str) =>str.lenght<2? str: str.slice(0,2)+ str.slice(-2);

//bu bir tek satırlık bır functıon

//nexstr fonksıyonun ısmı str parametre 

//'abcd';yarısını dondur
//'' bu bos bunu 

//const newStr= (str) => str.lenght<=0? "hataa": str.slice(0,str.lenght/2);


//verilen stringin ilk harfini al diğeri ile birleştir
//bc  cd al a ve b yi atla 
//const concat = (str1,str2) => str1.slice(1) +str2.slice(1);

//2 tane number bu numberlardan hangsi 100e en yakın 
//const near = (num1,num2) => (100-num1)<(100-num2)? num1:chars

//chars('alooo','o');
 //o kelimesi alooo nun içinde kaç tane var , 2 ve 4 arasında ise true döndür

 
//const charsCount= (str,char) => str.splice('').filter(x=> x ===char).length;
//ilk kaç tane oldugunu veriyor

//const resChar= (str,char) => charsCount(str,char) => charsCount(str,char)>=2
//&&charsCount(str,char)<=4;
//2 ve 4 arasında kaç tane var onu veriyor

//dizide kaç tane cift sayı var nasıl buluruz

//[1,2,3,4,5,6,7,8]

//const count = (num) => num.filter(x=> x % 2 === 0).length;


//fırebase bakabilirsın apı için : 
//json formatında 
//get post bunları kullanıcaz


// map ile dizinin içindeki bütün elemanlara ulaşabiliyoruz burda uzunluklarını alıyor
let uzunluk = ["mustafa","ahmet"].map(item=> item.length);
console.log(uzunluk);

//splitt bize dizi döndürür mustafa stringini tek tek harflere ayırır.
let splitt= "mustafa";
let aaabb= splitt.split('');
console.log(aaabb);



let aaarr= [1,2,3,4,5];

//reduce de iki değer alıyor bır baslangıc değerı atıyoruz
let bbbb=aaarr.reduce((sum , current)=> sum + current,0);
console.log(bbbb);



///üçnokta --ANLAMADIM!!!!!!!!!!!!
let tessstt = [1,2,3]
console.log([...tessstt,4]);

function showNmae(first,last,...titles){
    console.log(first+last);

    console.log(titles[0]);
    console.log(titles[1]);
}

showNmae("karim","benzama","luka","moldric");




//OBJECT

let a = {} //object ürettik

let b = new Object();
//new constracture methoddur.
//b bir nesnedir

let c = 1;

//objenın içini doldurduk
a.model = "volco";
a.age=2;

let pers = {
    name:"isim",
    age:20,
    count: function(){
        return this.age;
    }
}

//pers.name;






