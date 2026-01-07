// app/providers.tsx
'use client';

import { createContext, useContext } from 'react';

// export type Clothe = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	price: number;
// 	images: string[];
// 	category: {
// 		name: string;
// 		slug: string;
// 	}
// };
export type Clothe = {
	id: number;
	title: string;
	description: string;
	price: number;
	images: string[];
	category: string
};


const ClothesContext = createContext<Clothe[] | undefined>(undefined);

export function ClothesProvider({ clothes, children }: { clothes: Clothe[]; children: React.ReactNode }) {
	return <ClothesContext.Provider value={clothes}>{children}</ClothesContext.Provider>;
}

export function useClothes() {
	const clothes = useContext(ClothesContext);

	if (!clothes) {
		throw new Error('useProducts must be used within ProductsProvider');
	}

	return clothes;
}
