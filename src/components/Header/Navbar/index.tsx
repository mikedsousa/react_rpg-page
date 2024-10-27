import Navlink from "../Navlink";

const Navbar = () => {
	return (
		<nav>
      <Navlink to='/'>Home</Navlink>
			<Navlink to="blog">Blog</Navlink>
			<Navlink to="form">Inscrições</Navlink>
			<Navlink to="about">Sobre</Navlink>
		</nav>
	);
};

export default Navbar;
