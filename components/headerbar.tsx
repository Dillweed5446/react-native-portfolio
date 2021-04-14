import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HamburgerDropdownMenu from './hamburgerDropdownMenu'
import { Icon } from 'react-native-elements'

interface Props {
    title?: string
    style?: object
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    minHeight: 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center'
    // justifyContent: 'flex-start'
  },
  textNode: {
    flex: 1
    // margin: 'auto'
    // flexDirection: 'column'
    // alignSelf: 'flex-start'
  }
})

export default function HeaderBar ({ style, title }: Props) {
  return (
    <View style={styles.container}>
        <HamburgerDropdownMenu style={[styles.textNode, { alignSelf: 'flex-start' }]}/>
        <Text style={[styles.textNode, { maxWidth: 120, fontWeight: 'bold' }]}>{title}</Text>
        <Icon name='shuffle' type='material' style={styles.textNode}/>
    </View>
  )
}
