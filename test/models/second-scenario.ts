class SecondScenario {
    readonly picture = $('smart-frame');
    readonly shareButton = $('.--share span');
    readonly seIcon = $('.--custom span');

    async hoverPicture() {
        await this.picture.moveTo();
    }

    async verifyShareButton() {
        await expect(this.shareButton).toHaveText('SHARE');
        await expect(this.shareButton).toBeDisplayed();
    }

    async clickSe() {
        await expect(this.seIcon).toHaveText('SE');
        await this.seIcon.click();
    }

    async verifyRedirection() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expect(browser).toHaveUrl('https://smartframe.io/');
    }
}

export default new SecondScenario();
