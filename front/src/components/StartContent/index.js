import { useState, useEffect } from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './startContent.module.css';
import child from '../../images/child.jpg';
import man2 from '../../images/man2.jpg';
import portrait from '../../images/portrait.jpg';
import woman from '../../images/woman.jpg';
import music from '../../images/music.jpg';



function StartContent() {
  const [ isLoad, setIsLoad ] = useState(false);
  useEffect(() => {
    setIsLoad(true)
  })
  return (

    

      <div className={style.wrapperPhotos}>
      <div className={style.titleBlock}>
        <h1 className={style.titleBlock_mainTitle1}>Show your photos</h1>
        <h1 className={style.titleBlock_mainTitle2}>by Photo Wall</h1>
     </div>
        <div className={style.column}>
         <div>
            <img 
            className={`${!isLoad ? 
              style.photoItem3 : style.active3}`} 
            src={music} />
         </div>       
        </div>
        <div className={style.column}>
         <div>
            <img 
            className={`${!isLoad ? 
              style.photoItem3 : style.active3}`} 
            src={woman} />
         </div>       
        </div>
        <div className={style.column}>
         <div>
            <img 
            className={`${!isLoad ? 
              style.photoItem3 : style.active3}`} 
            src={man2} />
         </div>       
        </div>
        <div className={style.column}>
         <div>
            <img 
            className={`${!isLoad ? 
              style.photoItem3 : style.active3}`} 
            src={portrait} />
         </div>       
        </div>

   </div>

  )
};

export default StartContent;