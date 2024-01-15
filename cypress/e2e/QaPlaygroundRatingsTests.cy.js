describe('Qa Playground Ratings Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('ratings'))
  })

  it('Should have no default rating', () => {
    cy.get('.star-1').should('have.css', 'color','rgb(204, 204, 204)')
    cy.get('.star-2').should('have.css', 'color','rgb(204, 204, 204)')
    cy.get('.star-3').should('have.css', 'color','rgb(204, 204, 204)')
    cy.get('.star-4').should('have.css', 'color','rgb(204, 204, 204)')
    cy.get('.star-5').should('have.css', 'color','rgb(204, 204, 204)')
  })
 
  it('Rate the application one star', () => {
    cy.get('.star-1').click();
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.text').before('content').should('eq', 'I just hate it');
    cy.get('.numb').before('content').should('eq', '1 out of 5');
    })

  it('Rate the application two stars', () => {
    cy.get('.star-2').click();
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-2').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.text').before('content').should('eq', 'I don\'t like it');
    cy.get('.numb').before('content').should('eq', '2 out of 5');
  })

  it('Rate the application three stars', () => {
    cy.get('.star-3').click();
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-2').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-3').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.text').before('content').should('eq', 'This is awesome');
    cy.get('.numb').before('content').should('eq', '3 out of 5');
  })

  it('Rate the application four stars', () => {
    cy.get('.star-4').click();
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-2').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-3').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-4').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.text').before('content').should('eq', 'I just like it');
    cy.get('.numb').before('content').should('eq', '4 out of 5');
  })

  it('Rate the application five stars', () => {
    cy.get('.star-5').click();
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-2').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-3').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-4').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.star-5').should('have.css', 'color','rgb(255, 221, 68)');
    cy.get('.text').before('content').should('eq', 'I just love it');
    cy.get('.numb').before('content').should('eq', '5 out of 5');
  })
  })