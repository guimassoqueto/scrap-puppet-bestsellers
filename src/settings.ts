import "dotenv/config";

export const AMAZON_BESTSELLING_URLS = [
  "https://www.amazon.com.br/gp/bestsellers/grocery/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/grocery/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/home/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/home/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/kitchen/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/kitchen/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/books/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/books/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/baby-products/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/baby-products/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/beauty/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/beauty/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/pet-products/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/pet-products/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/office/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/office/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/electronics/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/electronics/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/toys/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/toys/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/computers/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/computers/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/hi/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/hi/?ie=UTF8&pg=2",
  "https://www.amazon.com.br/gp/bestsellers/videogames/?ie=UTF8&pg=1",
  "https://www.amazon.com.br/gp/bestsellers/videogames/?ie=UTF8&pg=2",
];

export const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER ??
  "user";
export const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS ??
  "password";
export const RABBITMQ_DEFAULT_HOST = process.env.RABBITMQ_DEFAULT_HOST ??
  "localhost";
export const RABBITMQ_SEND_QUEUE = process.env.RABBITMQ_SEND_QUEUE ?? "hello";
export const RABBITMQ_URL =
  `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@${RABBITMQ_DEFAULT_HOST}:5672`;
