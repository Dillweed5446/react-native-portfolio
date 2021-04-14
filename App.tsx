import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import fontStyles from './styles'
import HeaderBar from './components/headerbar'
import FooterBar from './components/footer'
import ResponsiveImageText from './components/responsiveImageText'

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  titleContainer: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  aboutContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    boxShadow: 'inset 8px 8px 50px rgba(0, 300, 0, .5)',
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  servicesContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  projectsContainer: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    boxShadow: '8px 8px 60px rgba(0, 0, 300, .9)',
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  contactContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 'auto',
    paddingRight: 'auto'
  },
  pageTitle: {
    color: 'rgb(300, 0, 0)',
    alignSelf: 'center'
  }
})

export default function App () {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <HeaderBar title='Paul Dill Portfolio' />
      <View style={styles.titleContainer}>
      <Text style={[styles.pageTitle, fontStyles.header1]}>Paul Dill</Text>
      <Text style={[styles.pageTitle, fontStyles.header2]}>Freelance JavaScript Developer</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={[fontStyles.header2, { alignSelf: 'center', borderBottomWidth: 2, borderBottomColor: 'blue', marginBottom: 8 }]}>About me</Text>
        <ResponsiveImageText>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Fermentum odio eu feugiat pretium nibh ipsum consequat. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Fermentum
        posuere urna nec tincidunt praesent semper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Aliquam ut porttitor leo a diam sollicitudin tempor id.
        Magna sit amet purus gravida quis blandit. Non blandit massa enim nec dui nunc mattis. Eget nullam non nisi est. Volutpat commodo sed egestas egestas fringilla.
        Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tincidunt ornare massa eget egestas purus. Non sodales neque sodales ut. Viverra tellus in hac habitasse.
        Nulla facilisi morbi tempus iaculis urna. Lacus luctus accumsan tortor posuere ac ut consequat. Integer eget aliquet nibh praesent tristique. Pellentesque habitant morbi tristique
        senectus et. Condimentum mattis pellentesque id nibh tortor id aliquet. At erat pellentesque adipiscing commodo elit.`}
        </ResponsiveImageText>
      </View>
      <View style={styles.servicesContainer}>
        <Text style={[fontStyles.header3, { alignSelf: 'center' }]}>Services</Text>
        <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={styles.projectsContainer}>
        <Text style={[fontStyles.header3, { alignSelf: 'center' }]}>Projects</Text>
        <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>Projects will go here in a grid/flex layout</Text>
      </View>
      <View style={styles.contactContainer}>
        <Text style={[fontStyles.header3, { alignSelf: 'center' }]}>Contact Me</Text>
        <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>Create contact form for this section</Text>
      </View>
      <FooterBar title='Created by Paul Dill with choke aloha'/>
      <StatusBar style="auto" />
    </ScrollView>
  )
}
