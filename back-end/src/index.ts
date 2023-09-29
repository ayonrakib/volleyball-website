import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
app.use(cors());
app.use(express.json());
const port = 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
