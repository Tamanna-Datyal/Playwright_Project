class UserRegistrationPage {
    public registrationPage = 'xpath=//a[@class="ico-register"]'
    public registerText = 'xpath=//div[@class="page-title"]//h1'
    public genderselection = 'xpath=(//input[@type="radio"])[2]'
    public firstName = 'xpath=//input[@id="FirstName"]'
    public lastName = 'xpath=(//input[@type="text"])[3]'
    public email = 'xpath=(//input[@type="email"])[1]'
    public companyName ='xpath=(//input[@type="text"])[4]'
    public password = 'xpath=//input[@name="Password"]'
    public confirmPassword = 'xpath=(//input[@type="password"])[2]'
    public registerButton = 'xpath=(//button[@type="submit"])[2]'
    public registrationCompleteText = 'xpath=//div[@class="result"]'
    public continueText = 'xpath=//a[@class="button-1 register-continue-button"]'


}export default UserRegistrationPage;