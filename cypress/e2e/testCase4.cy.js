describe("Handling Web Elements",()=>{
    before(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Handling Alert",()=>{
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#name").type("gg")
        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()

        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Hello gg, share this practice page and share your knowledge");

        })

        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
            return true;
        })
    })

  /*   it("Handling Table",()=>{
       // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el,$index,$list)=>{

           const text = $el.text()

           if(text.includes("Engineer")){
               cy.get('tr td:nth-child(2').eq($index).prev().then(function(price){
                const priceText=price.text()
                expect(priceText).to.eq('Alex')

            })
           }
           
        })
    })
 */
    it("Handling Mouse Over",()=>{
       // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('div .mouse-hover-content').invoke("show")
        cy.contains('Top').click()
        cy.url().should('include','top')

        //how to click hidden button or link with out hover, using{force:true}
        cy.contains('Top').click({ force:true})
        cy.url().should('include','top')
    })


})
