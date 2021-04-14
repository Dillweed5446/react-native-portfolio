import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
    children?: React.ReactNode,
    style?: object

}

export default function HamburgerDropdownMenu ({ children, style }: Props) {
  return (
    <View>
        <Icon name='menu' type='material'>{children}</Icon>
    </View>
  )
}
