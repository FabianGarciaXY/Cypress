
// Asserts
 describe( 'Asserts', () => {

    it('Validando una igualdad', () => {
        expect(1 === 2, 'Ambos valores deben ser iguales y no lo son').to.equal(true);
    })

    it('Validando una no igualdad', () => {
        expect(1 === 2).to.equal(false);
    }) 

    it('Validando una resta', () => {
        expect(1-5, 'Se espera un cero').to.equal(0);
    })

    it('Validando una no correcta', () => {
        expect(1-1).to.not.equal(2);
    })

    it('Debe ser verdadero', () => {
        expect(2 == 2).to.be.true;
    })

    const a = 10

    it('Validando si la variable existe', () => {
        expect(a).to.exist;
    })
    it('Es menor a 15', () => {
        expect(a).to.be.lessThan(15)
    })

    it('Es mayor a 5', () => {
        expect(a).to.be.greaterThan(5);
    })
})