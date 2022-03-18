import React from 'react'
import "./Darkmode.css"
const Darkmode = () => {
    let body = document.getElementById("body")
    const toogleDark = () => {       // This is to add the Dark Mode feature to the body element
        body.classList.toggle("Dark")
    }

    return (
        <div className="toogle" onClick={toogleDark}>
            <i class="fa fa-moon-o"></i>
        </div>
    )
}

export default Darkmode