import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    async login (username, password) {
        return browser.url(`http://${username}:${password}@demo.guru99.com/V4/manager/Managerhomepage.php`);
    }

  
    open() {
        return super.open('login');
    }


/*********Getter and setter to change password********/

    get getChangePasswordBtn() {
        return $('a[href^="PasswordInput"]');
    }

    get getChangePasswordBtn() {
        return $('a[href^="PasswordInput"]');
    }

    get getOldPassword() {
        return $('[name="oldpassword"]');
    }

    get getNewPassword() {
        return $('[name="newpassword"]');
    }

    get getConfirmPassword() {
        return $('[name="confirmpassword"]');
    }

    get getBtnSubmitChangePassword() {
        return $('[name="sub"]');
    }

    //set to go to change password form

    setGoToChangePasswordPage() {
        this.getChangePasswordBtn.click();
    }

    

/*********METHODS********/


    //To change password
    changePassword(oldpassword, newpassword, confirmpassword) {
        this.getOldPassword.setValue(oldpassword);
        this.getNewPassword.setValue(newpassword);
        this.getConfirmPassword.setValue(confirmpassword);
        this.getBtnSubmitChangePassword.click();
    }

}

export default new LoginPage();