import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const searchApi = async (searchTerm) => {
       try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {
        setErrMessage('Something went wrong');
    }
    };
    
return  (
<View>
  
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}/>
        <Text>{errMessage}</Text>
        <Text>We have found {results.length} results</Text>

   
</View>
);};

const styles = StyleSheet.create({

});

export default SearchScreen;