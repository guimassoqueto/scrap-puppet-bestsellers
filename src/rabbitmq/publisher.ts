import client, { Channel, Connection } from "amqplib";
import { RABBITMQ_SEND_QUEUE, RABBITMQ_URL } from "../settings.js";

type Message = {
  "amazon-colly": string[];
};

export class RabbitMQPublisher {
  static async publish(message: Message) {
    const connection: Connection = await client.connect(RABBITMQ_URL);
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(RABBITMQ_SEND_QUEUE, { durable: false });
    await channel.prefetch(1);
    if (["number", "string"].includes(typeof message)) {
      channel.sendToQueue(
        RABBITMQ_SEND_QUEUE,
        Buffer.from(JSON.stringify(message)),
        {
          persistent: true,
        },
      );
    }

    if (typeof message == "object") {
      channel.sendToQueue(
        RABBITMQ_SEND_QUEUE,
        Buffer.from(JSON.stringify(message)),
        { persistent: true },
      );
    }

    setTimeout(() => {
      channel.close();
      connection.close();
    }, 50);
  }
}
