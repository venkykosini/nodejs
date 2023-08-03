const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Backend API endpoint example
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend API!" };
  res.json(data);
});

// Serve the frontend from the public directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
