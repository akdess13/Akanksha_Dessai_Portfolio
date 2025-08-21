# Akanksha Gauns Dessai - Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js and Tailwind CSS, showcasing the skills, projects, and experience of Akanksha Gauns Dessai - an MCA student and full-stack developer.

## 🚀 Features

### ✨ Modern Design
- Clean, professional design with smooth animations
- Dark/Light theme toggle with system preference detection
- Responsive layout for all devices
- Beautiful gradient accents and modern typography

### 🎯 Portfolio Sections
- **Hero Section**: Eye-catching introduction with animated background
- **About Me**: Personal bio, profile picture, and soft skills
- **Technical Skills**: Categorized skills with icons and descriptions
- **Education Timeline**: Academic journey with visual timeline
- **Projects Showcase**: Portfolio projects with technologies and GitHub links
- **Experience**: Professional experience and achievements
- **Extracurriculars**: Sports, leadership, and community involvement
- **Contact**: Contact form and information

### 🛠️ Technical Features
- React.js with functional components and hooks
- Tailwind CSS for styling and responsiveness
- Framer Motion for smooth animations
- Lucide React icons for visual appeal
- Theme context for dark/light mode management
- Smooth scrolling navigation
- Mobile-first responsive design

## 🎨 Design Highlights

- **Color Scheme**: Professional blue and green gradients with olive accents
- **Typography**: Inter font family for modern readability
- **Animations**: Staggered animations, hover effects, and smooth transitions
- **Layout**: Card-based design with consistent spacing and shadows
- **Icons**: Meaningful icons for each section and skill category

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Responsive grid layouts
- Adaptive typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Hero.jsx        # Hero section with animations
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Technical skills display
│   ├── Education.jsx   # Education timeline
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Work experience
│   ├── Extracurriculars.jsx # Extracurricular activities
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with social links
├── data/               # Portfolio data
│   └── portfolioData.js # All portfolio information
├── utils/              # Utility functions
│   └── themeContext.js # Theme management context
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details
- Skills and technologies
- Education history
- Project information
- Work experience
- Contact information

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global styles
- Customize component-specific styles in each component

### Content
- Replace placeholder images with actual project screenshots
- Update GitHub links for projects
- Modify descriptions and achievements
- Add or remove sections as needed

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🔧 Technologies Used

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About the Developer

**Akanksha Gauns Dessai** is an MCA student and full-stack developer with expertise in:
- MERN Stack (MongoDB, Express.js, React.js, Node.js)
- AI integration with Hugging Face models
- AWS services (Cognito, S3)
- Modern web development practices
- Problem-solving and team collaboration

## 📞 Contact

- **Email**: akankshadessai13@gmail.com
- **LinkedIn**: [Akanksha Dessai](https://www.linkedin.com/in/akanksha-dessai-5a3549200/)
- **GitHub**: [akdess13](https://github.com/akdess13)
- **Location**: Xeldem, Quepem - Goa, India

---

Built with ❤️ using React and Tailwind CSS 