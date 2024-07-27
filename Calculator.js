const express = require('express');
const axios = require('axios');

const app = express();
const windowSize = 10;
const numbers = [];
const windowPrevState = [];

app.get('/numbers/:numberid', async (req, res) => {
  const numberId = req.params.numberid;
  const url = `http://20.244.56.144/test/${numberId === 'p' ? 'primes' : numberId === 'f' ? 'fibo' : numberId === 'e' ? 'even' : 'rand'}`;

  try {
    const response = await axios.get(url, { timeout: 500 });
    const newNumbers = response.data.numbers;

    // Ignore duplicates
    const uniqueNewNumbers = newNumbers.filter((number) => !numbers.includes(number));

    // Update windowPrevState
    windowPrevState.push(...numbers);

    // Update numbers
    numbers.push(...uniqueNewNumbers);

    // Limit stored numbers to the window size
    if (numbers.length > windowSize) {
      numbers.shift();
    }

    // Calculate average if stored numbers are fewer than the window size
    const average = numbers.length < windowSize ? numbers.reduce((a, b) => a + b, 0) / numbers.length : numbers.slice(-windowSize).reduce((a, b) => a + b, 0) / windowSize;

    // Respond with numbers stored before and after the latest API call, along with the average
    res.json({
      windowPrevState,
      windowCurrState: numbers,
      numbers: newNumbers,
      avg: average.toFixed(2),
    });

    // Reset windowPrevState
    windowPrevState.length = 0;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(9876, () => {
  console.log('Average Calculator Microservice listening on port 9876');
});
