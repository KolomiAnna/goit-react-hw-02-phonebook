import React from "react"

 export const Tiitle = ({ clas, id, children}) => {
    // const { clas, id } = props;
    // console.log(props);
     return <React.Fragment>
         {children}
         <p className={clas} id={id}> Some quick example text to build on the card title and make up the bulk</p>
     </React.Fragment>
}

// export default Tiitle;