import { Page, Locator, expect } from '@playwright/test';
import { contactTestData, dropdownTestData, emailTestData, FeedbackData, nameTestData, ValidData } from '../utils/FormTestData';

export class FormSubmissionPage {
  readonly page: Page; // assigning type
  readonly PageHeader;
  readonly formSubmissionLink: Locator;
  readonly heading: Locator;
  readonly SubmitButton: Locator;
  readonly SuccessfullSubmissionToast: Locator;
  readonly SuccessfullSubmissionMsg: Locator;
  readonly SuccessfullSubmissionSubMsg: Locator;
  readonly Closepopup: Locator;

  //Name Field variables
  readonly EmptyNameField: Locator;
  readonly MinValueNameField: Locator;
  readonly name: Locator;
  

 // Email field variables
  readonly email: Locator;
  readonly EmptyEmailField: Locator;
  readonly InvalidEmailFormat: Locator;


 // Contact field variables 
  readonly contact: Locator;
  readonly EmptyContactField: Locator;
  readonly LessDigit: Locator;
  readonly MoreDigit: Locator;


  // Upload file variables
  readonly upload: Locator;
  readonly EmptyUploadField: Locator;


  // Radio field variables
  readonly EmptyColorField: Locator;
  readonly RedColor: Locator;
  readonly GreenColor: Locator;
  readonly BlueColor: Locator;
  readonly YellowColor: Locator;


 //Checkbox field variables
  readonly EmptyFoodField: Locator;
  readonly UncheckMessage: Locator;
  readonly PastaCheckbox: Locator;
  readonly PizzaCheckbox: Locator;
  readonly BurgerCheckbox: Locator;
  readonly SandwichCheckbox: Locator;


 //Dropdown field variables
  readonly country: Locator;
  readonly EmptyCountryField: Locator;


  //Date field variable
  readonly date: Locator;


  //Feedback variables
  readonly Feedbackfield: Locator;
  readonly placeholderText: Locator;
  readonly FeedbackSubmit: Locator;
  readonly FeedbackCancel: Locator;
  readonly Feedbackcontent: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.PageHeader = page.getByRole('heading', {name: 'QA Practice Site'});
    this.formSubmissionLink = page.getByText('Form Submission');
    this.heading = page.getByRole('heading', { name: 'Form Submission' });
    this.SubmitButton = page.getByRole('button', {name: 'Submit'}).first();
    this.SuccessfullSubmissionToast = page.getByText('Form submit successfully.');
    this.SuccessfullSubmissionMsg = page.getByText('successfully submitted').first();
    this.SuccessfullSubmissionSubMsg = page.getByText('Congratulations. You have successfully submitted user registration form');
    this.Closepopup = this.page.getByRole('button', { name: 'Close' });

    //Constructor for Name field
    this.name = page.locator("//input[@id='name']");
    this.EmptyNameField = page.getByText('Name is a required field');
    this.MinValueNameField = page.getByText('Name must be at least 2 characters');
  

   // Constructor for Email field
    this.email = page.locator("//input[@id='email']");
    this.EmptyEmailField = page.getByText('Email is a required field');
    this.InvalidEmailFormat = page.getByText('Email must be a valid email');


// Constructor for contact field
    this.contact = page.locator("//input[@id='contact']");
    this.EmptyContactField = page.getByText('Contact is a required field');
    this.LessDigit = page.getByText('Contact must be at least 11 characters');
    this.MoreDigit = page.getByText('Contact must be at most 14 characters');

 // Constructor for Upload field
    this.upload= page.locator('#file');
    this.EmptyUploadField = page.getByText('Upload File is a required field');


  // Constructor for Color field
    this.EmptyColorField = page.getByText('Color is a required field');
    this.RedColor = page.getByLabel('Red');
    this.GreenColor = page.getByLabel('Green');
    this.BlueColor = page.getByLabel('Blue');
    this.YellowColor = page.getByLabel('Yellow');

  // Constructor for Food field
    this.EmptyFoodField = page.getByText('Food is a required field');
    this.UncheckMessage = page.getByText('Please select at least one option');
    this.PastaCheckbox =page.getByLabel('Pasta');
    this.PizzaCheckbox = page.getByLabel('Pizza');
    this.BurgerCheckbox = page.getByLabel('Burger');
    this.SandwichCheckbox = page.getByLabel('Sandwich');

   // Constructor for Country field
     this.country = page.locator('#country');
    this.EmptyCountryField = page.getByText('Country is a required field');

    // Constructor for Date field
    this.date = page.locator('#date');

    // Constructor for Feedback field
    this.Feedbackfield = page.locator('#feedack');
    this.placeholderText = page.getByPlaceholder('Write Comment...');
    this.FeedbackSubmit = page.locator('#feedback').getByRole('button', { name: 'Submit' });
    this.FeedbackCancel = page.locator('#feedback').getByRole('button', { name: 'Cancel' });
    this.Feedbackcontent = this.page.locator('#scrollableDiv .feed-content p').first();
  }

  async navigateToHome() {
    await this.page.goto('https://practice.qabrains.com/');
  }

  async goToFormSubmissionPage() {
    await this.formSubmissionLink.click();
  }


  // Form page submit button click
  async Submitbutton(){
    await this.SubmitButton.click();
  }

  async ClosePopup(){
    await this.Closepopup.click();
  }


  //*******Name Field fns*********//
  
  //Enter min value 
  async FillMinValueNameField(value: string){
  await this.name.fill(value); 
}

//Enter long value
async FillMaxValueNameField(value: string){
  await this.name.fill(value);
}


 //*******Email Field fns*********//

  //Enter invalid email 
  async InvalidemailFormat(value: string){
   await this.email.fill(value);
  }


  //*******Contact Field fns*********//

  //Enter less digit
  async lessdigit(value: string){
    await this.contact.fill(value);
  }

  //Enter more digit
  async moredigit(value: string){
  await this.contact.fill(value);
  }


  //*******Radio field fns *******//

  // Checking radio button is checked..
  async RadioButtonChecked(){
    await this.RedColor.click();
  }

  // Checking radio button is unchecked
  async RadioButtonUnchecked(){
    await this.BlueColor.click();
  }


  //*********Upload field fns ********//

  //After upload a file required message gets removed
  async UploadFile(){
    await this.upload.setInputFiles('utils/SampleVideo.mp4');
  }

  //Uploading another file
 async UploadNewFile() {
  await this.upload.setInputFiles('utils/SampleVideo.mp4');
  //await this.upload.clear();
  await this.upload.setInputFiles('utils/download.jpg');
}


//********Checkbox fns *********//

  //Tick a checkbox and check if its checked
  async TickCheckbox(){
    await this.PastaCheckbox.check();
  }


  //Check mutiple checkbox and check if both check boxes ticked
  async MultipleCheckboxTick(){
    await this.PizzaCheckbox.check();
    await this.BurgerCheckbox.check();
  }


  //Untick the checkboxs and check if its unchecked with error msg
 async UntickCheckBox(){
  await this.PizzaCheckbox.uncheck();
  await this.PastaCheckbox.uncheck();
  await this.BurgerCheckbox.uncheck();
 }



 //********* Dropdown fns *********//

  // Select a option from dropdown and check its visibility
  async SelectOption(){
    await this.country.click();
    await this.country.selectOption(dropdownTestData.option1);
  }

  // Select Different option from dropdown and check the value
  async SelectNewOption(){
    await this.country.click();
    await this.country.selectOption(dropdownTestData.option2);
  }

  //Select Default value in dropdown & err msg
  async SelectDefaultOption(){
   await this.country.click();
   await this.country.selectOption(dropdownTestData.default);
  }


  //valid data form submission
  async FormSubmission(){
    await this.name.fill(ValidData.name);
    await this.email.fill(ValidData.email);
    await this.contact.fill(ValidData.contactno);
    await this.date.fill(ValidData.date);
    await this.upload.setInputFiles('utils/download.jpg');
    await this.RedColor.click();
    await this.PizzaCheckbox.check();
    await this.country.selectOption(ValidData.select);
    await this.SubmitButton.click();
  }

  //*******Feedback fns ********//
 async BeforeFeedbackInput(){
  await this.placeholderText.fill(FeedbackData.empty);
 }

 async AfterFeedbackInput(){
  await this.placeholderText.fill(FeedbackData.FeedbackInput);
 }

 async Feedbacksubmit(){
   await this.FeedbackSubmit.click();
 }

 async Feedbackcancel(){
  await this.FeedbackCancel.click();
 }


}