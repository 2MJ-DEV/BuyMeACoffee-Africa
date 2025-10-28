<p align="center">
  <img src="/public/seo.png" alt="BuyMeACoffee-Africa Banner" width="100%" />
</p>

**Buy Me a Coffee Africa** is an African platform inspired by Buy Me a Coffee, designed to enable African creators, artists, developers, and entrepreneurs to easily receive financial support through **Mobile Money** services such as **Airtel Money**, **Orange Money**, **M-Pesa**, etc.
[Official Website](https://buy-me-a-coffee-africa.vercel.app/)

#

> _Buy Me a Coffee Africa – ☕ One coffee, one support, one creator_

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [PostgreSQL](https://www.postgresql.org/) (for the database)

### Installation

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/BuyMeACoffee-Africa.git
   cd BuyMeACoffee-Africa
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   Configure the following environment variables:

   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Google OAuth (if using)
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   ```

   For the server (`apps/server/.env`):

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/buymeacoffee_africa
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. **Set up the database**

   Navigate to the server directory and run Prisma migrations:

   ```bash
   cd apps/server
   pnpm prisma migrate dev
   pnpm prisma generate
   cd ../..
   ```

### Running the Application

#### Development Mode

To run the full application in development mode:

**Option 1: Run everything from root**

```bash
pnpm dev
```

**Option 2: Run client and server separately**

In one terminal (Client):

```bash
pnpm dev
```

In another terminal (Server):

```bash
cd apps/server
node server.js
```

The application will be available at:

- **Client**: http://localhost:5173
- **Server**: http://localhost:3000

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## 📁 Project Structure

```
BuyMeACoffee-Africa/
├── apps/
│   ├── client/          # React client application
│   └── server/          # Express server with Prisma
├── src/                 # Main source code
│   ├── components/      # Reusable components
│   ├── pages/          # Application pages
│   ├── context/        # React context providers
│   ├── routes/         # Routing configuration
│   └── locales/        # i18n translations
├── public/             # Static assets
└── pnpm-workspace.yaml # PNPM workspace configuration
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS
- **Backend**: Express.js, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Supabase, JWT
- **Internationalization**: i18n-react
