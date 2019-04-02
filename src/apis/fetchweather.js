import axios from 'axios';

export default axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/'
});

// weather?q=chicago,usa&appid=9befa4810a4222834a98ed625c430be3


// https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=9befa4810a4222834a98ed625c430be3
// https://api.openweathermap.org/data/2.5/weather/q=chicago&appid=9befa4810a4222834a98ed625c430be3