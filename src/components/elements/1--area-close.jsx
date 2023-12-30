import img from '../images/plus.png';
import classes from '../styles/item.module.css';

const Close = ({submit, close}) => {
    

    return(
        <button id="sbutton" onClick={close} className={classes.button}>
            <img onClick={submit} src={img} className={classes.image} alt="plus icon" />
          </button>
    )
}
export default Close;