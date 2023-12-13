const express = require('express');

const app =express();
const PORT = 5000;

//registered static files (CLIENT)
app.use(express.static('server/public'));


//Listen... runs my app
app.listen(PORT, function() {
  console.log(`'server is running on port ${PORT}'`)
});