import {memesData} from '../memes.data'

export const Meme = ()=>{
   const getMemeImage = ()=>{
      const memes = memesData.data.memes;
      const random = Math.floor(Math.random() * memes.length);
      const {url} = memes[random];
      console.log(url)
   };


    return(
       <form className="form">
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
       </form> 
    ); 
 };