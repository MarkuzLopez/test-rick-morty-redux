import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacterViewAction } from '../../redux/charactersDuck';
import './Character.css';

class Character extends Component {

    componentDidMount() { 
        const {id} = this.props.match.params;
        this.props.getCharacterViewAction(id);
    }

    render(){
         let episode = [];
         //* <<-- en caaso de no obtener respuesta de la API no se mostrara la informacion del personaje -->>
         if(this.props.fetching) return <div className="alert alert-primary text-center"> <strong>Cargando...</strong> </div>;
         const { character } = this.props;

        if(character.episode) { 
          episode = character.episode   
        }
         
        return(
            <div className="mt-5" >
                    <h1 className="titleSeccions">{character.name}</h1>
                    <div className="card-deck">
                        <div className="col-md-3" >
                            <div className="card mt-4" >
                                <img src={character.image} className="card-img-top" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p>{character.species}</p>
                                    <p>{character.status}</p>
                                    <p>{character.gender}</p>
                                    <p>Numero de capitulos en las que aparece: {character.episode.length}</p>
                                    {/* <p className="card-text"><small className="text-muted">{character.specie}</small></p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9" >
                            <div className="card mt-4" >
                                <h3 className="text-center">Lista de Capitulos</h3>
                                <div className="card-body lista"> 
                                        { episode.map((ree, index) =>  (
                                           <ul key={index} >
                                               <li>{ree}</li>
                                           </ul>
                                        )) }
                                    {/* <p className="card-text"><small className="text-muted">{character.specie}</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

function mapState (state) { 
   return { 
       character: state.characters.character,
       fetching: state.characters.fetching
   }
}

export default connect( mapState ,{getCharacterViewAction})(Character)