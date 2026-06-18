# SavaPay

[//]: # (/Users/ew/README.md#L5-32)

Stablecoin Saving Platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Stellar](https://img.shields.io/badge/Built%20on-Stellar-black)](https://stellar.org)

## Overview

SavaFi is a Stellar-powered stablecoin savings platform designed to help Africans preserve and grow their wealth using digital dollars.

Across many African countries, inflation and currency depreciation continue to erode purchasing power and reduce the value of personal savings. Existing stablecoin solutions often require navigating exchanges, wallets, and DeFi protocols that are difficult for everyday users to understand.

SavaFi simplifies the entire process into a single mobile application.

Users can:

- Deposit local currency
- Convert savings into USDC
- Earn yield through Stellar-native financial infrastructure
- Track portfolio growth in local currency
- Withdraw funds at any time
- Maintain self-custody without managing seed phrases

Built on Stellar, SavaFi combines embedded wallets, USDC, and yield-generating infrastructure into a simple consumer savings experience.

---

## Vision

To become Africa's most trusted platform for stablecoin savings and wealth preservation.

---

## Mission

To empower Africans with simple, secure, and transparent access to digital dollar savings through Stellar-powered financial infrastructure.

---

## Key Features

- **Stablecoin Savings** – Save in USDC instead of volatile local currencies
- **Yield Generation** – Earn yield through vetted Stellar-native lending infrastructure
- **Embedded Wallets** – Self-custodial wallets created automatically during onboarding
- **Local Currency Tracking** – View balances and growth in local currency
- **Savings Goals** – Create and track personal financial goals
- **Instant Withdrawals** – Access funds at any time
- **Portfolio Analytics** – Monitor savings performance and yield earnings

---

## Architecture

```text
Mobile App
     ↓
Backend Services
     ↓
Stellar Infrastructure
     ↓
Blend Protocol
     ↓
Yield Generation
```

---

## Tech Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Mobile           | React Native, Expo, TypeScript |
| Backend          | Express.js, TypeScript         |
| Blockchain       | Stellar SDK, Horizon APIs      |
| Yield Layer      | Blend Protocol                 |
| Smart Contracts  | Soroban, Rust                  |
| Database         | PostgreSQL                     |
| Cache            | Redis                          |
| Containerization | Docker                         |
| Infrastructure   | Cloud Services                 |
| CI/CD            | GitHub Actions                 |

---

## Project Structure

```text
savafi/
├── apps/
│   ├── api/                 # Express.js backend API
│   ├── mobile/              # React Native mobile application
│   └── admin/               # Internal operations dashboard
│
├── packages/
│   ├── database/            # Database schemas and migrations
│   ├── shared/              # Shared types and utilities
│   ├── stellar/             # Stellar integrations
│   └── ui/                  # Shared UI components
│
├── contracts/
│   └── soroban/             # Future Soroban contracts
│
├── docs/
│   ├── architecture/
│   ├── compliance/
│   ├── whitepaper/
│   └── api/
│
└── .github/
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL
- Redis
- Docker (optional)

### Installation

Clone the repository:

```bash
git clone https://github.com/SavaBlockLabs/savafi.git
cd savafi
```

Install dependencies:

```bash
npm install
```

Copy environment variables:

```bash
cp .env.example .env
```

Configure:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/savafi
REDIS_URL=redis://localhost:6379

STELLAR_NETWORK=testnet
STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org

PRIVY_APP_ID=your_privy_app_id
PRIVY_SECRET=your_privy_secret

MERCURYO_API_KEY=your_mercuryo_key

JWT_SECRET=your_jwt_secret
```

Run migrations:

```bash
npm run db:migrate
```

Start development:

```bash
npm run dev
```

---

## Mobile App Development

The mobile app is built with Expo (React Native) and TypeScript.

### Setup

```bash
cd apps/mobile
npm install
```

### Running the App

```bash
# Start Expo development server
npx expo start

# Run on iOS Simulator
npx expo start --ios

# Run on Android Emulator
npx expo start --android

# Run on Web
npx expo start --web
```

### Building for Production

```bash
# Generate native Android project
npx expo prebuild --platform android

# Generate native iOS project
npx expo prebuild --platform ios

# Build Android APK
cd android && ./gradlew assembleRelease
```

### Tech Stack

| Component    | Technology            |
| ------------ | --------------------- |
| Framework    | Expo SDK 56           |
| UI           | React Native          |
| Language     | TypeScript            |
| Bundler      | Metro                 |
| Build Target | Expo Go / Native Apps |

---

## Available Scripts

```bash
npm run dev
npm run build
npm run test
npm run lint
npm run format
npm run type-check
```

---

## Development Workflow

### Monorepo Development

```bash
npm run dev --filter=api
npm run dev --filter=mobile

npm run build --filter=api
npm run build --filter=mobile
```

### Code Quality

The project uses:

- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint
- TypeScript

### Commit Convention

```text
feat: add new feature
fix: resolve bug
docs: update documentation
refactor: improve code structure
test: add tests
chore: maintenance updates
```

---

## Product Features

### Stablecoin Savings

Users save in USDC to protect purchasing power against inflation and currency depreciation.

### Yield Generation

USDC is supplied to approved Stellar-native lending infrastructure to generate yield.

### Embedded Wallets

Users receive self-custodial wallets automatically during onboarding.

### Savings Goals

Users can create and track goals such as:

- Emergency Funds
- Education
- Rent
- Travel
- Business Capital

### Portfolio Dashboard

Users can monitor:

- Current Savings
- Yield Earned
- Historical Growth
- Goal Progress

---

## Stellar Integration

### Components Used

#### USDC on Stellar

Used as the primary savings asset.

#### Stellar Wallet Infrastructure

Provides self-custodial user accounts.

#### SEP-10

Authentication and wallet session management.

#### Horizon APIs

Transaction monitoring and balance synchronization.

#### Soroban

Future programmable savings products.

#### Blend Protocol

Yield generation infrastructure.

---

## Security & Compliance

### Security Measures

- End-to-end encrypted communication
- Secure authentication
- Infrastructure monitoring
- Transaction verification
- Wallet security best practices
- Secrets management

### Compliance

SavaFi maintains compliance through:

- KYC verification where required
- AML monitoring
- Transaction screening
- Risk-based monitoring
- Data protection controls

---

## Product Roadmap

### Phase 1 — MVP

- Mobile onboarding
- Embedded wallets
- Testnet USDC integration
- Savings dashboard
- Initial yield infrastructure

### Phase 2 — Testnet Expansion

- Blend integration
- Savings goals
- Portfolio analytics
- Closed beta testing
- Security hardening

### Phase 3 — Mainnet Launch

- Production deployment
- Public mobile applications
- Fiat deposit integrations
- Real USDC savings
- Customer support systems

---

## Open Source Contributions

We welcome contributions from:

- Mobile Developers
- Backend Engineers
- Stellar Developers
- Soroban Developers
- Technical Writers
- Security Researchers
- UI/UX Designers

Please read CONTRIBUTING.md before opening a pull request.

---

## Team

### SavaBlockLabs

Building open financial infrastructure for Africa.

SavaBlockLabs is an open-source fintech organization focused on creating accessible, transparent, and scalable financial products powered by Stellar.

---

## License

This project is licensed under the MIT License.

See LICENSE for details.

---

## Support

Questions, issues, or suggestions?

Open a GitHub Issue or start a GitHub Discussion.

---

## Acknowledgements

- Stellar Development Foundation
- Blend Protocol
- Privy
- Mercuryo
- The Open Source Community

---

## Links

- Documentation
- Whitepaper
- Compliance Policies
- Architecture Documentation
- GitHub Organization
