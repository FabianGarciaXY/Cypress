
import indexPage from '../support/pages/index';
import articlePage from '../support/pages/articles';

// Page Object
describe('Page Object Model', () => {

    it('Getting search element', () => {
        cy.visit('http://automationpractice.com/index.php');
        indexPage.search('Hat');
        articlePage.verifyArticle('"Hat"');
    })
})

// Custom command
describe('Using custom commands', () => {

    it('Printing messages', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.logText('Printing gomething random')
    })
})