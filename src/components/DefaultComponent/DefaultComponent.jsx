import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponents";

const DefaultComponent = ({children}) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

export default DefaultComponent