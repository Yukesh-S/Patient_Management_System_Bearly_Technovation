const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authenticate = require("./middleware/Authenticate");
const MasterRouter = require("./Route/Master");

const LoginRouter = require("./Route/Login");
const fs = require("fs");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const notFoundResponse = require("./middleware/notFoundResponse");
const logger = require("./utils/logger");

const path = require("path"); //



const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const logsDir = path.join(__dirname, "logs");

// Cache-Control middleware to prevent caching
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

app.use("/logs", express.static(logsDir));

// Serve individual log files
app.get("/api/logs/:type/:date", (req, res) => {
  const { type, date } = req.params;
  const filename = `TCMSWeb-${date}.log`; // Construct the full filename dynamically
  const filePath = path.join(logsDir, type, filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Log file not found");
  }
});

// logger middleware
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.path}`);
  next();
});


// routes
// authendication middleware
app.use(authenticate);

// routers
app.use("/api/master", MasterRouter);
app.use("/api/login", LoginRouter);



// 404 response
app.use(notFoundResponse);

// Centralized Error Handling Middleware
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
