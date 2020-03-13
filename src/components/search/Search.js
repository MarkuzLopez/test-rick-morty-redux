import React, { Component } from 'react';
import axios from 'axios';
import Url from '../../shared/envioroment/Url';

const { url } = Url

class Search extends Component {

    componentDidMount() { 
        const { word } = this.props.match.params;
        // https://rickandmortyapi.com/api/character/?episode=rick
        return axios.get(`${url}/character/`, { params: { episode: word } }).then(res => { 
            console.log(res.data);  
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1>Seaaarch</h1>
            </React.Fragment>
        )
    }
}

export default Search;