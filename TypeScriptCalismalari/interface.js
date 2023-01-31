var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi");
}
function save2(product2) {
    console.log(product2.name + " kaydedildi");
}
//bütün değerleri girmek zorundayız interfacelerde
save({ id: 1, name: "Laptop", unitPrice: 100 });
var mouse = new Product2();
//classlarda ise tüm değerleri girmesek bile sıkıntı çıkmaz
mouse.name = "logitech";
save2(mouse);
//interfaceler implement edilir ve classta içerisinde interfacete bulunan methodu barındırmak zorundadır.
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
    };
    return CustomerService;
}());
