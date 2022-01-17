import AccountPage from '../pageobjects/account.page';
import LoginPage from '../pageobjects/login.page';


describe('Deleting an existing account', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await AccountPage.setGoToDeleteAccountPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should display the correct page "Delete Account Form"', async () => {
        await expect(AccountPage.pageTitle).toHaveTextContaining('Delete Account Form');
    });


    it('Delete an existing account', async () => {
        AccountPage.deleteAccount("35652");
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Deleted Successfully!!!');
        });

});