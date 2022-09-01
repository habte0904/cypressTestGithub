class Page{

     getName(){
        return  cy.get("input[name='name']").eq(0)
    }

}
export default Page;