// brings in express
const express = require('express') 

// initialise app variable with exp
const app = express()

// test single end point
app.get('/', (req, res) => res.send('API Running')  )

// listen on a port || then locally
const PORT = process.env.PORT || 5000

// once it connects, call back does something
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// In postman get request to localhost:5000 
// response is "API Running"