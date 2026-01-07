'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type CartFavouritesContextType = {
	cart: string[];
	setCartClothes: (slug: string) => void;
	hasCart: (slug: string) => boolean;
};

const CartContext = createContext<CartFavouritesContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<string[]>([]);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('cart');
		if (stored) setCart(JSON.parse(stored));
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart, mounted]);

	const setCartClothes = (slug: string) => {
		setCart((prev) => prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]);
	};

	const hasCart = (slug: string) => cart.includes(slug);

	return <CartContext.Provider value={{ cart, setCartClothes, hasCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart must be used inside CartContextProvider');
	return context;
};
