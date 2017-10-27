# Sampark

This app was created to help Richmond BAPS mandir do Sampark Seva. It is still a work in progress. If you'd like to get involved or use this app, email Shruti at shruti222patel@gmail.com


## Development

### Tech Stack
- React-native
- Google Spreadsheets
- Xcode (to run iphone simulations)
- Android SDK (to run android simulations)
- GenyMotion (to run android simulations)
- Expo XDE (command center for running android & ios simulations)
- Ruby (necessary for cocopods used in ios)

### Download Dependencies
#### Necessary
- [Download Node & npm](https://nodejs.org/en/download/)
#### Recommended
- Brew (for easy downloads & package management in macs)
- Webstorm ([Download](https://www.jetbrains.com/webstorm/)) - javascript code editor
- Expo Client ([Apple download](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) & [Android download](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)) - run dev app on physical phone
- Ruby (`brew install ruby`)
    - `gem install cocoapods --pre`
    - `pod repo remove master`
    - `pod setup`
    - `pod install`
- GenyMotion ([Download](https://www.genymotion.com/fun-zone/))
    - Download android sdk
        - run `brew tap caskroom/cask`
        - run `brew install caskroom/cask/android-sdk`
    - Create device on GenyMotion
    - On GenyMotion, go to Settings -> ADB, select "Use custom Android SDK tools", and point it at your Android SDK directory (if you used `brew install android-sdk`, the directory will be /usr/local/bin)


### Code Setup
1. `git clone` repo locally
2. `cd` into root repo directory
3. run `npm install` (may also need to run npm install -g create-react-app -- not sure)
    * if your default python version is 3, you will need to make sure you have v2.7 installed and run `npm install --python=python2.7` instead
    * this could be a helpful github issue to look at (https://github.com/nodejs/node-gyp/issues/746)


### Run Dev Apps
5. run `npm run ios` to run in an ios simulator
6. run `npm run android` to run in an android simulator



### Debugging
1. npm install -g react-devtools (Details here: https://github.com/facebook/react-devtools/tree/master/packages/react-devtools)
2. Open emulators (ios & android) before running `react-native run-ios` or `react-native run-android`
     - For ios:
        1. Shake simulator iphone by going to Hardware > Shake on the simulator menu
        2. Click the 'Open debugger' option
3. The online debugging screen should be on `http://localhost:8081/debugger-ui`

4. (Still need to test this) to run the dev app on your phone:
    - download the Expo Client
    - create a new project (you'll have to add the `exp` url e.g. `exp://192.168.1.248:19000` )



#### May have to run
`react-native link`


### Deployment
#### Android
- you will need to get the appropriate key (`.keystore` file) from someone on the team that has it & place the key in `sampark/android/`
- run `cd android && ./gradlew assembleRelease`
- sign generated apk `./sign-mac-example.sh app/build/outputs/apk/app-release-unsigned.apk`
- signed apk is android/app/build/outputs/apk/app-release-unsigned.apk` (despite the name)

##### Making Updates
- to update the key information, you'll have to uupdate `sampark/android/gradle.properties` & `sampark/android/sign-mac.sh`

##### More Info
- for more info/release configs, read https://facebook.github.io/react-native/docs/signed-apk-android.html
- for more info on self signing apk, read http://www.androiddevelopment.org/tag/apk/