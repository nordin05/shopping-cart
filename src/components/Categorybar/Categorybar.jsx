import { useState } from "react";
import styles from "./Categorybar.module.css"

const Categorybar = (props) => {
    const {setCategory} = props
    const [activeElement, setActiveElement] = useState(null)

    const handeClick = (e) => {
        const el = e.target;

        if (activeElement && activeElement == el){ 
            activeElement.className = "list-group-item";
            setActiveElement(null);
            setCategory("");
        }
        else if (activeElement && activeElement != el){ 
            activeElement.className = "list-group-item";
            el.className += " active";
            setActiveElement(el);
            setCategory(el.innerHTML.toLowerCase());
        }
        else {
            el.className += " active";
            setActiveElement(el);
            setCategory(el.innerHTML.toLowerCase());
        }
    }

    return (
        <div className={styles.Categories}>
            <h5 className="ps-2 mb-3">Categories</h5>
            <ul className="list-group">
                <li className="list-group-item" onClick={handeClick}>Men's Clothing</li>
                <li className="list-group-item" onClick={handeClick}>Women's Clothing</li>
                <li className="list-group-item" onClick={handeClick}>Jewelery</li>
                <li className="list-group-item" onClick={handeClick}>Electronics</li>
            </ul>
        </div>
    );
  };
  
  export default Categorybar;