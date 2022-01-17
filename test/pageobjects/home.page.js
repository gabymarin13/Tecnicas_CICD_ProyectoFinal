
class HomePage extends Page {
    
    get getTitleWelcome() {
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > marquee');
    }
}

export default new MainPage();