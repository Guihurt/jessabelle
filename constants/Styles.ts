import { StyleSheet } from "react-native";
import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale()

export default StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 20
  },
  formRow:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  formHeader: {
    flex: 1.5
  },
  formItem: {
    flex: 3
  },
  title: {
    color: 'white',
    fontSize: 20 * fontScale,
    paddingBottom: 15
  },
  h2: {
    color: 'white',
    fontSize: 16 * fontScale,
    paddingLeft: 7.5
  }
})