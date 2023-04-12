[![npm version](https://img.shields.io/npm/v/react-native-twitter-preview.svg)](https://www.npmjs.com/package/react-native-twitter-preview)
[![npm downloads](https://img.shields.io/npm/dm/react-native-twitter-preview.svg)](https://www.npmjs.com/package/react-native-twitter-preview) 
[![npm license](https://img.shields.io/npm/l/react-native-twitter-preview.svg)](https://www.npmjs.com/package/react-native-twitter-preview) 

# react-native-twitter-preview

React Native library for previewing embedded Twitter tweets using their URL. The library provides a customizable preview of a tweet's author, text, and media content, allowing developers to match the preview's appearance to their app's design.


## Installation

```sh
npm install react-native-twitter-preview
```

## Usage

```js
import { TwitterPreviewView } from 'react-native-twitter-preview';

// ...

<TwitterPreview
  url={'https://twitter.com/elonmusk/status/1636162726140493825'}
  backgroundColor={'#272A35'}
/>;
```

<h1>
 <img height='500' src="./example/assets/screenshot.png" /><br/>
</h1>

### Props

| Name            | Description                       | Type           | Required?                      | Default                        |
| --------------- | --------------------------------- | -------------- | ------------------------------ | ------------------------------ |
| url             | Tweet url                         | string         | V                              |                                |
| style           | Tweet container style             | object (style) |                                |                                |
| backgroundColor | Background color behind the tweet | string         |                                | '#FFF'                         |
| onPressTweet    | Called when a tweet is pressed    | Function       |                                | Opens the tweet in the browser |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## Author

Made by [Idanlevi1](https://github.com/idanlevi1)
