import { useState,useContext } from "react";
import { getImgUrl } from "../data/utiles";
import tag from "../tag.svg";
import Stars from "./Stars";
import MovieModal from "./movieModal";
import { MovieContext } from "../context";
import {  toast } from 'react-toastify'



export default function SingleContent({ single }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { id, cover, title, description, genre, rating, price } = single;
  const {state, dispatch} = useContext(MovieContext);
  
  

  function handleModal() {
    setModalData(null);
    setShowModal(false);
  }

  function handleAddCart(e,movie){
    e.stopPropagation()
    const found = state.cartData.find((item)=> item.id === movie.id)
    
    if(!found){
       dispatch({
        type : "ADD_TO_CART",
        payload: {...movie}
       })
       toast.success(`The movie  added to the cart successfully`,{
        position:"top-right"
      })
    }else{
      toast.error(`The movie ${movie.title} has been added to the cart already`,{
        position:"top-right"
      })
    }

    
    
  }
  
  
  return (
    <>
      {showModal && <MovieModal single={single} onClose={handleModal} onAdd={handleAddCart}/>}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div
          
          onClick={() => {
            setModalData(single);
            setShowModal(true);
          }}
        >
          <img className="w-full object-cover" src={getImgUrl(cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Stars rating={rating} />
            </div>
            <button
              className="w-full bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              
              onClick={(e)=>handleAddCart(e,single)}
            >
              <img src={tag} alt="" />
              <span>${price} | Add to Cart</span>
            </button>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
