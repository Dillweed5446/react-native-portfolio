import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    children?: React.ReactNode,
    style?: object
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default function NestedDropdownMenu ({ children, style }: Props) {
  return (
    <View style={styles.container}>
        <Text>
            {children}
        </Text>
    </View>
  )
}
