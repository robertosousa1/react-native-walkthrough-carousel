<p align="center" >
<p align="center" >
    <img alt="react-native-walkthrough-carousel" src="https://res.cloudinary.com/robertosousa1/image/upload/v1619925686/react-native-walkthrough-carousel/walkthrough_huw92v.gif" width="260" height="510" />
</p>

<h3 align="center">
  💬 React Native Walkthrough Carousel
</h3>
<p align="center">
  The most complete chat UI for React Native & Web
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/react-native-walkthrough-carousel"><img alt="npm version" src="https://badge.fury.io/js/react-native-walkthrough-carousel.svg"/></a>
 <a title='License' href="https://github.com/robertosousa1/react-native-walkthrough-carousel/blob/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a href="#open-source"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"/></a>
</p>

## Installation

- Using [npm](https://www.npmjs.com/#getting-started): 
`npm install react-native-walkthrough-carousel`

- Using [Yarn](https://yarnpkg.com/):
 `yarn add react-native-walkthrough-carousel`

## Example

```jsx
import React from 'react';
import Walkthrough from 'react-native-walkthrough-carousel';

import logo from '../assets/logo.png';

import carousel from './carousel';
import buttons from './buttons';

const styles = {
	backgroundColor: '#eee',
	card: {
		borderColor: '#ddd',
	},
	dotStyle: {
		backgroundColor: 'rgba(255, 255, 255, 0.92)',
	},
	inactiveDotStyle: {
		backgroundColor: '#ddd',
	},
};

export default function App() {
	return (
		<>
			<Walkthrough
				logo={logo}
				carousel={carousel}
				buttons={buttons}
				styles={styles}
			/>
		</>
	);
}
```

```jsx
/*
* carousel.js
*/

import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		color: '#333',
		fontWeight: 'bold',
		textAlign: 'center',
		paddingHorizontal: 10,
	},
	text: {
		fontWeight: '300',
		fontSize: 15,
		color: '#666',
		textAlign: 'center',
		lineHeight: 20,
		paddingHorizontal: 25,
	},
	bannerImage: {
		resizeMode: 'contain',
		flex: 2,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	bold: { fontWeight: 'bold' },
});

export default [
	{
		key: 1,
		title: <Text style={styles.title}>Create native apps</Text>,
		text: (
			<Text style={styles.text}>
				React Native combines the best parts of native development with React,{' '}
				<Text style={styles.bold}>a best-in-class JavaScript,</Text> library for building user interfaces.
			</Text>
		),
		banner: (
			<Image 
				source={require('../../example/assets/1.png')} 
				style={styles.bannerImage} 
			/>
		),
	},
	...
];
```

```jsx
/*
* buttons.js
*/

const previousButton = {
	text: 'Previous',
	styles: {
		color: '#61DBFB',
		borderColor: '#61DBFB',
		borderWidth: 1,
	},
};

const nextButton = {
	text: 'Next',
	styles: {
		backgroundColor: '#61DBFB',
		borderColor: '#61DBFB',
		borderWidth: 2,
	},
};

const doneButton = {
	text: 'Continue',
	styles: {
		borderColor: '#61DBFB',
		backgroundColor: '#61DBFB',
		borderWidth: 1,
	},
	onPress: async function handleDone() {
		console.log('Continue button was clicked');
	},
};

export default { previousButton, nextButton, doneButton };
```

## Advanced example

See [`example`](https://github.com/robertosousa1/react-native-walkthrough-carousel/tree/master/example) for a working demo!

## Props

- **`logo`** _(String)_ - Importing an image to be displayed at the top of the page
- **`carousel`** _(Array of objects)_:
		- **Key** _(Number)_: unique key to identify the position within the array
		- **Title** _(Text Component)_: Text component, styled input is supported - React Native `<Text/>` recommended
		- **Text** _(Text Component)_: Text component, styled input is supported - React Native `<Text/>` recommended
		- **Banner** _(Image Component)_:Image component, stylized input is supported - React Native `<Image/>` recommended
- **`buttons`** _(Object)_: 
		- **previousButton** _(Object)_: Includes `text` attribute that expects a string and `styles` that expects a stylized object 
		- **nextButton** _(Object)_: Includes `text` attribute that expects a string and `styles` that expects a stylized object 
		- **doneButton** _(Object)_: Includes `text` attribute that expects a string, `styles` that expects an object with stylization and `onPress` that expects a function to be executed at the click of the button 
- **`styles`** _(Object)_ - Wait for a stylized object where at the root of the object will impact the component as a whole, the `card` attribute will only impact the cards, the `dotStyle` attribute will only impact the active dot, and finally, the inactiveDotStyle will have impact only on the idle dot

## How to contribute

-   Make a fork;
-   Create a branck with your feature:  `git checkout -b my-feature`;
-   Commit changes:  `git commit -m 'feat: My new feature'`;
-   Make a push to your branch:  `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.


## License
This project is under the MIT license. See the [LICENSE](https://github.com/robertosousa1/react-native-walkthrough-carousel/blob/master/LICENSE) for more information.