describe('Pruebas en seccion "women" ', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    });

    it( 'Select large tops', () => {
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').click()
            .uncheck();
    });

    it('Ordenar articulos por precio', () => {

        cy.get('#selectProductSort').select('Price: Highest first');
        
    } )
});