import AccountPage from '../pageobjects/account.page';
import LoginPage from '../pageobjects/login.page';


describe('Editting an existing account', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await AccountPage.setGoToEditAccountPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should display the correct page "Edit Account Form"', async () => {
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Edit Account Form');
    });


    it('Edit accounts info', async () => {
        AccountPage.editAccount("35652", "25000");
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Changed Successfully!!!');
        });

});