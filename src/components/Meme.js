import React from 'react';
import {memesData} from '../memes.data'

export const Meme = ()=>{
   
   const [meme, setMeme] = React.useState({
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
   });
   
   const [allMemeImages, setAllMemeImages] = React.useState(memesData);
   
   const getMemeImage = ()=>{
      const memes = allMemeImages.data.memes;
      const random = Math.floor(Math.random() * memes.length);
      const {url} = memes[random];
      setMeme((prevMeme) =>{
         return{...prevMeme,randomImage: url}
      });
   };


   const handleChange = (event)=>{
      const {name, value} = event.target;
      setMeme((prevMeme) =>{
         return {
           ...prevMeme,
           [name]: value
         };
      });
   };
    return(
       <main className='main'>
         <div className="form">
            <input 
               type="text" 
               placeholder="top text" 
               className="control--form"
               name='topText'
               value={meme.topText}
               onChange={handleChange}
            />
            <input 
               type="text" 
               placeholder="bottom text" 
               className="control--form"
               name='bottomText'
               value={meme.bottomText}
               onChange={handleChange}
            />

            <button 
               type="submit" 
               className="form--btn"
               onClick={getMemeImage}
            >
               Get a new meme image
            </button>
         </div> 
         <div className='meme'>
            <img 
               src={meme.randomImage} 
               alt="meme pic" 
               className='image--meme'
            />
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
         </div>
       </main>
    ); 
 };