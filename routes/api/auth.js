const express = require('express')
const router = express.Router();

/**  @route Get api/auyh
 * desc Test route
 * accress Public 
*/
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router