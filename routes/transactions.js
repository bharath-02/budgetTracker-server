const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getTransactions,
  getTransaction,
  addTransactions,
  updateTransaction,
  deleteTransactions
} = require('../controllers/transactions');

router
  .route('/')
  .get(auth, getTransactions)
  .post(auth, addTransactions);
  
router
  .route('/:id')
  .put(auth, updateTransaction)
  .delete(auth, deleteTransactions);

router
  .route('/:query')
  .get(auth, getTransaction);

module.exports = router;
