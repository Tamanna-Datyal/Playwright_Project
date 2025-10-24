class CartManagementPage {
   public Product = 'xpath=(//ul//li//a[@href = "/computers"])[1]'
   public selectProduct = 'text=Desktops '
   public addToCartButton = 'xpath=(//button[@type="button"])[1]'
   public shoppingCart = 'xpath=//li[@id="topcartlink"]'
   public shoppingCartText = 'xpath=//div//table[@class="cart"]'
   public Hometext = '//div[@class="header-logo"]'
   public searchProductglobal = 'xpath=//input[@placeholder="Search store"]'
   public globalsearchbutton = 'xpath=(//button[@type="submit"])[1]'
   public searcproduct = 'xpath=//input[@class="search-text"]'
   public presseenter = 'xpath=(//button[@type="submit"])[2]'
   public noproductfound = 'xpath=//div[@class="no-result"]'
   public nodatafoundtext = 'xpath=//div[@class="no-data"]'

}export default CartManagementPage;