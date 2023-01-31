abstract class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor() {
        super()
    }
    hesapla(): void {
        console.log("Tuketici kredi hesaplamasi yapildi")
    }
}

class KonutKredi extends KrediBase{
    constructor() {
        super()
    }
    hesapla(): void {
        console.log("Konut kredi hesaplamasi yapildi")
    }
    ekstra():void{
        console.log("ekstra")
    }
}

let tuketiciKredi = new TuketiciKredi()
tuketiciKredi.hesapla()
tuketiciKredi.kaydet()

let konutKredi= new KonutKredi()
konutKredi.hesapla()
konutKredi.ekstra()

let kredi:KrediBase

kredi=new TuketiciKredi()

kredi =new KonutKredi()
kredi.hesapla()