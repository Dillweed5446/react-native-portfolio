import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import fontStyles from './styles'
import HeaderBar from './components/headerbar'

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1
    // alignSelf: 'center',
    // top: 0
    // position: 'relative'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    color: 'rgb(300, 0, 0)'
  }
})

export default function App () {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <HeaderBar style={styles.header} title='Paul Dill Portfolio'></HeaderBar>
      <View style={styles.titleContainer}>
      <Text style={[styles.title, fontStyles.header1]}>Paul Dill</Text>
      <Text style={[styles.title, fontStyles.header2]}>Freelance JavaScript Developer</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}
