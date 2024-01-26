 
 import star from '../star.svg';

 export default function Stars({rating}){
    const stars = Array(rating).fill(star)

   
   
    
    
     return (
            <>	
             {stars.map((star,index)=> (

              
               <img key={index} src={star} />

             ))}
            </>
     );
 }