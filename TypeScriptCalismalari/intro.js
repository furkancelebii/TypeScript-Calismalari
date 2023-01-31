function selamVer(isim) {
    return "merhaba " + isim;
}
var mesaj = selamVer('furkan');
console.log(mesaj);
var sayi = 25;
sayi = 10;
sayi = 10.4;
var sehir = "adana";
sehir = "ankara";
sehir = "izmir";
var dogruMu;
dogruMu = false;
dogruMu = true;
var sayilar = [1, 3, 5, 7];
var sayilar2 = [1, 2, 3];
var dizi = [2, "ankara"];
console.log(dizi[0]);
console.log(dizi[1]);
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 0] = "Kirmizi";
    Renk[Renk["Siyah"] = 1] = "Siyah";
    Renk[Renk["Mavi"] = 2] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(Renk.Kirmizi);
