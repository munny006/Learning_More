import React from 'react';
import './Fakedata.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Fakedata = (props) => {

   const {img,title,userimg,username,date,time} = props.fakedata ;
//     const handleAddToCart = (fakedata) =>{
//     console.log(fakedata)
//    }
const handleAddToCart = props.handleAddToCart;
const handleTime = props.handleTime;

    return (
        <div className='data'>
             <img src={img} alt=""/>
            {/* <h3>this is product</h3> */}
            <div className='data-info'>
            <img className='user' src={userimg} alt="" />
            <h6 className='data-name'>{username}</h6>
            <a  onClick={()=>handleAddToCart(props.fakedata)} className='btn-cart'>
                {time} Min Read
                <FontAwesomeIcon icon=  { faBookmark } className='icon'/>
                </a>
            <p>{date}</p>
            <h5>{title}</h5>
            </div>

            <button  onClick={()=>handleTime(props.fakedata.time)} className='btn-date'>
               Mark as Read
               </button>
            
           
        </div>
        
    );
};

export default Fakedata;