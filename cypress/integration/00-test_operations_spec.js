
describe('Test operations', function() {

    const a = -5 + 10;
    const b = 5
    
    // El paramatro de it es una descripción del caso de prueba
    it('Comprobación de valores', function() {
        //Se espera que la condición sea true
        expect(a === b).to.equal(true);
    });

    it('Verificación de resta', function() {
        expect(a-b).to.equal(0);
    });

})