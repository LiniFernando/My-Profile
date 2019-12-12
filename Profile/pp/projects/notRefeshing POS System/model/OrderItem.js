function OrderItem(oid, iid, qty, price) {
    var _oid=oid;
    var _iid=iid;
    var _qty=qty;
    var _price=price;


    this.getOid=function() {
        return _oid;
    }
    this.getIid=function () {
        return _iid;
    }
    this.getQty=function () {
        return _qty;
    }
    this.getPrice=function () {
        return _price;
    }


    this.setOid=function (oid) {
        _oid=oid;
    }
    this.setIid=function (iid) {
        _iid=iid;
    }
    this.setQty=function (qty) {
        _qty=qty;
    }
    this.setPrice=function (price) {
        _price=price;
    }

}