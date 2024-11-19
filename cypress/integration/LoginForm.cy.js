import LoginForm from "@/components/LoginForm.vue"

describe('Login form password wrong', () => {
  it('test submit', () => {
    cy.mount(LoginForm)
    cy.get('form').submit() // Submit a form

    cy.get('.error').should('contain', 'TypeError: Failed to fetch')
  })

})
