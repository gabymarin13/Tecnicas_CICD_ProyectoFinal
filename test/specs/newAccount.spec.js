import AccountPage from '../pageobjects/account.page';
import LoginPage from '../pageobjects/login.page';


describe('Creating a new account', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await AccountPage.setGoToNewAccountCreationPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should display the correct page "Add New Account"', async () => {
        await expect(AccountPage.pageTitle).toHaveTextContaining('Add new account form');
    });

    it('Create a new account', async () => {
        AccountPage.createAccount("35652", 1,"10000");
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Generated Successfully!!!');
        });
        
});