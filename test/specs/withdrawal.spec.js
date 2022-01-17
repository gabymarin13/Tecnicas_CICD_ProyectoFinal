import WithdrawalPage from '../pageobjects/withdrawal.page';
import LoginPage from '../pageobjects/login.page';


describe('Making a new withdrawal', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await WithdrawalPage.setGoToWithdrawalPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should display the correct page "Amount Withdrawal Form"', async () => {
        await expect(WithdrawalPage.pageTitle).toHaveTextContaining('Amount Withdrawal Form');
    });

    it('Making an amount withdrawal', async () => {
        WithdrawalPage.MakeWithdrawal("66985", "7500", "Abono para vacaciones");
        await expect(WithdrawalPage.pageMessage).toHaveTextContaining('The amount was withdrawn');
        });
        
});