function Item(code, name, price, qty) {
    var _code=code;
    var _name=name;
    var _price=price;
    var _qty=qty;

    this.getCode=function() {
        return _code;
    }
    this.getName=function () {
        return _name;
    }
    this.getPrice=function () {
        return _price;
    }
    this.getQty=function () {
        return _qty;
    }

    this.setCode=function (code) {
        _code=code;
    }
    this.setName=function (name) {
        _name=name;
    }
    this.setPrice=function (price) {
        _price=price;
    }
    this.setQty=function (qty) {
        _qty=qty;
    }
}