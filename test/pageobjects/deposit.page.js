import Page from './page';

class DepositPage extends Page {
    
/*********Getter and setter to make a deposit********/

     get getDepositBtn(){
         return $('a[href^="DepositInput"]');
     }
     
     get getTitle() {
        return $('[class=heading3]');
    }

    get getAccountNo(){
        return $('[name="accountno"]');
    }

    get getAmount() {
        return $('[name="ammount"]');
    }

    get getDescription() {
        return $('[name="desc"]');
    }

    get getSubmitButton(){
        return $('[name="AccSubmit"]');
    }

    //set to go to make a new deposit form

    setGoToDepositPage(){
        this.getDepositBtn.click();
    }


/*********METHODS********/

     //To make a new deposit
     MakeDeposit(number,amount,text){
        this.getAccountNo.setValue(number);
        this.getAmount.setValue(amount);
        this.getDescription.setValue(text);
        this.getSubmitButton.click();
   }
}

export default new DepositPage();