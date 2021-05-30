import React from 'react'
import { useWindowDimensions } from 'react-native'

export default function useWindowScale() {
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    const windowScale =
    (windowHeight / windowWidth > 1)
      ? windowHeight / (windowHeight / windowWidth)
      : windowWidth / (windowWidth / windowHeight)

    return windowScale;
}