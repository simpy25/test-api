const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) =>  {

   let hostName_header = req.header("host"); //dotnetpattern.com
    res.send({
        msg:'ttest',
        host: hostName_header
    });
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));