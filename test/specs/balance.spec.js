import BalancePage from '../pageobjects/balance.page';
import LoginPage from '../pageobjects/login.page';


describe('Making a account balance inquiry', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await BalancePage.setGoToBalancePage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should display the correct page "Balance Enquiry Form"', async () => {
        await expect(BalancePage.pageTitle).toHaveTextContaining('Balance Enquiry Form');
    });


    it('Balance Enquiry', async () => {
        BalancePage.ConsultBalance("66985");
        await expect(BalancePage.pageMessage).toHaveTextContaining('Balance Enquiry Successfully!!!');
        });

});