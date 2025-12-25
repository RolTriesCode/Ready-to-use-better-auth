# ReadyUseAuth 🔐

ReadyUseAuth is a modern, professional, and ready-to-use authentication boilerplate built with the latest technologies. It provides a solid foundation for Next.js applications that require secure, type-safe authentication out of the box.

## 🚀 Features

- **Full-Stack Authentication**: Complete Sign-Up and Sign-In flows.
- **Better Auth Integration**: Leveraging [Better Auth](https://www.better-auth.com/) for secure session management and authentication.
- **Prisma ORM**: Seamless database interactions with PostgreSQL support.
- **Modern UI**: Styled with **Tailwind CSS 4** for a clean, responsive, and high-performance interface.
- **Type-Safe**: Built entirely with **TypeScript** for better developer experience and reliability.
- **Lucide Icons**: Beautiful icons for a polished look.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Auth**: [Better Auth](https://www.better-auth.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js 18+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (Recommended) or npm/yarn
- A PostgreSQL database (Local or Hosted)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RolTriesCode/Ready-to-use-better-auth.git
   cd Ready-to-use-better-auth
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/readyuseauth"
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. **Initialize the database:**
   ```bash
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app`: Next.js App Router (Pages & API routes)
- `src/components`: Reusable UI components
- `src/lib`: Configuration for Auth, Prisma, and utility functions
- `prisma`: Database schema definition

## 📜 Available Scripts

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint for code quality checks.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by Errol Tabangen(https://github.com/RolTriesCode)
