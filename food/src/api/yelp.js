import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
         'Bearer EfRsJwlJcJX0FM209k9Cbj-ysvhc0mz7UJOfsQbx_erFVX0aT5hGwGjSd1yGAlTgPxO2dbOxY5ZOVb_JPwHL-3t05o0xY5hs6eHIA_rK72dDxMyBrcypN4K7snFuXXYx'
    }
});

