import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../image-assets/Navigation Bar/Search.png';
import translateIcon from '../image-assets/Navigation Bar/Translation.png';

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState("");
    
    let navigate = useNavigate();
    
    const handleChange = (e) => {
        // remove punctuation
        let input = e.target.value;
        setSearchInput(input);

    }
    
    const filterPunctuation = (searchInput) => {

        let p = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        
        let chars = searchInput.split('');

        for (let i = 0; i < chars.length; i++) {
            if (p.includes(chars[i])) {
                chars[i] = " ";
            }
        }

        const filtered = chars.join('');
        return filtered;
    }

    const showResults = (e) => {
        
        e.preventDefault();

        const filteredInput = filterPunctuation(searchInput);
        console.log(filteredInput);
        let url = `https://api.bing.microsoft.com/v7.0/custom/search?q=${filteredInput}&customconfig=6112451c-4091-4745-a739-f2538d4ec026&mkt=en-US`;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "17d94235cd25483e845ef1a569425c76");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                //console.log(xhr.responseText);
                const res = JSON.parse(xhr.responseText);
                console.log(res);
                //console.log(res.webPages.value[0].url)
                setResults(res);
                navigate('/SearchResults', {state: {results: res}});
            }
        };

        xhr.send();
    }

    return (
        <div className='searchbar'>
            <form action='/' method='get'>
                <input 
                type='text' 
                id='searchbar-input'
                name='s'
                placeholder= ''
                onChange={handleChange}
                />
                <button type='submit' onClick={showResults}><img src={searchIcon} alt='search' /></button>
                <img src={translateIcon} alt='translate' />
            </form>
        </div>
  )
}

export default SearchBar