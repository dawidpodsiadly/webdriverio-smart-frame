class Alerts {
    readonly okCookiesElement = $("#cookieChoiceDismiss");

    async confirmCookies() {
        const el = await this.okCookiesElement;
        await el.click();
    }
}

export default new Alerts();
