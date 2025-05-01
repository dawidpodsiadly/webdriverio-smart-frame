class Alerts {
    readonly okCookiesElement = $("#cookieChoiceDismiss");

    async confirmCookies() {
        await this.okCookiesElement.click();
    }
}

export default new Alerts();
