import { StyleSheet } from "react-native";
import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale()

export const GridStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5
  },
  cell: {
    flex: 1,
    borderWidth: 2.5,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    minHeight: 100,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cellText: {
    textAlign: 'center'
  }
})

export const CardStyle = StyleSheet.create({
  CardContainer:{
    
  }
})

export const DefaultStyle = StyleSheet.create({
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
  },
})