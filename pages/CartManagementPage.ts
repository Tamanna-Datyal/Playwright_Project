class CartManagementPage {
   public Product = 'xpath=(//ul//li//a[@href = "/computers"])[1]'
   public selectProduct = 'text=Desktops '
   public addToCartButton = 'xpath=(//button[@type="button"])[1]'
   public shoppingCart = 'xpath=//li[@id="topcartlink"]'
   public shoppingCartText = 'xpath=//div//table[@class="cart"]'

}export default CartManagementPage;