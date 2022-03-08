
describe('Example of test', ()=> {

    it('Visits the Kitchen Sink and clicks on type link', ()=> {

        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.url().should('include', 'commands/actions')

        //We can use get() to select an element based on a CSS element class.
        cy.get('.action-email').type('some_email@gmail.com')
            .should('have.value', 'some_email@gmail.com')
    })
})