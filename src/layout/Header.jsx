import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header(){
    return (
        <nav>
        <Link className={styles.link} to="/">Home</Link> 
        <Link className={styles.link} to="/sobre">Sobre</Link>  
        <Link className={styles.link} to="/Contato">Contato</Link>
      </nav>
    );
}
export default Header;