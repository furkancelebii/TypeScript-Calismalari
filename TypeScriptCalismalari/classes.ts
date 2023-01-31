class Ev{
    _odalar:number;
    _pencereler:number;
    _kat:number;
    _numara:number;
    constructor (odalar:number,pencereler:number,kat:number,numara:number){
        this._odalar =odalar
        this._pencereler =pencereler
        this._kat = kat
        this._numara = numara

    }
    yemekYe(){
        console.log(this._kat +" katli evde yemek yenildi");
    }
}

let ev = new Ev(3,4,6,7)
ev.yemekYe();
console.log(ev._kat)


