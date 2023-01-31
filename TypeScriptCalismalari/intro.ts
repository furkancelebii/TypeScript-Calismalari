function selamVer(isim:string){
    return "merhaba " +isim
}
let mesaj = selamVer('furkan')
console.log(mesaj)

let sayi:number =25
sayi=10;
sayi=10.4

let sehir:string = "adana"
sehir="ankara"
sehir="izmir"

let dogruMu : boolean
dogruMu = false
dogruMu = true

let sayilar : number[] =[1,3,5,7]
let sayilar2 : Array<number> =[1,2,3]


let dizi:[number,string] =[2,"ankara"]
console.log(dizi[0])
console.log(dizi[1])

enum Renk{Kirmizi,Siyah,Mavi}
let renk: Renk=Renk.Kirmizi
console.log(Renk.Kirmizi)


let deger : any= "siirt"
deger = 2
deger = {}

let deger2 : void =undefined


// void sadece emir için kullanılacak veri yapısıdır function ise her türlü işi yapar örneğin return fonksiyonunu void ile çalıştıramazsınız ama 
// function ile çalıştırabilirsiniz.

// function selamVer2():void{
//     console.log("selam")
//     return 5
// }


// undefined null
let yas:number;
yas= 10
 class Personeller{


 }
 