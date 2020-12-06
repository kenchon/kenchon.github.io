/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // トップのアイコンをクリックすると，トップページにいく。
  xit('Click icon of the top left to visit toppage', () => {
    cy.get('#blog-logo').click()
    cy.url().should('match', /\/$/)
  })

  xit('Access to all the pages registered on sitemap.xml', ()=> {
    // TODO: サイトマップを読み込んで，その先にアクセスできるかどうか確認する。
  })
})