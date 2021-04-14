import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    children?: React.ReactNode,
    style?: object
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })

export default function NestedDropdownMenu ({ children, style }: Props) {
  return (
    <View>
        <Text>
            {children}
        </Text>
    </View>
  )
}
