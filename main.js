import express from "express";
import cors from "cors"; // ✅ Import CORS

const app = express();
const PORT = 3000;

app.use(cors()); // ✅ Enable CORS
app.use(express.json()); // ✅ Middleware to parse JSON requests

// 🚗 Cars Endpoint
app.get("/cars", (req, res) => {
  const cars = [
    { id: 1, brand: "Toyota", model: "Corolla" },
    { id: 2, brand: "BMW", model: "M3" },
    { id: 3, brand: "Tesla", model: "Model S" },
  ];
  res.json({ message: "Available Cars", data: cars });
});

// 📚 Books Endpoint
app.get("/books", (req, res) => {
  const books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  ];
  res.json({ message: "Available Books", data: books });
});

// 👤 Users Endpoint
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  res.json({ message: "Registered Users", data: users });
});

// Default Welcome Route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the API!");
});

// Start the server
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
