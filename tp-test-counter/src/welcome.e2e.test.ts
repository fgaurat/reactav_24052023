import puppeteer from "puppeteer"


describe('Welcome test', () => {
    let browser
    let page


    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless:false,
            args:["--window-size=1920,1080"]
        })
        
        
        page = await browser.newPage()
    });
  
    it('Welcome Vite + React"', async () => {
      await page.goto("http://localhost:5173/")
      await page.waitForSelector("h1")
      
      const h1Text = await page.evaluate(() => {
        return document.querySelector('h1')?.textContent;
      }); 
      
        await expect(h1Text).toContain('Vite + React');
    });


    afterAll(()=>browser.close())
  });