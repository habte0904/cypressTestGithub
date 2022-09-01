
describe("First Cypress project",function(){
  
  it("visit url",()=>{
    cy.visit("https://www.google.com")
    cy.get('.gLFyf').type("hello world")
    
  })

})


