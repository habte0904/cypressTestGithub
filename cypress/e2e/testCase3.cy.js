
describe('Each loop', () => {
     it("Testing each and text",()=>{
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.get('.search-button').click()
     cy.get('.products').find('.product').should('have.length',4)
     cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    
     //how to use Each function loop
     cy.get('.products').find('.product').each(($el,index,$list)=>{
      
      const textvalue = $el.find('h4.product-name').text()  //text() method used to get text from browser
      if (textvalue.includes('Carrot')) { //includes function is used to take the file which contains that text
      $el.find('button').click()
      }


      })
     
     
     })
    })
    