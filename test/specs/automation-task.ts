import Alerts from '../models/alerts';
import FirstScenario from '../models/first-scenario';
import SecondScenario from '../models/second-scenario';
import { config } from '../wdio.conf';

describe('Both scenarios testing', () => {
    beforeEach(async () => {
        await browser.url(config.baseUrl);
        await Alerts.confirmCookies();
    });

    it('1 Scenario - Verifies bottom caption and embed layer', async () => {
        await FirstScenario.hoverPicture(); 
        await browser.switchToFrame(0);
        await FirstScenario.verifyBottomCaption();
        await FirstScenario.openEmbedLayer();
        await FirstScenario.verifyEmbedLayer();
    });

    it('2 Scenario - Verifies share button and SE redirection', async () => {
        await SecondScenario.hoverPicture();
        await SecondScenario.verifyShareButton();
        await SecondScenario.clickSe();
        await SecondScenario.verifyRedirection();
    });
});
