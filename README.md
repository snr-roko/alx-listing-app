# ALX Listing App

A modern property listing application built with Next.js, inspired by Airbnb's design and functionality. This project serves as a comprehensive learning experience for building scalable React applications with TypeScript and TailwindCSS.

## 🏠 About the Project

The ALX Listing App is an Airbnb clone that focuses on creating a seamless property listing and booking experience. The application allows users to browse through various property listings, view detailed information, and make booking requests.

### Goals
- Create a responsive and intuitive property listing interface
- Implement reusable React components with TypeScript
- Build a scalable project structure for modern web applications
- Demonstrate best practices in React development and state management
- Provide a foundation for future feature expansions

## 🏗️ Project Structure

```
alx-listing-app/
├── components/           # Reusable UI components
│   └── common/          # Generic components used across the app
│       ├── Card.tsx     # Flexible card component for displaying content
│       └── Button.tsx   # Customizable button component with variants
├── interfaces/          # TypeScript type definitions
│   └── index.ts         # Centralized interface definitions for props and data models
├── constants/           # Application constants and configuration
│   └── index.ts         # API endpoints, UI text, theme settings, and business rules
├── public/              # Static assets
│   └── assets/          # Images, icons, and other static files
├── pages/               # Next.js pages (using Pages Router)
│   ├── _app.tsx         # Application wrapper component
│   ├── index.tsx        # Homepage
│   └── ...              # Additional pages
├── styles/              # Global styles and CSS modules
├── utils/               # Utility functions and helpers
└── README.md            # Project documentation
```

### Directory Purposes

#### 📦 `components/`
Contains all reusable React components organized by functionality:
- **`common/`**: Generic components like buttons, cards, and modals that can be used throughout the application
- Future subdirectories will include feature-specific components (e.g., `listing/`, `booking/`, `user/`)

#### 🔧 `interfaces/`
Centralized TypeScript interface definitions:
- Component props interfaces (`CardProps`, `ButtonProps`)
- Data model interfaces (`Property`, `BookingRequest`, `User`)
- API response interfaces for type-safe data handling

#### ⚙️ `constants/`
Application-wide constants and configuration:
- API endpoints and configuration
- UI text and button labels for easy internationalization
- Theme settings and design tokens
- Business rules and validation parameters
- Feature flags for conditional functionality

#### 🖼️ `public/assets/`
Static assets served directly by the web server:
- Property images and thumbnails
- Logo and branding assets
- Icons and illustrations
- Downloadable files

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/snr-roko/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   -----
   ```

### Running the Development Server

Start the development server with hot reloading:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run lint:fix` - Fix auto-fixable ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🎨 Technology Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) with Pages Router
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom reusable components
- **Development Tools**: ESLint, Prettier, Tailwind CSS IntelliSense

## 📁 Key Features

- 🏡 **Property Listings**: Browse through various property options
- 🔍 **Search & Filter**: Find properties based on preferences
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎯 **Type Safety**: Full TypeScript integration
- ♿ **Accessibility**: WCAG compliant components
- 🚀 **Performance**: Optimized for speed and SEO

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with the project, please feel free to:
- Open an issue on GitHub
- Contact the development team
- Check the documentation for more detailed information

---

**Happy coding! 🚀**
