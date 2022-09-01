import RegisterPage from "./PageObject/RegisterPage"

describe("cypress hooks",()=>{
    let dt=''
    before(()=>{
        cy.fixture("example").then(function(data){
            dt=data
        })
    })

    it("Command For Reuse",()=>{
        cy.urls()
        cy.controlTable(dt.name[3], dt.position[2]) 
    })


    it("POM",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        const rp = new RegisterPage();
       
        cy.pom(rp, dt.name[3],dt.email, dt.gender)
    })
    
})