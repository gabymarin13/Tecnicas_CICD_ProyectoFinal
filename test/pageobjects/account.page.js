import Page from './page';

class AccountPage extends Page {

/*********Getter and setter to create a new account********/

    get getNewAccountBtn() {
        return $('a[href^="addAccount"]');
    }

    get getCustomerID() {
        return $('[name="cusid"]');
    }

    get getInitialDeposit() {
        return $('[name="inideposit"]');
    }

    get getAccountType() {
        return $('[name="selaccount"]');
    }

    get getBtnSubmitAddAccount() {
        return $('[name= "button2"]');
    }

    //set to go to create a new account form

    setGoToNewAccountCreationPage() {
        this.getNewAccountBtn.click();
    }

    setAccountTypeByIndex(index) {
        return this.getAccountType.selectByIndex(index);
    }



/*********Getter and setter to edit an account********/

    get getEditAccountBtn() {
        return $('a[href^="editAccount"]');
    }

    get getAccountID() {
        return $('[name="accountno"]');
    }

    get getBtnSubmitEditAccount() {
        return $('[name= "AccSubmit"]');
    }

    //set to go to edit an existing account form

    setGoToEditAccountPage() {
        this.getEditAccountBtn.click();
    }


/*********Getter and setter to delete an account********/

    get getDeleteAccountBtn() {
        return $('a[href^="deleteAccount"]');
    }

    get getAccountToDelete() {
        return $('[name="accountno"]');
    }
    get getBtnSubmitDeleteAccount() {
        return $('[name="AccSubmit"]');
    }

    //set to go to delete an existing account form

    setGoToDeleteAccountPage() {
        this.getDeleteAccountBtn.click();
    }




/*********METHODS********/


    //To create an account
    createAccount(customerid, accounttype,  initialdeposit) {
        this.getCustomerID.setValue(customerid);
        this.setAccountTypeByIndex(accounttype);
        this.getInitialDeposit.setValue(initialdeposit);
        this.getBtnSubmitAddAccount.click();
    }


    //To edit an account
    editAccount(accountno, accounttype) {
        this.getAccountToEdit.setValue(accountno);
        this.getBtnSubmitEditCustomer.click();
        this.setAccountTypeByIndex(accounttype);
        this.getBtnSubmitEditCustomer.click();

    }

    //To delete an account
    deleteAccount(accountno) {
        this.getAccountToDelete.setValue(accountno);
        this.getBtnSubmitDeleteAccount.click();
    }

}

export default new AccountPage();