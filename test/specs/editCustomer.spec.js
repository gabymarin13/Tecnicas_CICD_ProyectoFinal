import CustomerPage from '../pageobjects/customer.page';
import LoginPage from '../pageobjects/login.page';


describe('Editting an existing customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await CustomerPage.setGoToEditACustomerPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should display the correct page "Edit Customer Form"', async () => {
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Edit Customer Form');
    });


    it('Edit customers info', async () => {
        CustomerPage.editCustomer("26548", "Santa Cruz");
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer details updated Successfully!!!');
        });

});