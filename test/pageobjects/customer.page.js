import Page from './page';

class CustomerPage extends Page {

/*********Getter and setter to create a new customer********/

    get getNewCustomerBtn() {
        return $('a[href^="addcustomerpage"]');
    }

    get getCustomerName() {
        return $('[name="name"]');
    }

    get getGender() {
        return $('[value="m"]');
    }

    get getDateOfBirth() {
        return $('[id="dob"]');
    }

    get getAddress() {
        return $('[name="addr"]');
    }

    get getCity() {
        return $('[name="city"]');
    }

    get getState() {
        return $('[name="state"]');
    }

    get getPIN() {
        return $('[name="pinno"]');
    }

    get getMobileNumber() {
        return $('[name="telephoneno"]');
    }

    get getEmail() {
        return $('[name="emailid"]');
    }

    get getPassword() {
        return $('[name="password"]');
    }

    get getBtnSubmitCustomer() {
        return $('[value="Submit"]');
    }

    //set to go to a new customer form

    setGoToCreateANewCustomerPage() {
        this.getNewCustomerBtn.click();
    }


/*********Getter and setter to edit a customer********/

    get getEditCustomerBtn() {
        return $('a[href^="EditCustomer"]');
    }

    get getCustomerIDToEdit() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitEditCustomer() {
        return $('[name="AccSubmit"]');
    }

    //set to go to edit a customer

    setGoToEditACustomerPage() {
        this.getEditCustomerBtn.click();
    }



/*********Getter and setter to delete a customer********/

    get getDeleteCustomerBtn() {
        return $('a[href^="DeleteCustomer"]');
    }

    get getCustomerID() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitDeleteCustomer() {
        return $('[name="AccSubmit"]');

    }

    //set to go to delete a customer

    setGoToDeleteCustomerPage() {
        this.getDeleteCustomerOption.click();
    }



/*********METHODS********/

    //To create a customer
    createCustomer(name, dateOfBirth, address, city, state, pin, mobilenumber, email, password) {
        this.getCustomerName.setValue(name);
        this.getGender.click();
        this.getDateOfBirth.setValue(dateOfBirth);
        this.getAddress.setValue(address);
        this.getCity.setValue(city);
        this.getState.setValue(state);
        this.getPIN.setValue(pin);
        this.getMobileNumber.setValue(mobilenumber);
        this.getEmail.setValue(email);
        this.getPassword.setValue(password);
        this.getBtnSubmitAddCustomer.click();
    }


    //To edit a customer
    editCustomer(customerid, address) {
        this.getCustomerIDToEdit.setValue(customerid);
        this.getBtnSubmitEditCustomer.click();
        this.getAddress.setValue(address);
        this.getBtnSubmitEditCustomer.click();
    }

    //To delete a customer
    deleteCustomer(customerid) {
        this.getCustomerIDToDelete.setValue(customerid);
        this.getBtnSubmitDeleteCustomer.click();
    }

}

export default new CustomerPage();