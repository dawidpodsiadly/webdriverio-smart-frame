class FirstScenario {
    readonly bottomCaptionText = 
        'An image (from Latin: imago) is an artifact that depicts visual perception, such as a photograph or other two-dimensional picture, that resembles a subject—usually a physical object—and thus provides a depiction of it. In the context of signal processing, an image is a distributed amplitude of color(s). A pictorial script is a writing system that employs images as symbols for various semantic entities, rather than the abstract signs used by alphabets.';

    readonly scriptCaptionText = 
        '<script src="https://embed.smartframe.io/ee5ba7bdc441bb5c2122f6157dea0175.js" data-image-id="marivi_pazos_4kx1uoaaohy_unsplash_1622111934764" data-width="100%" data-max-width="4704px" data-theme="security"></script>';

    readonly picture = $('#post-body-2195234803014015561');
    readonly bottomCaption = $('.caption-box p');
    readonly bottomCaptionHref = $('.caption-box a');
    readonly embedButton = $('.--embed span');
    readonly embedScriptCaption = $('.share__script');
    readonly embedHelpLink = $('.share__terms a');
    readonly embedTerms = $('.embed-terms');
    readonly copyCodeButton = $('button[data-action-button="copy-embed-code"]');

    async hoverPicture() {
        await this.picture.moveTo();
        await browser.pause(1000);
    }

    async openEmbedLayer() {
        await expect(this.embedButton).toHaveText('EMBED');
        await this.embedButton.click();
    }

    async verifyBottomCaption() {
        await expect(this.bottomCaption).toHaveText(this.bottomCaptionText);
        await expect(this.bottomCaptionHref).toHaveText('Latin: imago');
        await expect(this.bottomCaptionHref).toHaveHref('https://en.wikipedia.org/wiki/Image');
    }

    async verifyEmbedLayer() {
        await expect(this.embedScriptCaption).toHaveText(this.scriptCaptionText);
        await expect(this.embedHelpLink).toHaveText('Help');
        await expect(this.embedHelpLink).toHaveHref('https://smartframe.io/embedding-smartframes/?ref=liveEmbed');
        await expect(this.embedTerms).toHaveText('Embed T&Cs');
        await expect(this.embedTerms).toHaveHref('https://smartframe.io/embed-terms-conditions/?ref=liveEmbed');
        await expect(this.copyCodeButton).toHaveText('COPY CODE');
    }
}

export default new FirstScenario();
