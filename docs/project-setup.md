
# Project Setup

## Introduction

This guide provides instructions for setting up the Ebenböck Praxis Website, a static website built with HTML, CSS, and JavaScript, using VS Code's Live Server extension for local development.

## Prerequisites

- **Visual Studio Code (VS Code)** – Download from [here](https://code.visualstudio.com/).
- **Live Server Extension** – Install it from the VS Code Extensions Marketplace.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bermar24/Ebenboeck_Praxis
   ```

2. Open the project folder in VS Code:

   ```bash
   cd Ebenboeck_Praxis
   code .
   ```

## Running the Project

1. Open VS Code and ensure the Live Server extension is installed.
2. Open the main `index.html` file.
3. Right-click inside `index.html` and select **"Open with Live Server"**.

   The website should now be running locally at:

   ```
   http://127.0.0.1:5500/
   ```

   (or a similar URL depending on your system configuration).

## File Structure

```
/Ebenboeck_Praxis
  ├── index.html         # Main HTML file
  ├── css/
  │   ├── styles.css     # Main CSS file
  ├── js/
  │   ├── script.js      # Main JavaScript file
  ├── assets/            # Images and other assets
  ├── README.md
```

## Common Issues & Solutions

### 🚨 Issue: Live Server is not working

#### ✅ Solution:

1. Open the VS Code Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).
2. Search for **"Live Server: Open with Live Server"** and select it.
3. If it's still not working, reinstall the Live Server extension.

### 🚨 Issue: Changes not updating automatically

#### ✅ Solution:

1. Save the file (Ctrl+S / Cmd+S).
2. Restart Live Server.

Let me know if you need any tweaks! 🚀
