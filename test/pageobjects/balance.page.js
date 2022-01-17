import Page from './page';

class BalancePage extends Page {

/*********Getter and setter to consult account balance********/

    get geBalanceBtn() {
        return $('a[href^="BalEnqInput"]');
    }

    get getTitle() {
        return $('[class=heading3]');
    }

    get getInput() {
        return $('[name="accountno"]');

    }

    get getSubmitButton(){
        return $('[name="AccSubmit"]');
    }

    //set to go to consult balance inquiry form

    setGoToBalancePage(){
        this.geBalanceBtn.click();
    }

    currentInput(){
        return $('[name="accountno"]');
    }

    setSubmitButton(){
        this.getSubmitButton.click();
    }



/*********METHODS********/

    //To consult an account balance inquiry
    ConsultBalance(account){
        this.getInput.setValue(account);
        this.getSubmitButton.click();
    }
    

}

export default new BalancePage();