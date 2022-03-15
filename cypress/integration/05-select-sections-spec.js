

// Seleccion del primer elemento
describe('Go to one section', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Going to Women section', () => {
        cy.get('.sf-with-ul').first().click();
    })

    it('Going to Dresses Section', () => {
        cy.get('.sf-with-ul').eq(3).click();  
    })

})



