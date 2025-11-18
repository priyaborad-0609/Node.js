import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(process.cwd(), "data.json");

if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

function loadData() {
  const fileData = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(fileData);
}

function saveData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}


// GET ALL TODOS
app.get("/todos", (req, res) => {
  const data = loadData();
  res.json(data);
});

// ADD TODO
app.post("/todos", (req, res) => {
  const { text, description } = req.body;

  const data = loadData();

  const newTodo = {
    id: Date.now(),
    text,
    description: description || ""
  };

  data.push(newTodo);
  saveData(data);

  res.json(newTodo);
});

// UPDATE TODO
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { text, description } = req.body;

  const data = loadData();
  const index = data.findIndex(todo => todo.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  data[index].text = text;
  data[index].description = description || "";

  saveData(data);

  res.json(data[index]);
});

// DELETE TODO
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  let data = loadData();
  data = data.filter(todo => todo.id != id);

  saveData(data);

  res.json({ message: "Deleted", id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
