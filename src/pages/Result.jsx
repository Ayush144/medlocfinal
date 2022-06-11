import styled from 'styled-components';
import Resultletter from '../pages/Resultletter';
import React from 'react';
// const axios = require('axios');
// import axios from '../../node_modules/axios'
import axios from 'axios'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
// import Response from './Response';


const Container = styled.div`
// border: 1px solid red;
`;


class Result extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
        products: [],
        medName: '',
        message: ''
    };

    // handleQueryString = () => {
    //     // Parsing the query string 
    //     // Using parse method
    //     let queries = queryString.parse(this.props.location.mname)
    //     console.log(queries)
    //     this.setState({medName: queries})
    // }

    theParams = () => {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const foo = params.get('medicineName');
        // bar
        // this.setState={ medName:foo};
        return foo;

    }

    componentDidMount() {
        const med = this.theParams();
        console.log(this.props)
        console.log(this.state.medName);

        this.setState({ medName: med }, () => {
            console.log(this.state.medName);
            this.setState({message: `Search result for ${this.state.medName}`})

            const url = `https://protected-hamlet-25972.herokuapp.com/api/medicineStocks/searchByName/${this.state.medName}`
            console.log(url);
            axios.get(url)
                .then(response => {
                    const products = response.data.data;
                    console.log(products);
                    this.setState({ products: products });
                });


        });

        // this.handleQueryString();
    }

    render() {
            
        const prod = this.state.products.map((product, i) => {
            return <Resultletter
                key={i}
                name={product.store_id.name_of_store}
                contactNo={product.store_id.contact_no}
                price={product.medicine_availible[0].price}
                address={product.store_id.address} />

        })

        // console.log(this.props);
        // console.log(window.location.mname)
        return (
            <Container>
                <Navbar/>
                {prod}
                {console.log(this.props.param)}
                <Footer/>
            </Container>
        );
    }
}

export default Result