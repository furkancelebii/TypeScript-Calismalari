var Ev = /** @class */ (function () {
    function Ev(odalar, pencereler, kat, numara) {
        this._odalar = odalar;
        this._pencereler = pencereler;
        this._kat = kat;
        this._numara = numara;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katli evde yemek yenildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 6, 7);
ev.yemekYe();
console.log(ev._kat);
