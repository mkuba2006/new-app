import plus from '../images/add.png'
import classes from '../styles/item.module.css';

const H2 = ({open}) => {
    

    return(
        <h2 onClick={open}>
            Add Item
            <img src={plus} className={classes.image2} alt="plus icon"/>
        </h2>
    )
}
export default H2;