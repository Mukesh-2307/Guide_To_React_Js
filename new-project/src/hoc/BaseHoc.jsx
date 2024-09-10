import React from "react";

const BaseHoc = (component) => ({...props}) =>{
    return(
        <>
        <div>
            <h1>header</h1>
            <component {...props}/>
            <h1>footer</h1>
        </div>
        </>
    )
}

export default BaseHoc