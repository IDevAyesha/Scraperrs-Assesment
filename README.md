Scrapers Assessment Project

📂 Project Structure
bash
Copy
Edit
src/
├── components/
│   ├── common/
│   │   ├── table.jsx       # Reusable table component
│   ├── layout/
│   │   ├── header.jsx      # Header component
│   │   ├── sidebar.jsx     # Sidebar navigation component
│   ├── sales/
│   │   ├── salesReport.jsx # Component for sales reports
│   ├── statistics/
│   │   ├── statistics.jsx              # Main statistics component
│   │   ├── statisticsCategory.jsx      # Statistics by category
│   │   ├── statisticsTopSelling.jsx    # Statistics for top-selling items
│   │   ├── stats.jsx                   # General stats display component
├── pages/
│   ├── Home.jsx           # Main home page
├── routes/
│   ├── Routes.jsx         # Application routes configuration
├── utils/
│   ├── Data.js            # Utility file for managing data
├── App.jsx                # Root component

💡 Features
Reusable Components: Common components like table.jsx ensure reusability and consistency across the application.
Responsive Design: Styled with Tailwind CSS, ensuring the application is fully responsive on all devices.
Performance Optimized: Vite's fast development build ensures better performance during development and production.
Statistics Module: Dedicated components to handle various statistical views (e.g., category stats, top-selling stats).
Sales Report Module: A separate module for visualizing sales data.
Code Formatting: Prettier ensures a consistent code style across the project.
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-repo/scrapers-assessment.git
cd scrapers-assessment
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev
This will start the Vite development server. Open your browser and navigate to http://localhost:5173.

📦 Scripts
The following npm scripts are available in this project:

dev: Starts the Vite development server.
build: Builds the project for production.
preview: Previews the production build.
lint: Lints the code using ESLint.
format: Formats the code using Prettier.
🎨 Styling with Tailwind CSS
Tailwind CSS is used to style the application. You can find the configuration in the tailwind.config.js file. To customize the theme or extend the utilities, refer to the Tailwind documentation: Tailwind Docs.

📏 Code Formatting
Prettier is used to ensure consistent code formatting. The configuration can be found in .prettierrc. To format your code, you can run:

bash
Copy
Edit
npm run format
🛠️ Folder Details
components/common/: Contains shared components like table.jsx for reuse across modules.
components/layout/: Includes layout components such as header.jsx and sidebar.jsx.
components/sales/: Houses sales-related components like salesReport.jsx.
components/statistics/: Dedicated to statistical views with separate files for different types of statistics.
pages/: Contains pages, such as the main Home.jsx.
routes/: Handles the routing configuration in Routes.jsx.
utils/: Utility folder for shared helper files like Data.js.
🔗 Useful Links
React Documentation
Vite Documentation
Tailwind CSS Documentation
Prettier Documentation