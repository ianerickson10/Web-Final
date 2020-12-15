$(document).ready(function ()
{

    initValidation();   //in validation.js, should set up submit event handler

    //initialize any of your button or other event handlers 
});

function loadVisitors()
{
    // showContent('visitorPage', ['weddingPage', 'groupPage', 'mainPage', 'singlePage', 'formPage']);
    //called when 'visitors' menu item is clicked
    showVisitors();
    renderTable(visitors);
    //calls view 'showTable'
    showTable();
}

function submitForm()
{
    //called on form submit
    //Gets contents of form
    let tempFName = $("#first-name").val();
    let tempLName = $("#last-name").val();
    let tempAddress = $("#address").val();
    let tempCity = $("#city").val();
    let tempState = $("#state").val();
    let tempZip = $("#zip").val();
    let tempEmail = $("#email").val();
    let tempPhone = $("#phone").val();
    
    //creates visitor object
    let visitor = new Visitor(visitors.length + 1, tempFName, tempLName, tempAddress, tempCity, tempState, tempZip, tempPhone, tempEmail);
    modelAddVisitor(visitor);
    renderTable(containerId, visitors);
    //calls view 'showTable'
    showTable();
}

function addVisitor()
{
    //called on 'click' of 'New Visitor' button
    $("#formPage").show();
    clearForm();
    //calls view 'clearForm' to clear form contents
    showForm();
}

function deleteVisitor(id)
{
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
}