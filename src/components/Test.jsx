import React from "react"; 
// import clsx from 'clsx';



import data from 'components/data.json';

import { Tiitle } from 'components/Tiitle';
// import styled from 'styled-components';
import css from './Test.module.css';


// const Container = styled.div`
// background-color: pink;`

const Test = ({ isOnline }) => {
    return data.map(photo => {
        return (
            <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div >
                <h5 >Card title: {photo.title}</h5>
                <Tiitle clas='card-text' id='244'>
                    /       helooooo
                    <div>helooooo
                        <p>helooooo</p>
                    </div>
                </Tiitle>
                <a href="http">Go somewhere</a>
            </div>
        </div>)
    })
}

// РІЗНІ  СТИЛІ
// const Test = ({isOnline}) => {
//     return data.map(photo => {
//         return (<div key={photo.id}
//             // className={isOnline
//             // ? `${css.poo} ${css.red}`
//             // : `${css.poo} ${css.blue}`}

//             // className={clsx(css.poo, isOnline && css.red, !isOnline && css.blue)}
        
//             className={clsx(css.poo,
//                 {
//                     [css.red]: isOnline,
//                     [css.blue]: !isOnline,
//                 })}
        
//         >
           
//             <img src={photo.thumbnailUrl} alt={photo.title} />
//             <div >
//                 <h5 >Card title: {photo.title}</h5>
//                 <Tiitle clas='card-text' id='244'>
//                     /       helooooo
//                     <div>helooooo
//                         <p>helooooo</p>
//                     </div>
//                 </Tiitle>
//                 <a href="#">Go somewhere</a>
//             </div>
//         </div>)
//     })
// }




// BODSTRAP
// const Test = () => {
//     return data.map(photo => {
//         return (< div key={photo.id} className="card" style={{ width: '18rem' }}>
//             <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
//             <div className="card-body">
//                 <h5 className="card-title">Card title: {photo.title}</h5>
//                 <Tiitle clas='card-text' id='244'>
//                     /       helooooo
//                     <div>helooooo
//                         <p>helooooo</p>
//                     </div>
//                     </Tiitle>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>)
//     })
// }
          

  
export default Test;


