# Environment Setup

This document explains how to set up your local development environment to run the React Native app using Android Studio as the emulator platform.

# Prerequisites

Please ensure the following tools are installed on your machine:

- Operating System: macOS, Windows, or Linux
- Node.js: v18 or higher
- npm or yarn
- Git

## Development Environment Setup

### 1. Install Node.js

Download and install from the official website:  
https://nodejs.org/

Or use a package manager:

```bash
# macOS (Homebrew)
brew install node

# Ubuntu/Debian
sudo apt install nodejs npm
```

### 2. Verify Installation:

Run these commands to check that Node.js and npm are installed:

```bash
node -v
npm -v
```

### 3. Install Android Studio

Download and install from: https://developer.android.com/studio
Install with default settings

Set up environment variables:

```bash
# Windows
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;LOCALAPPDATA%\Android\Sdk\platform-tools"

# macOS / Linux
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 4. iOS Development Setup (macOS Only)

Install Xcode
Download from Mac App Store
Install Xcode Command Line Tools:

```bash
xcode-select --install

Install CocoaPods
sudo gem install cocoapods
```

### 5. Install Code Editor - Visual Studio Code

Download from: https://code.visualstudio.com/

### 6. Create a test project to verify setup:

```bash
npx react-native init EnvironmentTest
cd EnvironmentTest
```

### 7. Run the project

```bash
# Android
npx react-native run-android

# For iOS (macOS only)
npx react-native run-ios
```
