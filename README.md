# HawkStack × Red Hat Landing Page

A modern, animated landing page for HawkStack's Red Hat Enterprise Linux (RHEL) training and certification services. Built with React, Vite, and Tailwind CSS..

![HawkStack Landing Page](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)

## 🚀 Features

- **Sequential Animations**: Floating components appear one-by-one with smooth fade-in effects
- **Horizontal Cloud Animation**: Unique left-right oscillation for cloud elements
- **Vibrant Color Scheme**: Eye-catching cyan, pink, lime, and red color palette
- **Responsive Design**: Fully responsive layout optimized for all screen sizes
- **Modern UI Components**: 
  - Hero section with gradient text
  - Animated floating cards
  - Security status indicators
  - Performance metrics display
  - Interactive CTA buttons

## 🎨 Design Highlights

- Custom gradient text effects
- Glassmorphism UI elements with backdrop blur
- Smooth hover transitions
- Neon glow effects
- Sequential component animations with staggered delays

## 📦 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Styling**: Tailwind CSS 3.4.17
- **Language**: JavaScript (ES6+)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajashekharvn/hawkstack.git
cd hawkstack
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure.

```
landing-page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Main hero section
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Footer.jsx            # Footer component
│   │   ├── FloatingIcon.jsx      # Animated floating wrapper
│   │   ├── CTAButton.jsx         # Call-to-action buttons
│   │   ├── ApproachSection.jsx   # HawkStack approach
│   │   ├── RHCSASection.jsx      # RHCSA certification info
│   │   └── TrainingSection.jsx   # Training details
│   ├── styles/
│   │   └── animations.css        # Custom animations
│   ├── assets/                   # Images, logos, icons
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Components

### Hero Section
- Gradient heading with "RHCSA Certification & Enterprise Cloud Solutions"
- Animated statistics (99.9% Uptime, 500K+ Threats Blocked, 24/7 Monitoring)
- Dual CTA buttons for enrollment and course viewing
- Floating elements with sequential animations

### Floating Animations
- **Cloud**: Horizontal oscillation (left-right movement)
- **Security Card**: Vertical float with fade-in
- **RHCSA Badge**: Delayed appearance with continuous float

### Color Palette
- **Cyan**: `#00D9FF` - Primary accents
- **Pink**: `#F9A8D4` - Secondary text
- **Lime**: `#A3E635` - Success indicators
- **Red**: `#EE0000` - Critical metrics
- **Purple**: `#D8B4FE` - Supporting text
- **Orange**: `#FED7AA` - Highlights

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📄 License

This project is proprietary and confidential. © 2024 HawkStack × RedHat. All rights reserved.

## 👥 Contact

For inquiries about RHCSA training and certification, visit [HawkStack](https://github.com/Rajashekharvn/hawkstack)

---

**Built with ❤️ by the HawkStack Team**
