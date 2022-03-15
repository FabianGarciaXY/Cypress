// Se realizara una test para realizar en automationpractice
// que contenga resultados
describe('Search test cases', function(){

    // Para la mayoria de acciones se debe iniciar con CY
    // Para visitar se agrega la URL
    it('Search with results', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})