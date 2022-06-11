import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import Result from '../../pages/Result'
import Products from '../featured/Products';
import Featured from '../featured/Featured';
// import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Best from '../best/Best';
import Navbar from '../navbar/Navbar'

const home = () => {
    const [clicked] = useState(false);
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
        <div>
            <Navbar/>
        <div className='hero'>
            <div className='content'>
                <div className='imghero'>
                    <img className='imgdoc' src='https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/home-2/540x540.jpg'></img>
                </div>
                <div className='imghero2'>
                    <img className='imgani' src='https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/bl.png'></img>
                {/* <h1>Be Present at Right Place.</h1> */}
                </div>
                <div className='imghero3'>
                    <img className='imgani2' src='https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/tr.png'></img>
                </div>
                <h1>Find The Medicine Near By You</h1>
                {/* <p className='search-text'> Search the medicine shop at  your near location. </p> */}
                <form className='search'>
                    <div>
                        <input type='text' placeholder=' Enter the medicine..' onChange={e => onChangeHandler(e.target.value)}
                                value={text} />
                    </div>
                    <div className='radio'>
                    <Link to={
                        {
                            pathname: '/result',
                            search: `?medicineName=${text}`
                        }
                    }>
                        <button type='submit'><AiOutlineSearch className='icon' /></button>
                        </Link>
                    </div>
                </form>
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
            {clicked?<Result param={text}/> : null}
            </div>
            </div>
        </div>
        <Products/>
      <Featured/>
      <Best/>
      <Footer/>
        </div>
    )
}

export default home