import { AMAZON_BESTSELLING_URLS } from "./settings.js"
import { BestSellingAmazon } from "./service/best-selling-amazon.js"
import { extractPidFromUrl } from "./helpers/extract-pid-from-url.js"
import { RabbitMQPublisher } from "./rabbitmq/publisher.js"


try {
  const itemsURL = await BestSellingAmazon.get(AMAZON_BESTSELLING_URLS)
  const pidList = extractPidFromUrl(itemsURL)
  await RabbitMQPublisher.publish({ "amazon-colly": pidList })
  console.log(`[x] ${pidList.length} items sent`)
} catch (error) {
  console.error(error)
}
