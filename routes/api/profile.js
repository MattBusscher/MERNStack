const express = require('express')
const router = express.Router();

/**  @route Get api/profile
 * desc Test route
 * accress Public 
*/
router.get('/', (req, res) => res.send('profile route'));

module.exports = router