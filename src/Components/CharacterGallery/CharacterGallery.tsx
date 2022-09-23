import {Character} from "../../Model/Character";
import CharacterCard from "../CharacterCard/CharacterCard";
import './CharacterGallery.css';
import {useState} from "react";





type CharacterGalleryProps = {
    characters : Character[];
}

export default function CharacterGallery(props:CharacterGalleryProps){

    const [data, setData] = useState("");



     return(
         <section>
             <div>
             <h2>Search: </h2>
             <input onChange={(event)=> setData(event.target.value)}/>
             </div>
         <div className={"cards"}>
             {props.characters.filter(name => name.name.toLowerCase().includes(data)).map((singleCharacter:Character)=>{

                     return <CharacterCard key={singleCharacter.id} singleCharacter={singleCharacter}/>;
             })};

         </div>
         </section>
     )






}