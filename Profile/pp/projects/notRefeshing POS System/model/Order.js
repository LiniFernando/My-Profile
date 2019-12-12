function Order(oid, date, cid, totalPrice) {
    var _oid=oid;
    var _date=date;
    var _cid=cid;
    var _totalPrice=totalPrice;

    this.getOid=function() {
        return _oid;
    }
    this.getDate=function () {
        return _date;
    }
    this.getCid=function () {
        return _cid;
    }
    this.getTotalPrice=function () {
        return _totalPrice;
    }


    this.setOid=function (oid) {
        _oid=oid;
    }
    this.setDate=function (date) {
        _date=date;
    }
    this.setCid=function (cid) {
        _cid=cid;
    }
    this.setTotalPrice=function (totalPrice) {
        _totalPrice=totalPrice;
    }

}