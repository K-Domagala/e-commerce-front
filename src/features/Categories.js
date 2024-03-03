import { NavLink } from "react-router-dom";

export function Categories () {
    return(
        <div className="cat-banner"><div className='cat-content'>
            <h3><NavLink to="/products?category=Tools">Tools</NavLink></h3>
            <h3><NavLink to="/products?category=Paint">Paint</NavLink></h3>
            <h3><NavLink to="/products?category=Pipes">Pipes</NavLink></h3>
            <h3><NavLink to="/products?category=Outdoor">Outdoor</NavLink></h3>
        </div></div>
    )
}