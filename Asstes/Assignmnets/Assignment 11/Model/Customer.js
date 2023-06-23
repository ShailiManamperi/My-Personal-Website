export default class Customer {

    constructor(customer_id, customer_name, customer_Contact, customer_address) {
        this._customer_id = customer_id;
        this._customer_name = customer_name;
        this._customer_address = customer_address;
        this._customer_Contact = customer_Contact;

    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(customer_id) {
        this._customer_id = customer_id;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(customer_name) {
        this._customer_name = customer_name;
    }

    get customer_Contact() {
        return this._customer_Contact;
    }

    set customer_Contact(customer_Contact) {
        this._customer_Contact = customer_Contact;
    }

    get customer_address() {
        return this._customer_address;
    }

    set customer_address(customer_address) {
        this._customer_address = customer_address;
    }
}