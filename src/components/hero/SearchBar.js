import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useScrollTrigger } from '@material-ui/core';
import './SearchBar.css'
import {Link} from 'react-router-dom'
import Result from '../../pages/Result';

const SearchBar = () => {
    const [clicked, setIsClicked] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const loadMedicines = function () {
            axios.get("https://protected-hamlet-25972.herokuapp.com/api/medicines/")
                .then(response => {
                    // console.log(response.data.data);
                    setMedicines(response.data.data);
                });

        }

        loadMedicines();
    }, [])


    // const onSearchClickHandler = () => {
    //     <Result/>

    // }

    const onSuggestionHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {


            matches = medicines.filter(medicine => {
                const regex = new RegExp(`${text}`, "gi");
                return medicine.nameOfMed.match(regex);
            })
        }
        //console.log(matches);
        setSuggestions(matches)
        setText(text)
    }



    return (
        <div > 
            <div className="bar_and_button">
                <div className="bar">
                    <input type="text"
                        placeholder="Enter medicine name"
                        onChange={e => onChangeHandler(e.target.value)} style={{ marginTop: 20 }}
                        value={text} />

                </div>
                <Link to={
                    {
                        pathname:'/result',
                        search: `?medicineName=${text}`
                    }
                }><button /*onClick={()=>{setIsClicked(true)}} */ >Search</button></Link>
            </div>
            <div className="parent_suggestion">

            {suggestions && suggestions.map((suggestion, i) =>
                <div key={i} className="suggestions"
                    onClick={() => onSuggestionHandler(suggestion.nameOfMed)}
                    onBlur={() => {
                        setTimeout(() => {
                            setSuggestions([]);
                        }, 100);
                    }}
                    >
                    {suggestion.nameOfMed}
                </div>
            )}
{/* Result param={text} /> */}
            {clicked?<Result param={text}/> : null}
            </div>
            {/* <Routes>
            <Route path="/result" element={<Result/>}></Route>
            </Routes> */}
        </div>

    );
}


export default SearchBar;