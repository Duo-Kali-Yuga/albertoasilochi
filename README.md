🌐 Interactive 3D Multilingual Portfolio
Full-Stack Engineering x Creative 3D Development
This is a high-performance, responsive portfolio built to showcase the intersection of Full-Stack development and Immersive 3D experiences. The project focuses on clean architecture, internationalization (i18n), and optimized WebGL rendering.

🚀 Key Technical Features
1. Optimized 3D Rendering (React Three Fiber)
Hybrid Mobile Strategy: To ensure 100% stability on mobile devices, the site automatically swaps heavy WebGL BallCanvas elements for lightweight 2D optimized images based on viewport detection.

Dynamic Environments: Integrated a custom useThemeDetector hook that synchronizes the Three.js <Environment /> (HDRIs) and lighting presets with the user's CSS theme (Dark/Light).

Performance Tuning: Utilized dpr={[1, 2]} and gl={{ powerPreference: "high-performance" }} to maximize frame rates while protecting battery life.

2. Advanced CSS Architecture
Dual-Layer Theming: Implemented a robust Dark/Light mode using CSS Variables and data-theme attributes, allowing for instant transitions without page flickers.

Glassmorphism UI: Developed a "Sticky-to-Fixed" Navbar using native Scroll Observers that features real-time backdrop-blur and a GPU-accelerated scroll progress bar (using scaleX for zero layout shifts).

3. Internationalization (i18n)
Fully localized content in English (en), Spanish (es), and Chinese (zh).

Structured JSON content management for easy scalability of project descriptions and professional bio.

🛠️ Tech Stack
Framework: Next.js 15 (App Router)

3D Engine: React Three Fiber & Three.js

Styling: Tailwind CSS

Animation: GSAP (for complex timelines) & Framer Motion

Language: TypeScript

📂 Project Structure
Bash

├── public/               # Static assets (HDRIs, 3D Models, Icons)
├── src/
│   ├── components/       # UI Components (Navbar, Tech, Projects)
│   ├── context/          # Theme & Language Providers
│   ├── constants/        # Multi-language JSON content
│   ├── utils/
│   │   ├── 3DModels/     # R3F Canvas components
│   │   └── UI/           # Reusable UI elements
│   └── styles/           # Global CSS and Theme variables

🛠️ Installation & Setup
Clone the repository:

Bash

git clone https://github.com/yourusername/portfolio.git
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Build for production:

Bash

npm run build