'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type FavouritesContextType = {
	favourites: string[];
	setFavouritesClothes: (slug: string) => void;
	hasFavourite: (slug: string) => boolean;
};

const FavouritesContext = createContext<FavouritesContextType | null>(null);

export const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {
	const [favourites, setFavourites] = useState<string[]>([]);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('favourites');
		if (stored) setFavourites(JSON.parse(stored));
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		localStorage.setItem('favourites', JSON.stringify(favourites));
	}, [favourites, mounted]);

	const setFavouritesClothes = (slug: string) => {
		setFavourites((prev) => prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]);
	};

	const hasFavourite = (slug: string) => favourites.includes(slug);

	return <FavouritesContext.Provider value={{ favourites, setFavouritesClothes, hasFavourite }}>{children}</FavouritesContext.Provider>;
};

export const useFavourites = () => {
	const context = useContext(FavouritesContext);
	if (!context) throw new Error('useFavourites must be used inside FavouritesContextProvider');
	return context;
};
