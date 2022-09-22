import {Character} from "../../Model/Character";
import CharacterCard from "../CharacterCard/CharacterCard";
import './CharacterGallery.css';

type CharacterGalleryProps = {
    characters : Character[];
}

export default function CharacterGallery(props:CharacterGalleryProps){

     return(
         <div className={"cards"}>
             {props.characters.map((singleCharacter:Character)=>{
                 return <CharacterCard key={singleCharacter.id} singleCharacter={singleCharacter}/>;
             })};

         </div>
     )






}