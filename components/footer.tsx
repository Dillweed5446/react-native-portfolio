import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
    title?: string,
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNode: {
    flex: 3,
    alignSelf: 'center',
    maxWidth: 250,
    fontWeight: 'bold'
  },
  icon: {
    flex: 1,
    minWidth: 50
  }
})

export default function FooterBar ({ style, title }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.textNode}>{title}</Text>
        <Icon name='linkedin' type='font-awesome-5' color='teal' style={styles.icon}/>
        <Icon name='github' type='font-awesome-5' color='teal' style={styles.icon}/>
        <Icon name='stack-overflow' type='font-awesome-5' color='teal' style={styles.icon}/>
        <Icon name='wordpress' type='font-awesome-5' color='teal' style={styles.icon}/>
    </View>
  )
}
