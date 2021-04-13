import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
    children?: React.ReactNode,
    style?: object

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default function HamburgerDropdownMenu ({ children, style }: Props) {
  return (
    <View style={styles.container}>
        <Icon name='menu' type='material'>{children}</Icon>
    </View>
  )
}
