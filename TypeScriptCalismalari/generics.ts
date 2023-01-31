function deger(x:number):number{
    return x;
}

function deger2(x:string):string{
    return x;
}

let sayi=deger(100);
console.log(sayi);

let sehir=deger2("ankara");
console.log(sehir);


//farkl tarz tiplerle işimiz varsa eğer ,fonksiyonu kullanırken tip belirtip işimizi ve kodumuzu daha temiz yapabiliriz

function deger3<Type>(x:Type):Type{
    return x;
}

let sayi3=deger3<number>(5);
let sehir3=deger3<string>("manisa");
console.log(sayi3);
console.log(sehir3);


class GenericClass<T>{
    degisken :T;
    fonksiyon(parametre:T):T{
        return parametre
    }
}
let sinif=new GenericClass<number>();
sinif.fonksiyon(20)
// sinif.fonksiyon("merhaba")


let sinif2=new GenericClass<string>();
// sinif2.fonksiyon(10)
sinif2.fonksiyon("merhaba")
