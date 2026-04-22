import { Page, Locator, expect } from "@playwright/test";

export class RegistrationPage{

    readonly page:Page;

    // define all fields

       readonly nameInput:Locator;
       readonly selectcountryDropdown: Locator;
       readonly accounttypeDropdown: Locator;
       readonly emailInput: Locator;
       readonly passwordInput: Locator;
       readonly confirmpasswordInput: Locator;
       readonly signupButton: Locator;
       readonly successToast: Locator;
       readonly successDescription: Locator;
       readonly loginButton: Locator;

    constructor (page: Page) {

        this.page=page;

        this.nameInput=page.locator ("#name");
        this.selectcountryDropdown=page.locator("#country");
        this.accounttypeDropdown=page.locator("#account");
        this.emailInput=page.locator("#email");
        this.passwordInput=page.locator("#password");
        this.confirmpasswordInput=page.locator("#confirm_password");
        this.signupButton=page.locator('button:has-text("SIGNUP")');

        this.successToast=page.getByText('REGISTRATION SUCCESSFUL').first ();       
        this.successDescription=page.getByText ('Congratulations. You have successfully logged in');
        this.loginButton=page.locator('button', {hasText:'LOGIN'});

        }

        async goto ()
        {

           await this.page.goto("https://practice.qabrains.com/registration");
        }

        async registerUser(name:string, email:string, password:string, confirmpassword:string)
       {
           await this.nameInput.fill(name);

            // selecting option from country and account type dropdowns

            await this.selectcountryDropdown.waitFor();
            await this.selectcountryDropdown.selectOption({label: 'Indonesia'})

            await this.selectcountryDropdown.waitFor();
            await this.accounttypeDropdown.selectOption({label: 'Engineer'})
            
        
            //  textbox fields

            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.confirmpasswordInput.fill (confirmpassword);
            await this.signupButton.click();
        }

          
        
            
            async verifyRegistrationSuccess()

            {

                await expect (this.successToast).toBeVisible();
                await expect (this.successDescription).toBeVisible();
                await expect (this.loginButton).toBeVisible();
            }

}
