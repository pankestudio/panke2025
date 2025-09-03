# pankestudio Portfolio

This is the source code for the pankestudio minimalist artist portfolio website.

## Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```
    This will create a `package-lock.json` file. Be sure to commit this file to your repository.

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at a local address like `http://localhost:5173`.

## Content Management

All website content (text and image URLs) is managed in a single file: `lib/content.ts`. To update the website, simply edit this file.

## Deployment

This project is configured for seamless deployment on [Netlify](https://www.netlify.com/).

1.  Push your code to a GitHub repository.
2.  Connect the repository to a new site in your Netlify dashboard.
3.  Netlify will automatically detect the build settings from `vite.config.ts` and `package.json` and deploy your site.
4.  Every `git push` to the `main` branch will trigger a new deployment.
