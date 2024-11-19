
describe('Login form password wrong', () => {

    it('should redirect to login form when visiting app root url', () => {
      cy.visit('/login')
      cy.contains('h1', 'Login')
    })
  
    it('test submit', () => {
      cy.get('form').submit() // Submit a form
  
      cy.get('.error').should('contain', 'TypeError: Failed to fetch')
    })
  
  })
  