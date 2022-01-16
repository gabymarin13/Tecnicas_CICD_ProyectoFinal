import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    async login (username, password) {
        return browser.url(`http://${username}:${password}@demo.guru99.com/V4/manager/Managerhomepage.php`);
    }

  
    open() {
        return super.open('login');
    }
}

export default new LoginPage();