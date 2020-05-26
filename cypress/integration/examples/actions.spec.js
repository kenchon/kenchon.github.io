/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })

  // トップのアイコンをクリックすると，トップページにいく。
  it('Click icon of the top left to visit toppage', () => {
    cy.get('a[href="/blog"]').click()
    cy.url().should('match', /\/blog$/)
  })
})
