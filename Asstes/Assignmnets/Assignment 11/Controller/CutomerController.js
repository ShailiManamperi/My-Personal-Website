//import Customer from "../Model/Customer.js"
const data = "key";
loadData();
function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);
    $('table tbody tr').remove();
    customer_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.customer_id + "</td>" +
            "<td>" + result.customer_name + "</td>" +
            "<td>" + result.customer_address + "</td>" +
            "<td>" + result.customer_contact + "</td>" +
            "</tr>";
        $('tbody').append(row);
    })
};

$("#custTbl").on('click','tr',function(event){
    console.log($(event.target).text());
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let address = $(this).children().eq(2).text();
    let contact = $(this).children().eq(3).text();

    $("#Cid").val(id);
    $("#custname").val(name);
    $("#address").val(address);
    $("#contact").val(contact);
});

$('#btnsave').on('click',(event) =>{
    let customer_id = $('#Cid').val();
    let customer_name = $('#custname').val();
    let customer_address = $('#address').val();
    let customer_contact = $('#contact').val();

    console.log(customer_id+" "+customer_name+" "+customer_contact+" "+customer_address);

    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    var obj = {
        customer_id: customer_id,
        customer_name: customer_name,
        customer_address: customer_address,
        customer_contact: customer_contact
    }
    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data, JSON.stringify(data_arr));
    loadData();
});

//update customer
$("#btnupdate").on('click',(event)=>{
    let customer_id = $('#Cid').val();
    let pre_data = localStorage.getItem(data);
    let customer_data_arr =JSON.parse(pre_data);

    let index = customer_data_arr.findIndex(value => value.customer_id === customer_id);
    console.log(index);
    console.log(customer_data_arr[index]);
    if (index > -1){
        console.log(customer_data_arr[index]);
        customer_data_arr[index].customer_id = $("#Cid").val();
        customer_data_arr[index].customer_name = $("#custname").val();
        customer_data_arr[index].customer_address = $("#address").val();
        customer_data_arr[index].customer_contact = $("#contact").val();
        console.log(customer_data_arr[index].customer_contact);
        localStorage.setItem(data,JSON.stringify(customer_data_arr));
        loadData();
    }
});

$("#btndelete").on("click",(event)=>{
    let id = $("#Cid").val();
    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value.customer_id === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})

/*import Customer from "../model/Customer.js"

const data = "DATA"; //local storage save key

var customer_arr = []; //

export class Customer_controller{
    constructor() {
        $('#B8').click(this.handledSaveCustomer.bind(this))
        $('#B10').click(this.handledUpdateCustomer.bind(this))
        $('#B9').click(this.handledDeleteCustomer.bind(this))
        this.handleLoadCustomer()
        this.handleSaveCustomerValidation()
    }

    handleSaveCustomerValidation(){
        var customer_id = $('#textField1').val();
        var customer_name = $('#textField2').val();
        var customer_Email = $('#textField3').val();
        var customer_address = $('#textField4').val();
        const regexNumber = /^\d+$/;
        if (!regexNumber.test(customer_id)){
            alert('Invalid Id');
        }else if (!customer_name){
            alert('Invalid Name');
        }else if (!customer_Email){
            alert('Invalid Email');
        }else if (!customer_address){
            alert('Invalid Address');
        }else {
            this.handledSaveCustomer();
        }
    }

    handledSaveCustomer(){
        console.log("hi..........")
        var customer_id = $('#textField1').val();
        var customer_name = $('#textField2').val();
        var customer_Email = $('#textField3').val();
        var customer_address = $('#textField4').val();

        // validation
        const regexNumber = /^\d+$/;
        if(!regexNumber.test(customer_id)){
            alert('Incorrect ID')
        }

        let pre_data = localStorage.getItem(data);
        let data_arr = [];

        // undefine/ null/ "" / false
        if (pre_data) {
            data_arr = JSON.parse(pre_data);
        }

        let new_customer = new Customer(customer_id,customer_name,customer_Email,customer_address);
        console.log(new_customer)

        data_arr.push(new_customer);
        console.log(data_arr);
        localStorage.setItem(data, JSON.stringify(data_arr));

        this.handleLoadCustomer()
    }

    handleLoadCustomer(){
        let pre_data = localStorage.getItem(data);
        console.log(pre_data);
        let customer_data_arr = JSON.parse(pre_data);
        console.log(customer_data_arr);

        $('table tbody tr').remove();

        customer_data_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>" + result._customer_id + "</td>" +
                "<td>" + result._customer_name + "</td>" +
                "<td>" + result._customer_Email + "</td>" +
                "<td>" + result._customer_address + "</td>" +
                "</tr>";
            $('#TB1').append(row);
        });

    }


    handledUpdateCustomer(){
        console.log("Handle Update Customer!");

        $('#B10').on('click',(event)=>{
            let customer_id = $("#textField1").val();
            let pre_data = localStorage.getItem(data);
            let customer_data_arr =JSON.parse(pre_data);

            let index = customer_data_arr.findIndex(value => value.customer_id===customer_id);
            if (index > -1){
                console.log(customer_data_arr[index]);
                customer_data_arr[index].id = $("#textField1").val();
                customer_data_arr[index].customer_name = $("#textField2").val();
                customer_data_arr[index].customer_Email = $("#textField3").val();
                customer_data_arr[index].customer_address = $("#textField4").val();
                localStorage.setItem(data,JSON.stringify(customer_data_arr));
                this.handleLoadCustomer();
            }
        });

    }

    handledDeleteCustomer() {
        console.log("Handle Delete Customer!");

        $('#B9').on("click",(event) => {

            let id = $("#textField1").val();

            let per_arr = localStorage.getItem(data);
            let arr = [];
            if (per_arr) {
                arr = JSON.parse(per_arr);
            }

            let index = arr.findIndex(value => value._customer_id === id);
            console.log(index);
            arr.splice(index,1);

            localStorage.setItem(data, JSON.stringify(arr));
             this.handleLoadCustomer();
        })
    }
}

new Customer_controller()*/
