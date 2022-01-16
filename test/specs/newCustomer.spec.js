import CustomerPage from '../pageobjects/customer.page';
import LoginPage from '../pageobjects/login.page';


describe('Creating a new customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await CustomerPage.setGoToCreateANewCustomerPage();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should display the correct page "Add New Customer"', async () => {
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Add New Customer');
    });

    it('Create a new customer', async () => {
        CustomerPage.createCustomer(
        "Fernando",
        "28-11-1987",
        "Liberia, Guanacaste",
        "Liberia",
        "Guanacaste",
        "121314",
        "88459696",
        Math.floor((Math.random() * 100) + 1) + "@hotmail.com",
        "AutumN1695.");
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer Registered Successfully!!!');
        });
        
});