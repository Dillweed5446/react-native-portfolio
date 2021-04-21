import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import fontStyles from '../styles'
import { useStylesheet } from 'react-native-responsive-ui/dist/typescript/index' // This is temporary until the package is fixed

interface ImageProps {
style?: React.ReactNode,
children: React.ReactNode
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

export default function ResponsiveImageText ({ style, children }: ImageProps) {
  // const [mQuery, setMQuery] = React.useState<any>({
  //   matches: window.innerWidth > 850
  // })

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(min-width: 850px)')
  //   mediaQuery.addListener(setMQuery)
  //   // this is the cleanup function to remove the listener
  //   return () => mediaQuery.removeListener(setMQuery)
  // }, [])

  const staticStyle = [
    {
      query: { minWidth: 850 },
      style: {
        image: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }
      }
    },
    {
      query: { maxWidth: 849 },
      style: {
        image: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }
      }
    }
  ]
  const responsiveStyle = useStylesheet(staticStyle)

  return (
          <View style={responsiveStyle.image}>
              <Image
            style={styles.profileImage}
            source={require('../assets/profilepic.jpg')}
            />
            <Text style={[fontStyles.paragraph, { alignSelf: 'center', width: '80%' }]}>{children}</Text>
          </View>

  )
}
