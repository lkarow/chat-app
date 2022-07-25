# meet app

## Project description

A mobile chat app built with React Native and developed with Expo. It is optimized for iOS and Android. Users can authenticate anonymously using Google Firebase authentication. Google Firestore Database is used to set up a real-time database. Messages are also stored locally on the user's mobile device via Async Storage, allowing users to access their messages offline. Users can send messages and share images and their locations.

<img src="./public/preview-chat-app.jpg" width=50% height=50%>

### User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

### Key Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

## Built With

- React Native

## Dependencies

- React Native
- Expo
- Google Firebase
- Google Firestore Database
- [GiftedChat](https://github.com/FaridSafi/react-native-gifted-chat)
- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)
- [react-native-action-sheet](https://github.com/expo/react-native-action-sheet)
- expo-image-picker
- expo-camera
- expo-location
- react-native-maps

## Run the Project

1. Install Expo CLI as a global npm package: `npm install --global expo-cli`

2. To run the app on your phone install the Expo app (from Google Play Store or App Store). Or to run on your computer install Android Studio (for Windows and Linux users) and/or Simulator from Xcode.

3. Clone repository:

```bash
git clone https://github.com/lkarow/chat-app.git
```

4. Install all dependecies: `npm install`

5. Start project: `expo start`

6. Launch the app on your simulator or on your mobile phone

### Implement own database

Follow the steps to use the app with your own database.

1. Go to [Google Firebase](https://firebase.google.com/) and login with your Google account or create a new account.
2. Go to the <strong>Firebase console</strong> and create a new project.
3. Click on <strong>Develop</strong> on the menu and select <strong>Cloud Firestore</strong> and then <strong>Create Database</strong>
4. Follow the instructions to create a new database. (You can choose to <strong>start in test mode</strong>.)
5. Create a new collection called "messages".
6. Got to <strong>Project settings</strong>, you’ll find a section called <strong>Your apps</strong>. Click the <strong>Firestore for Web</strong> button (it may be shown as the </> icon).
7. A new screen opens asking you to register your web application to connect to the Cloud Firestore database you just created. Enter a name for your chat application and then click <strong>Register</strong> to generate the configuration code. Copy the contents of the firebaseConfig object and paste this configuration info into the firebaseConfig in Chat.js.
