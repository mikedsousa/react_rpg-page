import { NavLink } from 'react-router-dom';
import { FaDiceD20 } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import DropDown from './DropDown';
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const showMenuWhenClicked = () => {
    return !isOpen ? setIsOpen(true): setIsOpen(false);
  }

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<FaDiceD20 className={styles.icon} />
					<NavLink to="/">
						<h2>Grimmkin's Page</h2>
					</NavLink>
				</div>
				<Navbar />
				<FiMenu className={`${styles.menu} ${isOpen ? styles.open : ''}`} onClick={showMenuWhenClicked} />
			</header>
			<DropDown isOpen={isOpen} />
		</>
	);
};

export default Header;
