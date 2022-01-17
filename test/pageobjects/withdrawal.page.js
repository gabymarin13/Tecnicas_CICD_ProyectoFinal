import Page from './page';

class WithdrawalPage extends Page {
   
/*********Getter and setter to make a withdrawal********/

     get getWithdrawalBtn(){
         return $('a[href^="WithdrawalInput"]');
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

    get getsubmitButton(){
        return $('[name="AccSubmit"]');
    }

    //set to go to make a new withdrawal form

    setGoToWithdrawalPage(){
        this.getWithdrawaBtn.click();
    }



/*********METHODS********/

     //To make a new withdrawal
     MakeWithdrawal(number, amount, text){
        this.getAccountNo.setValue(number);
        this.getAmount.setValue(amount);
        this.getDescription.setValue(text);
        this.getWithdrawalBtn.click();
   }
}

export default new WithdrawalPage();