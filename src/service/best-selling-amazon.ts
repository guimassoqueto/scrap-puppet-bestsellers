import puppeteer from 'puppeteer';
import { fakeHeader } from '../helpers/fake-header.js'


export class BestSellingAmazon {
  static async get(urls: string[]): Promise<Set<string>> {
    let products: string[] = []

    const browser = await puppeteer.launch({ headless: "new" })
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders(fakeHeader())
    await page.setViewport({width: 1920, height: 10800})
    page.setDefaultTimeout(120000)

    for (const url of urls) {
      console.log(url)
      await page.goto(url, { waitUntil: "networkidle2" });
      const items = await page.$$eval('div.zg-grid-general-faceout>div>a', anchors => {
        return anchors.map((anchor, _) => anchor.href)
      })
      products = [...products, ...items]
    }
    await browser.close()
    return new Set(products)
  }
}
