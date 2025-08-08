import { BeforeAll, setDefaultTimeout} from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

setDefaultTimeout(120*1000)
let browser: Browser;
let context: BrowserContext;
export let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});




