import React from 'react';
import './Info.css';

const Info = ({info}) => {
    // const {title} = props.info ;
  
    // const {info} = props;
    
    return (
       
        <div className='info'>
         
           
           <h4>Bookmarks card : 
           <h6 className='length'>{info.length}</h6>
           </h4>
          
            {/* <div className='bookmark'>
            <h2>{info.title}</h2>
        </div> */}
       
       {
        info.map(info=> <h2 className='title-blog'>{info.title}</h2>)
       }
       </div>
       
        
           
                
                 
       
    );
};

export default Info;