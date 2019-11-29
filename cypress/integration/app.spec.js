describe('Ensure page runs and tests in cypress', () => {
  // beforeEach(() => {
  //   cy.visit('/')
  // })
  it('Check that the app runs', () => {
    cy.visit('/')
    cy
      .get('#root')
  })
  it('Check app contains h1 and contains text', () => {
    cy.contains('h1','Toaster!')
  })
  it('Check the app contains the Toaster panel', () => {
    cy
      .get('#root')
      .find('.Toaster')
  })

  it('Click the lever and check new toast is disabled', () => {
    cy
      .get('.handle')
      .click()
      .get('.loadToast')
      .should('be.disabled')
  })
  it('User clicks Medium lvl. Updates and toasts', () => {
    cy
      .visit('/')
      .get('[data-toast-level="mediumDone"]').click()
      .get('.handle')
      .click()
      .get('[data-testid="toast"]')
      .wait(1000)
      .should('have.class', 'toasting')
      .wait(7000)
      .should('have.class', 'up')
  })
  it('User clicks Load after toast is loaded to load new', () => {
    cy
      .get('[data-testid="toast"]')
      .should('have.class', 'up')
      .get('.loadToast')
      .should('not.be.disabled')
      .click()
      .get('[data-testid="toast"')
      .should('not.have.class', 'toasting')
  })
  it('Finish up by typing in the box, test complete', () => {
    cy
      .get('.CypressTestBox')
      .wait(2000)
      .type('Test complete... thanks :)')
  })
})