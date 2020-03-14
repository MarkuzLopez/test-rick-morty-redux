import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEpisodeViewAction } from '../../redux/episodesDuck';

class Episode extends Component { 

    state = { 
        characters: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getEpisodeViewAction(id)
    }

    render() {
        let characters = [];
        //* <<-- en caaso de no obtener respuesta de la API no se mostrara la informacion del episodio -->>
        if(this.props.fetching) return <div className="alert alert-primary text-center"> <strong>Cargando...</strong> </div>;
        const { episode } =  this.props;
        if(episode.characters) {
                characters = episode.characters
        }
        
        return(
            <div className="mt-5">
                <div className="card-deck">
                        <div className="col-md-3" >
                            <div className="card mt-4" >
                                <div className="card-body">
                                    <h5 className="card-title"> Titulo: {episode.name} </h5>
                                    <p>Fecha: {episode.air_date}</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-9" >
                            <div className="card mt-4" >
                                <h3 className="text-center">Lista de Personajes en el capitulo</h3>
                                <div className="card-body lista" >
                                    {characters.map( (res, index) => (
                                        <ul key={index} >
                                            <li>
                                                {res}
                                            </li>
                                        </ul>
                                    ))}
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return { 
        episode: state.episodes.episode,
        fetching: state.episodes.fetching
    }
}

export default connect(mapState, {getEpisodeViewAction}) (Episode);