import { NavLink } from 'react-router-dom';

const Navlink = ({ to, children }: props) => {
	return (
		<NavLink
			to={to}
			style={({ isActive }) => {
				return {
					color: isActive ? '#22d3ee' : '',
				};
			}}
			className={({ isActive, isPending }) =>
				isPending ? 'pending' : isActive ? 'active' : ''
			}
		>
			{children}
		</NavLink>
	);
};

export default Navlink;

interface props {
	to: string;
	children: string;
}
