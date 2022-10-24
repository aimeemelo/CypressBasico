Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Aimée')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('aimeemf@exemplo.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
})