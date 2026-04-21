import { test, expect } from '@playwright/test';
import { FormSubmissionPage } from '../pages/FormsubmissionPage';
import { contactTestData, emailTestData, nameTestData, dropdownTestData, FeedbackData} from '../utils/FormTestData';

test.describe('Form Submission Page Tests', () => {

  test.beforeEach('Navigate to Form Submission page', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

    await test.step('Navigate to home page', async () => {
      await formPage.navigateToHome();
      await expect(formPage.PageHeader).toBeVisible({ timeout: 10000 });
      await page.waitForLoadState('domcontentloaded');
    });

    await test.step('Click on Form Submission link', async () => {
      await formPage.goToFormSubmissionPage();
      await expect(formPage.heading).toBeVisible({ timeout: 10000 });
      //await page.waitForTimeout(500);
    });
  });

 

  test('Name field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

     await test.step('Validate Empty Name field *Required', async () => {
      await formPage.Submitbutton();
      await expect(formPage.EmptyNameField).toBeVisible();
      await page.waitForTimeout(500);
    });

    await test.step('Min length validation', async () => {
      await formPage.FillMinValueNameField(nameTestData.min);
      await formPage.Submitbutton();
       await expect(formPage.MinValueNameField).toBeVisible();
      await page.waitForTimeout(500);
    });

    await test.step('Max length validation', async () => {
      await formPage.FillMaxValueNameField(nameTestData.max);
      await formPage.Submitbutton();
      await page.waitForTimeout(500);
    });

  });


  test('Email field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
   
     await test.step('Validation Empty Email field *Required', async () => {
      await formPage.Submitbutton();
      await expect(formPage.EmptyEmailField).toBeVisible();
      await page.waitForTimeout(500);
    })

    await test.step('Validate Invalid email enter', async () =>{
       await formPage.InvalidemailFormat(emailTestData.invalidFormat);
       await formPage.Submitbutton();
       await expect(formPage.InvalidEmailFormat).toBeVisible();
       await page.waitForTimeout(500);
    })

  });


   test('Contact field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
   
    await test.step('Validation Empty Contact field *Required', async () => {
      await formPage.Submitbutton();  
      await expect(formPage.EmptyContactField).toBeVisible();
      await page.waitForTimeout(500);
    })

    await test.step('Validate less digit entering', async () =>{
       await formPage.lessdigit(contactTestData.lessDigits);
       await formPage.Submitbutton();
       await expect(formPage.LessDigit).toBeVisible();
       await page.waitForTimeout(500);
    })

     await test.step('Validate more digit entering', async () =>{
       await formPage.moredigit(contactTestData.moreDigits);
       await formPage.Submitbutton();
       await expect(formPage.MoreDigit).toBeVisible();
       await page.waitForTimeout(500);
    })

  });


   test('Radio button field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

    await test.step('Validation Empty Color field *Required', async () => {
      await formPage.Submitbutton();  
      await expect(formPage.EmptyColorField).toBeVisible();
      await page.waitForTimeout(500);
    })
  
    await test.step('Validate radio button to be checked', async() =>{
      await formPage.RadioButtonChecked();
      await expect(formPage.RedColor).toBeChecked();
    })

    await test.step('Validate Radio button is unchecked', async() =>{
      await formPage.RadioButtonUnchecked();
      await expect(formPage.BlueColor).toBeChecked();
      await expect(formPage.RedColor).not.toBeChecked();
    })

  });


    test('Upload file field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

    await test.step('Validation Empty UploadFile field *Required', async () => {
      await formPage.Submitbutton();
      await expect(formPage.EmptyUploadField).toBeVisible();
      await page.waitForTimeout(500);
    })
  
   await test.step('Validate required error message removed after file upload', async() =>{
     await formPage.Submitbutton();
     await expect(formPage.EmptyUploadField).toBeVisible();
     await formPage.UploadFile();
     await expect(formPage.upload).toHaveValue(/SampleVideo\.mp4/); // This is called regex '\.' which matches the actual format
     await expect(formPage.EmptyUploadField).not.toBeVisible();
    //await expect(this.upload.getByText('SampleVideo.mp4')).toBeVisible(); // this line wont work since uploaded file wont be a visibletext
     await page.waitForTimeout(500);
   })

   await test.step('Validate upload another file', async() =>{
     await formPage.UploadNewFile();
     //await expect(formPage.upload).toHaveValue(/SampleVideo\.mp4/);
     await expect(formPage.upload).toHaveValue(/download\.jpg/);
     await page.waitForTimeout(500);
   })

  });



   test('Checkbox field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

   await test.step('Validation Empty Food field *Required', async () => {
      await formPage.Submitbutton();
       await expect(formPage.EmptyFoodField).toBeVisible();
      await page.waitForTimeout(500);
    })

    await test.step('Validate checkbox is ticked', async() =>{
      await formPage.TickCheckbox();
      await expect(formPage.PastaCheckbox).toBeChecked();
      await page.waitForTimeout(500);
    })

    await test.step('Validate Mutiple checkbox to be ticked',async() =>{
      await formPage.MultipleCheckboxTick();
      await expect(formPage.PizzaCheckbox).toBeChecked();
      await expect(formPage.BurgerCheckbox).toBeChecked();
      await page.waitForTimeout(3000);
    })

    await test.step('Validate untick checkbox & error message',async() =>{
      await formPage.UntickCheckBox();
      await expect(formPage.PizzaCheckbox).not.toBeChecked();
      await expect(formPage.PastaCheckbox).not.toBeChecked();
      await expect(formPage.BurgerCheckbox).not.toBeChecked();
      await expect(formPage.UncheckMessage).toBeVisible();
      await page.waitForTimeout(3000);
    })

  });



   test('Dropdown field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

    await test.step('Validation Empty Country field *Required', async () => {
      await formPage.Submitbutton();
      await expect(formPage.EmptyCountryField).toBeVisible();
      await page.waitForTimeout(500);
    })

    await test.step('Validate dropdown value selected is getting displayed', async() =>{
      await formPage.SelectOption();
      await expect(formPage.country).toHaveValue(dropdownTestData.option1);
      await page.waitForTimeout(500);
    })

    await test.step('Validate Select new value from dropdown is getting displayed', async() =>{
      await formPage.SelectNewOption();
      await page.waitForTimeout(500);
      await expect(formPage.country).toHaveValue(dropdownTestData.option2);
      await page.waitForTimeout(500);
    })

    await test.step('Validate Select default value from dropdown & *req err msg', async() =>{
      await formPage.SelectDefaultOption();
      await expect(formPage.country).toHaveValue(dropdownTestData.default);
      await expect(formPage.EmptyCountryField).toBeVisible();
      await page.waitForTimeout(500);
    })
    
  });


  test('Submit form with valid data', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

     await test.step('Validate by submitting form with valid inputs', async() =>{
      await formPage.FormSubmission();
      await expect(formPage.SuccessfullSubmissionToast).toBeVisible();
      await expect(formPage.SuccessfullSubmissionMsg).toBeVisible();
      await expect(formPage.SuccessfullSubmissionSubMsg).toBeVisible();
      await page.waitForTimeout(500);
    })
   
  });


  
  test('Feedback field validation', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);

     await test.step('Validate feeback field before providing input', async() =>{
      await formPage.BeforeFeedbackInput();
      await expect(formPage.placeholderText).toHaveAttribute('placeholder', 'Write Comment...');
      await expect(formPage.FeedbackSubmit).toBeDisabled();
      await page.waitForTimeout(500);
    })

    await test.step('Validate feedback field after providing input', async() =>{
      await formPage.AfterFeedbackInput();
      await expect(formPage.placeholderText).toHaveValue(FeedbackData.FeedbackInput);
      await expect(formPage.FeedbackSubmit).toBeEnabled();
      await expect(formPage.FeedbackCancel).toBeVisible();
      await page.waitForTimeout(2000);
    })

    await test.step('Validate feedback field if the input is getting cleared after clicking cancel', async() =>{
      await formPage.AfterFeedbackInput();
      await expect(formPage.placeholderText).toHaveValue(FeedbackData.FeedbackInput);
      await expect(formPage.FeedbackCancel).toBeVisible();
      await formPage.Feedbackcancel();
      await expect(formPage.placeholderText).not.toHaveValue(FeedbackData.FeedbackInput);
      await expect(formPage.FeedbackCancel).not.toBeVisible();
      await expect(formPage.FeedbackSubmit).toBeDisabled();
    })

    await test.step('Validate feedback field by submitting the input', async()=>{
      await formPage.AfterFeedbackInput();
      //await formPage.Feedbacksubmit();
      //await formPage.ClosePopup();
      //await expect(formPage.Feedbackcontent).toHaveText(FeedbackData.FeedbackInput);
    })
   
  });

});