import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component { 
    

    render() {

        if( this.props.fetching ) return <h2>Crgando...</h2>
        const { characters, episodes } =  this.props;
        return (
            <React.Fragment>
                {/* SECTION CHARACTERS */}
                <section className="mt-5" >
                    <h1 className="titleSeccions">Personajes</h1>
                    <div className="card-deck mt-5">
                        {characters.map(character =>  (
                        <div className="col-md-3" key={character.id} >
                            <div className="card mt-4" >
                                <img src={character.image} className="card-img-top" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text"><small className="text-muted">{character.specie}</small></p>
                                </div>
                                <Link to={`/personaje/${character.id}`} className="btn btn-primary btn-lg btn-info">Perfil del Personaje</Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
                {/* section EPISODES  */}
                <section className="mt-4" >
                    <h1 className="titleSeccions">Episodies</h1>
                    <div className="card-deck mt-5">
                        {episodes.map( episode => (
                        <div className="col-md-4" key={episode.id} >
                            <div className="card mt-4" >
                            <div className="card-body">
                                <h5>Titulo</h5>
                                <h3 className="card-title"> <strong>{episode.name}</strong></h3>
                                <p className="card-text">
                                    fecha: { episode.air_date}
                                </p>
                                <p className="card-text"><small className="text-muted">code: {episode.episode}</small></p>
                            </div>
                            <Link to={`/episodio/${episode.id}`} className="btn btn-primary btn-lg btn-info">Información del Episodio</Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

function mapState( state) { 
    return { 
        characters: state.characters.characters,
        fetching: state.characters.fetching,
        episodes: state.episodes.episodes
    }
}

export default connect(mapState, )(Home);