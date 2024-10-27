import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyles } from './global/styles/GlobalStyles';
import Article from './pages/Article';
import Building from './pages/Building';

const AppRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Base />}>
						<Route index element={<Home />} />
						<Route path="/*" element={<NotFound />} />
						<Route path="blog/:id" element={<Article />} />
						<Route path="blog" element={<Building />} />
						<Route path="form" element={<Building />} />
						<Route path="about" element={<Building />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AppRoutes;
