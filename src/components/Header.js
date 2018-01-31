// Import libraies for makein a Component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyles: {
    fontSize: 20,
    color: 'black'
  },
  viewStyle: {
    backgroundColor: '#cecece',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make component available to other parts of the app
export default Header;
