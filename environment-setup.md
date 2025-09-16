# Environment Setup

This document explains how to set up your local development environment to run the React Native app using Android Studio as the emulator platform.

# Prerequisites

Please ensure the following tools are installed on your machine:

- Operating System: macOS, Windows, or Linux
- Node.js: v18 or higher
- npm or yarn
- Git

## Development Environment Setup

### 1. Install Node.js (5 minutes)

#### 1-1 Download Node.js

Download and install from the official website:  
https://nodejs.org/

Or use a package manager:

```bash
# macOS (Homebrew)
brew install node

# Ubuntu/Debian
sudo apt install nodejs npm
```

#### 1-2. Verify Installation

Run these commands to check that Node.js and npm are installed:

- Node.js should be v18.0.0 or higher
- npm should be v8.0.0 or higher

```bash
node -v
npm -v
```

### 2. Install React Native CLI (3 minutes)

```bash
npm install -g react-native-cli
npm install -g @react-native-community/cli
```

### 3. Install Android Studio (10 minutes)

#### 3-1. Install Android Studio

Download and install from: https://developer.android.com/studio
Install with default settings

#### 3-2. Set Environment Variables Windows:

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

#### 4-1 Install Xcode

Download from Mac App Store
Install Xcode Command Line Tools:

```bash
xcode-select --install
```

#### 4-2. Install CocoaPods

```bash
sudo gem install cocoapods
```

#### 4-5. Install Code Editor - Visual Studio Code

Download from: https://code.visualstudio.com/

### 5. Environment Verification (20 minutes)

#### 5-1. Create a test project to verify setup:

```bash
npx react-native init EnvironmentTest
cd EnvironmentTest
```

#### 5-2. Run the project

```bash
# Android
npx react-native run-android

# For iOS (macOS only)
npx react-native run-ios
```

- When you use this command to open your project and error messages are on your screen, try this command and create new project:

```bash
npx @react-native-community/cli@latest init NewProjectName
```
