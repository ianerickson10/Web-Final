function showContent(showEl, hideArray)
{
    document.getElementById(showEl).style.display = "flex";

    for (let hideEl of hideArray) {
        document.getElementById(hideEl).style.display = "none";
    }
}

function renderTable(visitors)
{
    //renders table from global 'visitors' object array
    let html = `
    <table>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>`;

    $.each(visitors, (index, visitor)=>
    {
        let row =`
        <tr>
            <td>${visitor.fullName}</td>
            <td>${visitor.fullAddress}</td>
            <td>${visitor.phone}</td>
            <td>${visitor.email}</td>
            <td><a href="#" onClick="editVisitor(${index})">edit</a><a href="#" onClick="deleteVisitor(${index})">delete</a></td>
        </tr>
        `;
        html += row;
    });
    html += "</table>";

    $("containerId").html(html);
}

function showVisitors()
{
    $("#visitorPage").show();
    $("#mainPage").hide();
    $("#weddingPage").hide();
    $("#groupPage").hide();
    $("#singlePage").hide();
}
function showList()
{
    $("#formPage").hide();
    $("#visitorPage").show();
}
function showForm()
{
    $("#formPage").show();
    $("#visitorPage").hide();
}

function clearForm() //done 
{
    //clears values on inputs so next time form is loaded they don't have old contents
    $("#first-name").val('');
    $("#last-name").val('');
    $("#address").val('');
    $("#city").val('');
    $("#state").val('');
    $("#zip").val('');
    $("#email").val('');
    $("#phone").val('');

    $("#google").val('');
    $("#friend").val('');
    $("#newspaper").val('');

    $("#comment").val('');
}