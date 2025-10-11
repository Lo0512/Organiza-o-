const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/insight', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Você é uma IA especialista em desenvolvimento pessoal, produtividade e neurociência. Gere insights práticos e motivadores com base no tema fornecido." },
        { role: "user", content: `Me dê um insight sobre o tema: ${prompt}` }
      ],
    });

    res.json({ insight: completion.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao gerar insight.");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
