const express = require("express");
const app = express();
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

// Mongoose Connection
require("./config/mongooseConnection")();

// Requiring user Route.
const userRoute = require("./routes/user.routes");
const isLogedIn = require("./middlewares/isLogedIn");
const admin = require("./routes/admin.routes");
// Setup Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" },
  })
);

app.use(
  cors({
    origin: "http:localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    Credential: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
  })
);

// Main routes.
app.get("/", (req, res) => {
  res.send("Hii");
});

//User

app.use("/user", userRoute);

//Admin routes
app.use("/admin", isLogedIn, admin);

app.listen(process.env.PORT, () => {
  console.log("Server is listening on ", process.env.PORT);
});
