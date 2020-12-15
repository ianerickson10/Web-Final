class Visitor
{
    constructor(id, firstName, lastName, address, city, state, zip, phone, email)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.email = email;
        this.phone = phone;
    }
    get fullName()
    {
        let output = this.firstName + " " + this.lastName;
        return output;
    }
    get fullAddress()
    {
        let output = this.address + " ," + this.city + " " + this.state + " " + this.zip;
        return output;
    }
}

let visitors =
[
    new Visitor(1, "Ken", "Jenson", "1234 W. Main St.", "Mapleton", "Utah", "84664", "801-444-5555", "ken@gmail.com"),
    new Visitor(2, "Ben", "Jenson", "1234 W. Main St.", "Mapleton", "Utah", "84664", "801-444-5555", "ben@gmail.com")
];

function modelAddVisitor(visitor)
{
    //adds new visitor object to your array
}
function modelDeleteVisitor(id)
{
    //removes visitor object with given 'id' from array
}
function findVisitor(id)
{
    //returns visitor object with given 'id' from array
}
function findVisitorIndex(id)
{
    //returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
}
function modelUpdateVisitor(visitor)
{
    //finds and updates a visitor object a your array
}   //Only for extra credit 'edit' function