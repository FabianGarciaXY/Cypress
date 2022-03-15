
// Chaining

/*
describe('Chaining commands', () => {

    it('First test', () => {
        
        cy.visit('https://automationbookstore.dev/');
        cy.get('#searchBar').clear().type('java').clear().type('agile');
    })
})
*/

// After & Before

/* describe('Uso de after y before', () => {

    before( function(){
        cy.log('Condición antes de las pruebas');
    });
    after( function(){
        cy.log('Condición ejecutada despues de las pruebas');
    });

    it( 'Visitando automation tests', () => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it(' Obteniendo un elemento', () => {
        cy.get('#search_query_top').type('t-shirts');
    });
}) */


// BeforeEach y AfterEach
describe('Uso de beforeEach y afterEach', () => {
    
    beforeEach( () => {
        cy.log('Action before each case');
    });

    afterEach( () => {
        cy.log('Action after each case');
    });

    it('Fist visit to automationpractice.com ', () => {
        
        cy.visit('http://automationpractice.com/index.php')
            .get('#search_query_top')
            .type('t-shirts')
            .clear();
    });

    it('Second visit to acutomation practice.com', () => {
        
        cy.visit('http://automationpractice.com/index.php')
            .get('#search_query_top')
            .type('t-shirts');
        cy.get('#searchbox > .btn')
            .click();
    });

})



