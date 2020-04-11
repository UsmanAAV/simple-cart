context('test cart with discount', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('set 1', () => {
    cy.get('.product-name-input')
      .type('Магнитофон');
    cy.get('.product-price-input')
      .type('500');
    cy.get('.add-product')
      .click();
    cy.get('.product-name-input')
      .type('Шоколад');
    cy.get('.product-price-input')
      .type('200');
    cy.get('.add-product')
      .click();
    cy.get('.product-name-input')
      .type('Торт');
    cy.get('.product-price-input')
      .type('300');
    cy.get('.add-product')
      .click();

    cy.get('.discount-input')
      .type('9');
    cy.get('.set-discount')
      .click();

    cy.get('[data-test="row-0"] [data-test="discount-price"]')
      .should('have.text', '494');
    cy.get('[data-test="row-1"] [data-test="discount-price"]')
      .should('have.text', '199');
    cy.get('[data-test="row-2"] [data-test="discount-price"]')
      .should('have.text', '298');
  });
});
