import React, { useEffect, useState } from 'react';
import './Data.css';

import Fakedata from '../Fakedata/Fakedata';
import Info from '../Info/Info';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Data = () => {
    const [fakedataes,setFakedataes] = useState([]);
    const [info,setInfo] =useState([]);
    const [readtime,setReadtime] =useState(0);
    useEffect(()=>{
        fetch('Fakedataes.json')
        .then(res=>res.json())
        .then(data=>setFakedataes(data))
    },[]);

    const handleAddToCart = (fakedata) =>{

        if(info.find(info=>info.id===fakedata.id)){
            console.log(alert);
            toast('alert');
        }else{
            
        const newInfo = [...info,fakedata];
        setInfo(newInfo);
       }
    }
    const handleTime = (time)=>{
        const newTimes = readtime+time;
        setReadtime(newTimes);
    }
    return (
        <div className='shop-container'>
            <div className="data-container">
                {
                 fakedataes.map(fakedata=> <Fakedata
                    key={fakedata.id}

                    fakedata ={fakedata}
                    handleAddToCart = {handleAddToCart}
                    handleTime={handleTime}
                 ></Fakedata>)
                }
               
            </div>
            
            <div className="cart-container">
            <h3 className='spentTime'>Spent Time on : {readtime} min</h3>
                {
                    <Info 
                        info={info}
        
         
                        ></Info>
                        
                }
              
               
              
              


            </div>
            
               
                <ToastContainer />
         
            
        </div>
        
    );
};

export default Data;