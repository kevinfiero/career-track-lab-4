const express = require('express');
const app = express();
const Stack = require('./stack');
const { logic, cleanData } = require('./utils');

app.use(express.json());

app.post('/lint', (req, res) => {
    console.log(req.body);
    const arrayOfBrackets = cleanData(req);
    const val = logic(arrayOfBrackets);

    res.send(val);
})

app.listen(7890, () => {
    console.log('started on 7890');
});