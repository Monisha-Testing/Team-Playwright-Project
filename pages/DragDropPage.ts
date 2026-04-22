import { Page, Locator, expect } from '@playwright/test';

export class DragDropPage {

    //drag & drop page variables
    readonly DragDroppage: Locator;
    readonly DragdropHeading: Locator;
    readonly source: Locator;
    readonly Destination: Locator;
    readonly Dropped = 'Dropped!';
    readonly Dragme = 'Drag Me';


    constructor(page: Page) {

        //
        this.DragDroppage = page.getByText('Drag and Drop List');
        this.DragdropHeading = page.getByRole('heading', { name: 'Drag & Drop' });
        this.source = page.getByText('Drag Me');
        this.Destination = page.locator('div.max-w-96');
        //this.Dropped = page.getByText('Dropped!');
    }

    async gotoDragDropPage() {
        await this.DragDroppage.click();
    }

    async draganddrop() {
        await this.source.dragTo(this.Destination);
    }

}