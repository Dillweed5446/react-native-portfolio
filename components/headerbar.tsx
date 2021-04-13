import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HamburgerDropdownMenu from './hamburgerDropdownMenu'

interface Props {
    title?: string
    style?: object
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: 30,
    flex: -1,
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'flex-start'
  },
  textNode: {
    // flexDirection: 'column'
    // alignSelf: 'flex-start'
  }
})

export default function HeaderBar ({ style, title }: Props) {
  return (
    <View style={styles.container}>
        <HamburgerDropdownMenu style={styles.textNode}/>
        <Text style={styles.textNode}>
            {title}
        </Text>
    </View>
  )
}
