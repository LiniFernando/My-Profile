//////////////////////////////////////Register button///////////////////////////
$("#btnItemReg").click(function () {
    // var testcode=$("#txtCode").val();
    if (/^(I)[-]{1}[0-9]{3}$/.test($("#txtCode").val())){
        $("#txtCode").css('border','1px solid green');
        var code=$("#txtCode").val();
        $("#txtItemName").focus();
        if (/^[A-z]{5,}$/.test($("#txtItemName").val())){
            $("#txtItemName").css('border','1px solid green');
            var itemName=$("#txtItemName").val();
            $("#txtPrice").focus();
            if (/^[0-9]{1,}$/.test($("#txtPrice").val())){
                $("#txtPrice").css('border','1px solid green');
                var price=$("#txtPrice").val();
                $("#txtQty").focus();
                if (/^[0-9]{1,}$/.test($("#txtQty").val())){
                    $("#txtQty").css('border','1px solid green');
                    var qty=$("#txtQty").val();
                    $("#btnItemReg").focus();

                    var i=new Item(code, itemName, price, qty);
                    itemtbl.push(i);
                    loadTable();
                    clearText();
                }else {
                    alert("Item Qty is invalid");
                    $("#txtQty").css('border','1px solid red');
                    $("#txtQty").focus();
                }
            }else {
                alert("Item price is invalid");
                $("#txtPrice").css('border','1px solid red');
                $("#txtPrice").focus();
            }
        }else {
            $("#txtItemName").css('border','1px solid red');
            alert("Item name is invalid");
            $("#txtItemName").focus();
        }
    }else {
        $("#txtCode").css('border','1px solid red');
        alert("Item Id is invalid");
        $("#txtCode").focus();
    }


    // var code=$("#txtCode").val();
    // var itemName=$("#txtItemName").val();
    // var price=$("#txtPrice").val();
    // var qty=$("#txtQty").val();


});

/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Search button////////////////////////////////
$("#btnItemSearch").click(function () {
    var iCodeorName=$("#txtItemSearch").val();
    for(var item of itemtbl){
        if(item.getCode()==iCodeorName){
            $("#txtCode").val(item.getCode());
            $("#txtItemName").val(item.getName());
            $("#txtPrice").val(item.getPrice());
            $("#txtQty").val(item.getQty());
        }else if(item.getName()==iCodeorName){
            $("#txtCode").val(item.getCode());
            $("#txtItemName").val(item.getName());
            $("#txtPrice").val(item.getPrice());
            $("#txtQty").val(item.getQty());
        }
    }
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Delete button////////////////////////////////
$("#btnItemDelete").click(function () {
    var icode=$("#txtCode").val();
    for(var item of itemtbl){
        if(item.getCode()==icode){
            itemtbl.splice(itemtbl.indexOf(item),1);
        }
    }
    loadTable();
    clearText();
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Update button////////////////////////////////
$("#btnItemUpdate").click(function () {
    var code=$("#txtCode").val();
    var itemName=$("#txtItemName").val();
    var price=$("#txtPrice").val();
    var qty=$("#txtQty").val();

    for(var item of itemtbl){
        if(item.getCode()==code){
            item.setName(itemName);
            item.setPrice(price);
            item.setQty(qty);
        }
    }
    loadTable();
    clearText();
});
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Add Stock////////////////////////////////
$("#btnAddStock").click(function () {
    $("#stockiid").children().remove();
    for (var item of itemtbl) {
        $("#stockiid").append("<option>" + item.getCode() + "</option>");
    }
});
$("#stockiid").children().click(function () {
    var code=$("#stockiid").val();
    for (var item of itemtbl) {
        if(item.getCode()==code) {
            $("#stockName").text(item.getName());
            $("#stockName").val(item.getName());
            $("#stockQtyonHand").val(item.getQty());
        }
    }
});




//////////////////////////////////////load Table////////////////////////////////
var loadTable=function() {
    $("#tblItemBody").children().remove();
    for (var item of itemtbl) {
        $("#tblItemBody").append("<tr><td>" + item.getCode() + "</td><td>" + item.getName() + "</td><td>" + item.getPrice() + "</td><td>" + item.getQty() + "</td></tr>");
    }

    // ............................tbl 1Click..................................
    $("#tblItemBody").children().click(function () {
        var code=$($(this).children()[0]).text();
        var itemName=$($(this).children()[1]).text();
        var price=$($(this).children()[2]).text();
        var qty=$($(this).children()[3]).text();

        $("#txtCode").val(code);
        $("#txtItemName").val(itemName);
        $("#txtPrice").val(price);
        $("#txtQty").val(qty);
    });

    // ............................tbl 2Click..................................
    $("#tblItemBody").children().dblclick(function () {
        itemtbl.splice(($(this).index()),1);
        $(this).remove();
        clearText();
    });
};

//////////////////////////////////////clearText////////////////////////////////
var clearText=function() {
    $("#txtCode").val("");
    $("#txtItemName").val("");
    $("#txtPrice").val("");
    $("#txtQty").val("");

    $("#txtCode").css('border','1px solid #495057');
    $("#txtItemName").css('border','1px solid #495057');
    $("#txtPrice").css('border','1px solid #495057');
    $("#txtQty").css('border','1px solid #495057');

};