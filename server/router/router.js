const router = require('express').Router();

const {getFunc, postFunc, updateFunc, deleteFunc} = require('../controllers/controllers');

router.get('/', getFunc);
router.post('/', postFunc);
router.put('/:id', updateFunc);
router.delete('/:id', deleteFunc);

module.exports = router; 