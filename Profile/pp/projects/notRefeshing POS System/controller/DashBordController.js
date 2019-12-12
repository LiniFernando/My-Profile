$("#Customer").hide();
$("#Item").hide();
$("#Order").hide();
$("#Home").show();

/*$("#linkHome").click(function () {
    showContent("Home");
});
function hideContent() {
    $("#Customer").hide();
    $("#Item").hide();
    $("#Order").hide();
    $("#Home").hide();
}
function showContent(content) {
    hideContent();

    switch (content) {
        case "Home":
            $("#Home").show();
            break;
        case "Customer":
            $("#Customer").show();
            break;
        case "Item":
            $("#Item").show();
            break;
        case "Order":
            $("#Order").show();
            break;
    }

}*/
$("#linkHome").click(function () {
    $("#Customer").hide();
    $("#Item").hide();
    $("#Order").hide();
    $("#Home").show();
});
$("#linkCustomer").click(function () {
    $("#Home").hide();
    $("#Item").hide();
    $("#Order").hide();
    $("#Customer").show();
});
$("#linkItem").click(function () {
    $("#Home").hide();
    $("#Customer").hide();
    $("#Order").hide();
    $("#Item").show();
});
$("#linkOrder").click(function () {
    $("#Home").hide();
    $("#Item").hide();
    $("#Customer").hide();
    $("#Order").show();
});