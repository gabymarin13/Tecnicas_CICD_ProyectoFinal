import LoginPage from  '../pageobjects/login.page';
import MainPage from  '../pageobjects/main.page';

describe('My Login on Guru99 page', () => {
    beforeEach(async function(){
        LoginPage.login('mngr380668', 'enUpuza');
    
     });
     
    it('Should login with valid credentials at Guru99 page', async () => {
        await expect(MainPage.getTitleWelcome).toBeExisting();
        await expect(MainPage.getTitleWelcome).toHaveTextContaining('Welcome To Manager'+"'"+'s Page of Guru99 Bank');
    });
});