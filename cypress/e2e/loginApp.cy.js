it("Login to application",()=>{
  cy.visit("https://docs.cypress.io/guides/tooling/reporters#Custom-reporter");
  cy.get('li a').contains("$%$");
})

it("proceed application",()=>{
    cy.visit("https://docs.cypress.io/guides/tooling/reporters#Installed-via-npm");
    cy.get('li a').contains("Merging reports across spec files");
  })