import "dotenv/config";
import express from "express";
import cors from "cors";

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.listen(process.env.PORT, () =>
  console.log(`API subiu com sucesso na porta ${process.env.PORT}`)
);
