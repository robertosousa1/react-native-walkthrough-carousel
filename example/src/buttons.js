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
