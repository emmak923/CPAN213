# Project Structure:

This document outlines the structure of the MyFirstApp React Native project.

## Rood Directory

MyFirstApp/
├──android/ # Android-specific files
├──ios/ # iOS-specific files
├──node_modules/ # Dependencies
├──assets/ # folder to keep an image
├──src/
├──App.js # Main app component
├──index.js # Entry point
├──project-structure.md
├──package.json # Project configuration
└──README.md # Project documentation

## Folders and Files Explained

### `/android/`

Contains the native Android project files. Only relevant when building or customizing for Android platform.

### `/ios/`

Contains the native iOS project files. Only relevant when building or customizing for iOS platform.

### `/node_modules/`

Auto-generated folder where all project dependencies are installed. You should not manually edit files here.

### `App.js`

The main component of your app. It defines the UI and core logic.

### `index.js`

The entry point for the app. Registers the root component (`App.js`) with React Native's runtime.

### `package.json`

Defines dependencies, scripts, and project metadata. Used by npm or yarn.

### `README.md`

Main documentation file for the project. Contains setup, usage, and contribution info.
