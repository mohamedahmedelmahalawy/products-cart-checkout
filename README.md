# 🛒 Products Cart Checkout

A modern, fully-functional e-commerce shopping cart application built with React and Vite. This project showcases a complete product browsing and checkout workflow with persistent cart management using local storage.

**[🚀 Live Preview](https://products-cart-checkout-oggrndf6v-mizomicos-projects.vercel.app/)**

## ✨ Features

- 🛍️ **Browse Products** - Browse through a curated selection of products with detailed information
- 🛒 **Add to Cart** - Seamlessly add products to your shopping cart
- 📦 **Cart Management** - Add, remove, and update product quantities in real-time
- 💾 **Persistent Storage** - Cart data persists across browser sessions using local storage
- 💰 **Automatic Calculations** - Real-time total price calculation
- 🎨 **Responsive Design** - Beautiful, responsive UI that works on all devices
- ⚡ **Lightning Fast** - Powered by Vite for instant dev server and optimized builds
- ✨ **React Compiler** - Leverages React 19 compiler for optimized performance
- 🔍 **ESLint Ready** - Pre-configured ESLint for code quality and consistency

## 🛠️ Tech Stack

- **React 19** - Latest React with compiler optimization
- **Vite 7** - Next-generation frontend build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **JavaScript ES Modules** - Modern JavaScript development
- **React Hooks** - Functional component patterns with custom hooks
- **Local Storage API** - Client-side data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── cart/
│   │   └── Cart.jsx          # Shopping cart display and management
│   ├── product/
│   │   └── Product.jsx       # Individual product card component
│   └── products/
│       └── Products.jsx      # Products listing and grid
├── hooks/
│   └── useLocalStorage.js    # Custom hook for cart state management
├── App.jsx                   # Main app component
├── App.css                   # App styles
├── main.jsx                  # React app entry point
└── index.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/products-cart-checkout.git
cd products-cart-checkout

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Check code quality with ESLint
npm run lint
```

## 🎯 How It Works

1. **useLocalStorage Hook** - A custom React hook that manages cart state with persistent local storage
2. **Product Component** - Displays individual products with add-to-cart functionality
3. **Products Component** - Grid layout displaying all available products
4. **Cart Component** - Shows cart items, quantities, and total price with update capabilities

## 📝 Features in Detail

- **Add to Cart** - Click the add button on any product to add it to your cart
- **Update Quantities** - Use +/- buttons to adjust product quantities directly in the cart
- **Remove Items** - Remove unwanted items from your cart
- **Persistent Cart** - Your cart automatically saves to local storage and persists between sessions
- **Real-time Totals** - Total price updates automatically as you modify your cart

## 🔗 Live Demo

Check out the live application here: <a href="https://products-cart-checkout.vercel.app/" target="_blank" rel="noopener noreferrer">Products Cart Checkout</a>

## 📜 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.
