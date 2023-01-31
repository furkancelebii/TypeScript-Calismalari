
class Kisi{
    private _isim:string

    get isim(){
        return "Sayın : " + this._isim;
    }
    set isim(ad:string){
        this._isim = ad;
    }
    kaydet(){
        console.log("Kişi kaydedildi");
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış yapıldı")
    }

}
let musteri= new Musteri()
musteri.isim="furkan"
console.log(musteri.isim)

