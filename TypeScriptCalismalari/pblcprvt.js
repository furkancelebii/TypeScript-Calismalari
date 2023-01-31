var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kisi = /** @class */ (function () {
    function Kisi() {
        this.isim = "sora";
        this.id = 5;
        this.name = "furkan";
    }
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi");
    };
    return Kisi;
}());
// name isimli nesneye erişebilirken private olan isim isimli nesneye erişim yapamıyoruz 
// publiclere her yerden erişilebilir ama private olan nesnelere sadece sınıf içinden erişim yapılabilir.
// protected ise inherite edilen sınıftada kullanılabilmesini sağlar geri kalan özellikleri private ile aynıdır
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.ismiYazdir = function () {
        console.log(this.name);
        // console.log(this.isim)
        console.log(this.id);
    };
    Musteri.prototype.satisYap = function () {
        console.log("Satış yapıldı");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş ödendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
musteri.ismiYazdir();
