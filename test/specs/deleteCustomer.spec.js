import CustomerPage from '../pageobjects/customer.page';

describe('Deletting an existing customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
    });
    beforeEach(async function(){
        console.log('I get executed before all its.');
        await CustomerPage.setGoToDeleteCustomerPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
        await CustomerPage.setGoToDeleteCustomerPage();
    });

    it('Should display the correct page "Delete Customer Form"', async () => {
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Delete Customer Form');
    });

    it('Should display the correct "Successfully" deleted', async () => {
        CustomerPage.deleteCustomer("12345");
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer deleted Successfully!!!');
    })
});