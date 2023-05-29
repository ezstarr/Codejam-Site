const express = require("express");
const { Router } = require("express");
export async function handler(event, context) {
  const api = express();
  const router = Router();
  router.get('/hello', (req, res) => res.send('Hello World!'));
  api.use('/api/', router);
  return serverless(api)(event, context);
}