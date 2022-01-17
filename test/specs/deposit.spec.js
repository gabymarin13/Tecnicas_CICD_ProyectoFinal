import DepositPage from '../pageobjects/deposit.page';
import LoginPage from '../pageobjects/login.page';


describe('Making a new deposit', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await DepositPage.setGoToDepositPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should display the correct page "Amount Deposit Form"', async () => {
        await expect(DepositPage.pageTitle).toHaveTextContaining('Amount Deposit Form');
    });

    it('Making an account deposit', async () => {
        DepositPage.MakeDeposit("66985", "60000", "Cancelación de graduación");
        await expect(DepositPage.pageMessage).toHaveTextContaining('The amount was deposited');
    });
        
});