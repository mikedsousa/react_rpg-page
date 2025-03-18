import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyles } from './global/styles/GlobalStyles';
import Article from './pages/Article';
import Building from './pages/Building';
// import Blog from './pages/Blog';
import Form from './pages/Form';

const AppRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Base />}>
						<Route index element={<Home />} />
						<Route path="form" element={<Form />} />
						<Route path="about" element={<Building />} />
						<Route path="blog" element={<Building />} />
						<Route path="blog/:id" element={<Article />} />
						<Route path="/*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AppRoutes;
