// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("controlTable",(name, position)=>{

    cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
        let txt = $el.text()
        if(txt.includes(position)){
            cy.get("tr td:nth-child(2)").eq($index).prev().then((tname)=>{
                let m = tname.text()
                expect(m).to.be.equal(name)
            })
        }
    })
})


Cypress.Commands.add("urls",function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
})


Cypress.Commands.add("pom",(p,name,email, gender)=>{
    p.getName().eq(0).type(name)
    p.getEmail().type(email)
    p.getGender().select(gender).should('have.value',"Female")
})

