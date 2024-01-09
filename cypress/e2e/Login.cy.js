describe('Qa Playground tests', () => {
  beforeEach(() => {
    cy.visit("https://qaplayground.dev/apps/rating/")
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
    cy.get('.star-1').should('have.css', 'color','rgb(255, 221, 68)')
  })
})