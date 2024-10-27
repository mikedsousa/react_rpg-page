import { useEffect, useState } from 'react';

const useFetch = <T,>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Erro na requisição: ${response.status}`);
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error('Erro ao buscar dados:', error);
				setError(error as Error);
			}
		};

		fetchData();
	}, [url]);

	return { data, error };
};

export default useFetch;
