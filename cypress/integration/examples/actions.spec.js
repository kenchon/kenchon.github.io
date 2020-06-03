/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // トップのアイコンをクリックすると，トップページにいく。
  xit('Click icon of the top left to visit toppage', () => {
    cy.get('a[href="/"]').click()
    cy.url().should('match', /\/$/)
  })
})
