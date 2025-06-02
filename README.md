# WordRun

A fast-paced word game built with React Native that challenges players to type valid English words before time runs out. Test your vocabulary and typing speed as you race against the clock!

## Features

- Dynamic word length challenges
- Real-time word validation against English dictionary
- Countdown timer for each word challenge
- Responsive letter box display
- Instant feedback on word input
- Clean and intuitive user interface

## Game Concept

WordRun is a word game where:
- Players are given a target word length
- A timer counts down as they type
- Words must be valid English dictionary words
- Players need to complete the word before time runs out
- The game gets progressively more challenging

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native development environment set up
- iOS: XCode (for Mac users)
- Android: Android Studio

### Installation

1. Clone the repository:
```sh
git clone https://github.com/theAydogan/WordRun.git
cd WordRun
```

2. Install dependencies:
```sh
npm install
# or
yarn install
```

3. For iOS, install pods:
```sh
cd ios
pod install
cd ..
```

### Running the App

Start the Metro bundler:
```sh
npm start
# or
yarn start
```

Run on iOS:
```sh
npm run ios
# or
yarn ios
```

Run on Android:
```sh
npm run android
# or
yarn android
```

## Game Structure

- `App.tsx`: Main application component with navigation setup
- `components/screens/GameScreen.tsx`: Main game screen with:
  - Word length generation
  - Timer implementation
  - Dictionary word validation
  - Letter box display
  - User input handling
- `components/common/SquareBox.tsx`: Reusable component for letter boxes

## Development

The game is built using:
- React Native
- TypeScript
- React Navigation for screen management
- English dictionary API for word validation

## Contributing

Feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.
