import styles from './Section.module.scss';
import Span from '../Span';

const Section = ({ title, span, children }: props) => {
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.titulo}>
					{title} <Span color="blue">{span}</Span>
				</h2>
				<section className={styles.section}>{children}</section>
			</div>
		</>
	);
};

export default Section;

interface props {
	title: string;
	span: string;
	children: React.ReactNode;
}
