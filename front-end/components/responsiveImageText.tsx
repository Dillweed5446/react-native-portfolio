import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import fontStyles from '../styles'
import '@expo/match-media'
import { useMediaQuery } from 'react-responsive'

interface ImageProps {
style?: React.ReactNode,
children: React.ReactNode,
id?: string
}

const styles = StyleSheet.create({
  smallScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  largeScreen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profileImage: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  }
})

export default function ResponsiveImageText ({ style, children, id }: ImageProps) {
  const isMobileDevice = useMediaQuery({
    maxDeviceWidth: 850,
    query: '(max-device-width: 850px)'
  })

  if (isMobileDevice) {
    return (
          <View style={styles.smallScreen}>
              <Image
            style={styles.profileImage}
            source={require('../assets/profilepic.jpg')}
            />
            <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>{children}</Text>
          </View>
    )
  }
  return (
    <View style={styles.largeScreen}>
        <Image
      style={styles.profileImage}
      source={require('../assets/profilepic.jpg')}
      />
      <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>{children}</Text>
    </View>
  )
}
