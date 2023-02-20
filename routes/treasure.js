const router = require('express').Router();
const treasure = require('../models/treasure');


// CRUD
// -- <Create> --
// /api/treasure/
router.post("/", (request, response) => {
    
    // Fetch
    data = request.body;
    
    // Upload
    treasure.insertMany(data)
        .then(data => { 
            response
                .status(200)
                .send(data) 
        })
        .catch(err => {
            response
                .status(500)
                .send({'msg': 'The server is on fire, please try again later'})
        })

})

// -- </Create> --
// -- <Read> --

// All

// Specific

// -- </Read> --
// -- <Update> --


// -- </Update> --
// -- <Delete> --

module.exports = router;