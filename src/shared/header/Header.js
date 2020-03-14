import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const Header = (props) => {

    const nombre =  React.createRef();

    const Search = (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        props.history.push(`/search/${word}`)
    }

    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" >RickAndmorty</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={Search} >
                    <input className="form-control mr-sm-2" ref={nombre} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
     );
}
 
export default withRouter (Header);