class Kisi{
    private isim:string="sora";
    protected id:number=5
    public name:string="furkan"
    kaydet(){
        console.log("Kişi kaydedildi");
    }
}
// name isimli nesneye erişebilirken private olan isim isimli nesneye erişim yapamıyoruz 
// publiclere her yerden erişilebilir ama private olan nesnelere sadece sınıf içinden erişim yapılabilir.
// protected ise inherite edilen sınıftada kullanılabilmesini sağlar geri kalan özellikleri private ile aynıdır
class Musteri extends Kisi{
    ismiYazdir(){
        console.log(this.name)
        console.log(this.isim) //**  */
        console.log(this.id)
    }

    satisYap(){
        console.log("Satış yapıldı")
    }

}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi")
    }

}
let musteri= new Musteri()
musteri.kaydet()
musteri.satisYap()

let personel =new Personel();
personel.kaydet()
personel.maasOde()

musteri.ismiYazdir()
