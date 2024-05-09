const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const PORT = 4001;


mongoose.connect(
  "mongodb+srv://user123:wusNLwsnlxfTdkjE@cluster0.o5axeq0.mongodb.net/employee_detail?retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is connected and running on port ${PORT}`);
});
