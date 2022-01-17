import LoginPage from  '../pageobjects/login.page';
import MainPage from  '../pageobjects/home.page';

describe('My Login on Guru99 page', () => {
    beforeEach(async function(){
        LoginPage.login('mngr380668', 'enUpuza');
    
     });
     
    it('Should login with valid credentials at Guru99 page', async () => {
        await expect(HomePage.getTitleWelcome).toBeExisting();
        await expect(HomePage.getTitleWelcome).toHaveTextContaining('Welcome To Manager'+"'"+'s Page of Guru99 Bank');
    });
    it('Should change a password of an existing manager', async () => {
        LoginPage.setGoToChangePasswordPage();
        LoginPage.changePassword("enUpuza", "enUpuz9wt", "enUpuz9wt");
        await expect(LoginPage.pageTitle).toHaveTextContaining('Password is Changed');
    });
    it('Should login with new password recently changed', async () => {
        LoginPage.login('mngr380668', 'enUpuz9wt');
        await expect(LoginPage.pageTitle).toHaveTextContaining('Welcome To Manager');
     });
});