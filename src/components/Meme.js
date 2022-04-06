import React from 'react';

export const Meme = ()=>{
   
   const [meme, setMeme] = React.useState({
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
   });
   
   const [allMemeImages, setAllMemeImages] = React.useState([]);
   
   const getMemeImage = ()=>{
      const random = Math.floor(Math.random() * allMemeImages.length);
      const url = allMemeImages[random].url;
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

   React.useEffect(()=>{
      fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes));
   },[]);
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