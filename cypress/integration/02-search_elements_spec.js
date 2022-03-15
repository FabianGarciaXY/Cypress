
describe('Ways find elements', () => {
    it('Look for an element', () => {

        cy.visit('http://automationpractice.com/index.php');
        // busqueda por clase
        cy.get('.search_query.form-control.ac_input').type('green');
        cy.get('#search_query_top').type(' small');
        cy.get('[name="search_query"]').type(' dress');
        cy.get('[placeholder="Search"]').clear();
    })

})