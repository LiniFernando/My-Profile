//////////////////////////////////////Register button///////////////////////////
$("#btncusRegister").click(function () {
    var cusID=$("#txtcusID").val();
    var cusName=$("#txtcusName").val();
    var cusAddress=$("#txtAddress").val();
    var cusContact=$("#txtcontact").val();

    var c=new Customer(cusID, cusName, cusAddress, cusContact);
    customertbl.push(c);
    loadTable();
    clearText();
});
/////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////getAll button////////////////////////////////
$("#btngetAll").click(function () {
    $("#tblCustomer").children().remove();
    for (var cus of customertbl) {
        $("#tblCustomer").append("<tr><td>" + cus.getId() + "</td><td>" + cus.getName() + "</td><td>" + cus.getAddress() + "</td><td>" + cus.getContact() + "</td></tr>");
    }

    // ............................tbl 1Click..................................
            $("#tblCustomer").children().click(function () {
                var cusID = $($(this).children()[0]).text();
                var cusName = $($(this).children()[1]).text();
                var cusAddress = $($(this).children()[2]).text();
                var cusContact = $($(this).children()[3]).text();

                $("#txtcusID").val(cusID);
                $("#txtcusName").val(cusName);
                $("#txtAddress").val(cusAddress);
                $("#txtcontact").val(cusContact);
            });

    // ............................tbl 2Click..................................
            $("#tblCustomer").children().dblclick(function () {
                customertbl.splice(($(this).index()),1);
                $(this).remove();
                clearText();
            });
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Search button////////////////////////////////
$("#btnsearch").click(function () {
    var cusIDorName=$("#txtsearch").val();
    for(var cus of customertbl){
        if(cus.getId()==cusIDorName){
            $("#txtcusID").val(cus.getId());
            $("#txtcusName").val(cus.getName());
            $("#txtAddress").val(cus.getAddress());
            $("#txtcontact").val(cus.getContact());
        }else if(cus.getName()==cusIDorName){
            $("#txtcusID").val(cus.getId());
            $("#txtcusName").val(cus.getName());
            $("#txtAddress").val(cus.getAddress());
            $("#txtcontact").val(cus.getContact());
        }
    }
});
/////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////Delete button////////////////////////////////
$("#btncusDelete").click(function () {
    var cusID=$("#txtcusID").val();
    for(var cus of customertbl){
        if(cus.getId()==cusID){
            customertbl.splice(customertbl.indexOf(cus),1);
        }
    }
    loadTable();
    clearText();
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Update button////////////////////////////////
$("#btncusUpdate").click(function () {
    var cusID=$("#txtcusID").val();
    var cusName=$("#txtcusName").val();
    var cusAddress=$("#txtAddress").val();
    var cusContact=$("#txtcontact").val();

    for(var cus of customertbl){
        if(cus.getId()==cusID){
            cus.setName(cusName);
            cus.setAddress(cusAddress);
            cus.setContact(cusContact);
        }
    }
    loadTable();
    clearText();
});
/////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////load Table////////////////////////////////
var loadTable=function() {
    $("#tblCustomer").children().remove();
    for (var cus of customertbl) {
        $("#tblCustomer").append("<tr><td>" + cus.getId() + "</td><td>" + cus.getName() + "</td><td>" + cus.getAddress() + "</td><td>" + cus.getContact() + "</td></tr>");
    }

    // ............................tbl 1Click..................................
    $("#tblCustomer").children().click(function () {
        var cusID = $($(this).children()[0]).text();
        var cusName = $($(this).children()[1]).text();
        var cusAddress = $($(this).children()[2]).text();
        var cusContact = $($(this).children()[3]).text();

        $("#txtcusID").val(cusID);
        $("#txtcusName").val(cusName);
        $("#txtAddress").val(cusAddress);
        $("#txtcontact").val(cusContact);
    });

    // ............................tbl 2Click..................................
    $("#tblCustomer").children().dblclick(function () {
        customertbl.splice(($(this).index()),1);
        $(this).remove();
        clearText();
    });
};
//////////////////////////////////////clearText////////////////////////////////
var clearText=function() {
    $("#txtcusID").val("");
    $("#txtcusName").val("");
    $("#txtAddress").val("");
    $("#txtcontact").val("");

};