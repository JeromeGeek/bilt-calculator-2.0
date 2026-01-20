
# Bilt Rewards Calculator 2.0

An advanced, interactive calculator designed to help users understand and maximize their earnings with the new Bilt Rewards Card 2.0 program. This tool provides clear, detailed projections for points and cash rewards based on your monthly spending habits and chosen card tier.

## ✨ Live Demo

A live version of the calculator is deployed on GitHub Pages. You can access it here:

**[Link to your GitHub Pages URL will appear here after deployment]**

## 🚀 Features

- **Dual Calculator Modes:** Switch between two distinct reward earning options:
    - **Option 1: Tiered:** Earn up to 1.25x points on rent based on your everyday spending.
    - **Option 2: Bilt Cash:** Use Bilt Cash earned from everyday spending to offset the 3% transaction fee on rent payments.
- **All Card Tiers Supported:** Calculate potential rewards for all Bilt card tiers: **Blue**, **Obsidian**, and **Palladium**.
- **Interactive Sliders:** Easily adjust your monthly rent/mortgage and everyday spend to see how your earnings change in real-time.
- **Visual Progress Tracking:** A dynamic progress bar shows you exactly how close you are to reaching the next rent multiplier tier.
- **Detailed Annual Summary:** Get a complete breakdown of your annual points, estimated cash value, welcome bonuses, and Bilt Cash surplus.
- **Responsive Design:** A clean, mobile-first interface that works beautifully on any device.
- **Dark Mode Aesthetics:** A sleek, modern design inspired by the Bilt card itself.

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [GitHub Actions](https://github.com/features/actions) for continuous deployment to [GitHub Pages](https://pages.github.com/).

## 🖥️ Running Locally

This project is a static web application and does not require a complex build process to run locally.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Open `index.html`:**
    You can simply open the `index.html` file directly in your web browser.

    Alternatively, for a more robust experience (especially for development), you can serve the files using a simple local server. One popular option is the `live-server` extension for VS Code, or you can use Python's built-in server:

    ```bash
    # If you have Python 3 installed
    python3 -m http.server
    ```
    Then, open `http://localhost:8000` in your browser.

## 🚀 Deployment

This repository is configured with a GitHub Actions workflow (`.github/workflows/workflow.yaml`) that automatically builds and deploys the application to GitHub Pages.

- **Trigger:** A push to the `main` branch.
- **Action:** The workflow uploads the project files as a pages artifact and deploys them.

To enable this, you need to configure GitHub Pages in your repository's settings:
1.  Go to `Settings` > `Pages`.
2.  Under `Build and deployment`, select `GitHub Actions` as the source.

---

This project was created to demystify the Bilt 2.0 rewards program and help cardholders make informed decisions.
