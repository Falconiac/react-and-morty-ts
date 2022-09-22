import {Character} from "../../Model/Character";
import './CharacterCard.css';


export default function CharacterCard(props:{singleCharacter:Character}){

    return (
        <div className="character-card">
        <h3>{props.singleCharacter.name}</h3>

        <img src={props.singleCharacter.image} alt={"Pofile Pic"}/>

        <p>{props.singleCharacter.species}</p>

    </div>
    )
}