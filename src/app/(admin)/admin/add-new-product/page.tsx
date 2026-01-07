import addNewProduct from "@/actions/add-new-products";

export default function Component() {

	return (
		<section className="flex flex-col items-center py-15">
			<h1 className="text-[32px] font-extrabold uppercase tracking-[0.06em] mb-10">Add a new product</h1>
			<form action={addNewProduct} className="flex flex-col gap-3.5 max-w-2xl w-full">
				<input
					type="text"
					name="title"
					// id=""
					placeholder="Title"
					className="w-full p-3 pl-7 bg-transparent outline-none placeholder:text-black/60 text-black border border-[#d9d9d9] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
				/>
				<input
					type="text"
					name="description"
					// id=""
					placeholder="Description"
					className="w-full p-3 pl-7 bg-transparent outline-none placeholder:text-black/60 text-black border border-[#d9d9d9] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
				/>
				<input
					type="text"
					name="images"
					// id=""
					placeholder="URL For Image"
					className="w-full p-3 pl-7 bg-transparent outline-none placeholder:text-black/60 text-black border border-[#d9d9d9] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
				/>
				<div className="grid grid-cols-2 gap-4 mb-3.5">
					<input
						type="text"
						name="category"
						// id=""
						placeholder="Category"
						className="w-full p-3 pl-7 bg-transparent outline-none placeholder:text-black/60 text-black border border-[#d9d9d9] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
					/>
					<input
						type="number"
						name="price"
						// id=""
						placeholder="Price"
						className="w-full p-3 pl-7 bg-transparent outline-none placeholder:text-black/60 text-black border border-[#d9d9d9] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
					/>
				</div>
				<button type="submit" className="uppercase flex items-center justify-center px-2.5 h-12 leading-12 bg-black hover:bg-transparent border-2 border-black text-[12px] font-medium text-white hover:text-black component-transition">Add a new product</button>
			</form>
		</section>
	);
}
