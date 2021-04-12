import { StyleSheet } from "react-native";
import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale()

export default StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 20
  },
  formRow: {
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
    fontSize: 24 * fontScale,
    paddingBottom: 15
  },
  h2: {
    fontSize: 20 * fontScale,
    paddingLeft: 7.5
  },
  h3: {
    fontSize: 16 * fontScale,
  },
  itemContainer: {
    padding: 5
  },
  itemHeader_Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2.5,
    marginBottom: 5
  }
})