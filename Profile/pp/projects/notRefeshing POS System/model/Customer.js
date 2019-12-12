function Customer(id, name, address, contact) {
    var _id=id;
    var _name=name;
    var _address=address;
    var _contact=contact;

    this.getId=function() {
        return _id;
    }
    this.getName=function () {
        return _name;
    }
    this.getAddress=function () {
        return _address;
    }
    this.getContact=function () {
        return _contact;
    }

    this.setId=function (id) {
         _id=id;
    }
    this.setName=function (name) {
        _name=name;
    }
    this.setAddress=function (address) {
         _address=address;
    }
    this.setContact=function (contact) {
        _contact=contact;
    }
}