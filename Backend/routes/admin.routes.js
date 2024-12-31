const router = require("express").Router();
const isLogedIn = require("../middlewares/isLogedIn");
const { addBook } = require("../controllers/admin/addBook.js");
const { updateBook } = require("../controllers/admin/updateBook.js");
const { deleteBook } = require("../controllers/admin/deleteBook.js");

//Added Book
router.post("/addbook", isLogedIn, addBook);

//Update Book
router.put("/updatebook", isLogedIn, updateBook);

router.delete("deletebook", isLogedIn, deleteBook);

const { allBooks } = require("../controllers/admin/allBooks.js");
const { getUsers } = require("../controllers/admin/getAllUsers.js");
const { totalOrders } = require("../controllers/admin/totalOrders.js");

//Added Books
router.post("/addbook", isLogedIn, addBook);

//Update Books
router.put("/updatebook", isLogedIn, updateBook);

//Delete Books
router.delete("/deletebook", isLogedIn, deleteBook);

//Read Books
router.get("/allbooks", isLogedIn, allBooks);

//See users
router.get("/allusers", isLogedIn, getUsers);

//Get all the orders.
router.get("/orders", isLogedIn, totalOrders);

module.exports = router;
