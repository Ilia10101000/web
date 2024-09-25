import React from "react";
import { Route } from "react-router-dom";


export const renderRouters = (routersList) => {
    return routersList.map(({children, ...otherParams}) => {
        if(children){
            return (
                <Route key={otherParams.path} {...otherParams}>
                    {renderRouters(children)}
                </Route>
            )
        }
        return (
            <Route key={otherParams.path} {...otherParams}/>
        )
    })
}