///<reference types="cypress-iframe" />
import 'cypress-iframe'
import Page from './PageObject1/page1'


describe("Handling Iframe and Fixture",()=>{
    let dt=''
   
    before(()=>{
        cy.fixture("day5Fixtures").then( data=>{
            dt=data
        })
    })

  

    it("frame",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/",{timeout:10000})

        cy.frameLoaded("#courses-iframe")
        cy.wait(2000)
        cy.iframe().find("a[href='mentorship']").eq(0).click()
       
        
    })

    it("Fixture",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
       
        const p = new Page()
        p.getName().type(dt.name).should('have.value',"Tigist")

        cy.get("input[name='email']")
            .type(dt.email)
            .should('have.value',dt.email)

        cy.get('select').select(dt.gender)
            .should('have.value',dt.gender)
     

    })

})