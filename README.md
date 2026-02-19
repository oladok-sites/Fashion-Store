# Fashion Store

A modern, full-featured e-commerce fashion store built with Next.js, featuring product browsing, shopping cart, favorites, user authentication, and an admin panel for product management.

## 🚀 Features

-   **Product Catalog**: Browse and view detailed product information with multiple images
-   **Shopping Cart**: Add products to cart and manage quantities
-   **Favorites**: Save products to your favorites list
-   **User Authentication**: Secure user authentication powered by Clerk
-   **Admin Panel**: Add and manage products through an admin interface
-   **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS
-   **Image Gallery**: Product image galleries with multiple views

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS 4
-   **Database**: SQLite with [Prisma ORM](https://www.prisma.io/)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **UI Components**: Custom React components
-   **Image Slider**: Swiper.js
-   **React Version**: React 19

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

-   **Node.js** (version 18 or higher)
-   **npm** or **yarn** or **pnpm** (package manager)
-   **Git** (for cloning the repository)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/oladok-sites/Fashion-Store.git
cd fashion-store
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project:

```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Create a `.env.local` file in the root directory of the project:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW52aXRpbmctY2hpcG11bmstNDcuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_iGj6hdxE0KNfpJ6EpzcGCfUSeYNdJrYdq4WvJrqn91
```

**Getting Clerk Keys:**

1. Sign up or log in to [Clerk](https://clerk.com/)
2. Create a new application
3. Copy your Publishable Key and Secret Key from the dashboard
4. Add them to your `.env.local` file

### 4. Set Up the Database

The project uses Prisma with SQLite. Run the following commands to set up the database:

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

### 5. Seed the Database (Optional)

If you have seed data, you can populate the database with initial products. Check if there's a seed script in `package.json` or run:

```bash
# If you have a seed script configured
npm run seed
```

## 🚀 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will automatically reload when you make changes to the code.

### Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📁 Project Structure

```
fashion-store/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── app.db                  # SQLite database file
│   └── migrations/            # Database migrations
├── public/
│   ├── products/              # Product images
│   └── ...                    # Other static assets
├── src/
│   ├── actions/               # Server actions
│   ├── app/                   # Next.js app router pages
│   │   ├── (admin)/          # Admin routes
│   │   ├── account/          # User account pages
│   │   ├── cart/             # Shopping cart page
│   │   ├── favourites/       # Favorites page
│   │   └── products/         # Product pages
│   ├── assets/               # SVG icons and assets
│   ├── components/           # React components
│   │   └── client/          # Client-side components
│   ├── contexts/             # React context providers
│   └── prisma-db.ts          # Prisma client instance
├── types/                     # TypeScript type definitions
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## 🗄️ Database Schema

The project uses a simple Product model:

-   **id**: Unique identifier (auto-increment)
-   **title**: Product name
-   **description**: Product description
-   **price**: Product price (in cents or smallest currency unit)
-   **category**: Product category
-   **images**: Product images (stored as string, likely JSON or comma-separated)

## 🔐 Authentication

The application uses Clerk for authentication. Users can:

-   Sign up for new accounts
-   Sign in to existing accounts
-   Access protected routes (like admin panel)
-   Manage their account settings

## 🛍️ Key Features Explained

### Shopping Cart

-   Add products to cart
-   Manage quantities
-   Persistent cart state using React Context

### Favorites

-   Save products to favorites
-   View favorites list
-   Persistent favorites using React Context

### Admin Panel

-   Access at `/admin`
-   Add new products
-   Manage product catalog

## 📝 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm start` - Start production server
-   `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Database Issues

If you encounter database-related errors:

```bash
# Reset the database (WARNING: This will delete all data)
npx prisma migrate reset

# Or regenerate Prisma Client
npx prisma generate
```

### Environment Variables

Make sure all required environment variables are set in `.env.local`. The application will not work without Clerk authentication keys.

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

## 📚 Learn More

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Prisma Documentation](https://www.prisma.io/docs)
-   [Clerk Documentation](https://clerk.com/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License** (CC BY-NC 4.0).

This means you are free to:

-   **Share** — copy and redistribute the material in any medium or format
-   **Adapt** — remix, transform, and build upon the material

Under the following terms:

-   **Attribution** — You must give appropriate credit to the author (oladok-sites), provide a link to the license, and indicate if changes were made.
-   **NonCommercial** — You may not use the material for commercial purposes.

For more information, see the [LICENSE](LICENSE) file or visit [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).

## 🤝 Contributing

This is a private project. For questions or issues, please contact the project maintainer.

## 👤 Author

**oladok-sites**

-   GitHub: [@oladok-sites](https://github.com/oladok-sites)
-   Repository: [Fashion-Store](https://github.com/oladok-sites/Fashion-Store)

---

Built with ❤️ using Next.js and modern web technologies.
