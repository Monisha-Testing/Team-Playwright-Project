import {test,expect} from '@playwright/test';
import { RegistrationPage } from '../pages/RegisterPage';
test ('Sample Registration Test', async({page})=>{
    const registration =new RegistrationPage(page);

    // Launching the website

    await registration.goto();

    // input all fields and submit signup button

    await registration.registerUser("divya", "divya@gmail.com", 'desi@123', 'desi@123');

    // form submission

    await registration.verifyRegistrationSuccess();
    
})