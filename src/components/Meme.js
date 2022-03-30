import React from 'react';
import {memesData} from '../memes.data'

export const Meme = ()=>{
   const [memeImage, setMemeImage] = React.useState("");
   const getMemeImage = ()=>{
      const memes = memesData.data.memes;
      const random = Math.floor(Math.random() * memes.length);
      const {url} = memes[random];
      setMemeImage(url);
   };


    return(
       <main>
         <div className="form">
         <input 
            type="text" 
            placeholder="one" 
            className="control--form"
         />
         <input 
            type="text" 
            placeholder="two" 
            className="control--form"
         />

         <button 
            type="submit" 
            className="form--btn"
            onClick={getMemeImage}
         >
            Get a new meme image
         </button>
         <div className='meme'>
            <img src={memeImage} alt="meme pic" className='image--meme'/>
         </div>
         </div> 
       </main>
    ); 
 };