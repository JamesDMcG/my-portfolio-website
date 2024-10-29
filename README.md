My Portfolio Website

A professional portfolio website to showcase projects, skills, and experience as a full-stack developer. This responsive single-page application is built with React and Node.js, using interactive animations and optimized for SEO and performance.

In order to get this website up and running, please follow the steps below:

1. Clone the repository.
2. In a terminal window, run `npm install`. This will install all the packages required for this project.
3. Run `npm run start`. This will run `node server.js` and `react-scripts start` concurrently. Starting the server and spinning up the website.
4. Navigate to `localhost:3000` to view the website.

Here’s a preview for the README of `my-portfolio-website`:

---

Techniques and Features
- Intersection Observer: Lazy-loads images for performance ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)).
- CSS Grid and Flexbox: Used for responsive layouts ([MDN Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)).
- React Hooks: Enhances code modularity and manages component lifecycle ([MDN React](https://react.dev/)).

Technologies and Libraries
- React Router: For dynamic routing, enabling seamless transitions between sections.
- Framer Motion: Animates components with ease for improved user experience ([Framer Motion](https://www.framer.com/motion/)).
- Google Fonts: Using [Roboto](https://fonts.google.com/specimen/Roboto) for a clean, readable typography style.

Project Structure
my-portfolio-website/
├── build/            # Production build files
├── public/           # Static assets like index.html
├── src/              # Main React app source code
│   ├── components/   # Reusable React components
│   ├── styles/       # Global and component-specific styles
│   └── utils/        # Helper functions
└── server.js         # Node.js server for API and routing
