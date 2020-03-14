import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCharacterAction } from '../../redux/charactersDuck';

class Search extends Component {

    componentDidMount() { 
        const { word } = this.props.match.params;
        this.props.searchCharacterAction(word);
    }

    render() {
        //* <<-- si no obtiene los datos no lo renderiza lña información -->>
        if(this.props.fetching) return 'Cargando...';
        const { character } =  this.props;
        return(
            <React.Fragment>
                 <section className="mt-5" >
                    <h1 className="titleSeccions text-center">Personajes Encontrados</h1>
                    <div className="card-deck mt-5">
                        {  character.results.map(character =>  (
                        <div className="col-md-3" key={character.id} >
                            <div className="card mt-4" >
                                <img src={character.image} className="card-img-top" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text"><small className="text-muted">{character.specie}</small></p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

function mapState (state) { 
    return { 
        character: state.characters.character,
        fetching: state.characters.fetching
    }
}

export default connect( mapState, {searchCharacterAction}) (Search);