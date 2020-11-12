import React from "react";

export const Posts = (props) => {
    const goToHome = () => {
       props.history.push({
            pathname: '/'
        })
    }


    return (

        <>
            <button onClick={goToHome}>Home</button>

        <div>
            posts
        </div>

            </>
    )
}