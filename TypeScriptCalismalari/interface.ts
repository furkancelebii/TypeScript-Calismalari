interface Product{
    id:number;
    name:string;
    unitPrice:number;

}
class Product2 {
    id:number;
    name:string;
    unitPrice:number;
    
}

function save(product:Product){
    console.log(product.name+" kaydedildi")
}

function save2(product2:Product2){
    console.log(product2.name+" kaydedildi")
}
//bütün değerleri girmek zorundayız interfacelerde
save({id:1,name:"Laptop",unitPrice:100})


let mouse= new Product2()

//classlarda ise tüm değerleri girmesek bile sıkıntı çıkmaz
mouse.name="logitech"
save2(mouse)


interface PersonService{
    save();

}

//interfaceler implement edilir ve classta içerisinde interfacete bulunan methodu barındırmak zorundadır.
class CustomerService implements PersonService{
    save() {
        
    }
}