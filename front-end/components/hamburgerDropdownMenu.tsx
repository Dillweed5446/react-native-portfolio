import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Icon } from 'react-native-elements'
import DropdownMenu from './dropdownMenu'

interface Props {
    children?: React.ReactNode,
    style?: object

}

export default function HamburgerDropdownMenu ({ children, style }: Props) {
  const [menuOpen, toggleMenu] = useState(false)
  const menuOptions = [
    { name: 'Home', href: '/#top' },
    { name: 'About me', href: '/#About' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: 'mailto:paul@pdill.dev' },
    { name: 'Resume', href: 'buggah_no_exist' }
  ]

  return (
    <View>
      <DropdownMenu menuOptionsArray={menuOptions} menuToggled={menuOpen}>
        <Pressable onPress={() => toggleMenu(true)}>
        <Icon name='menu' type='material'>{children}</Icon>
        </Pressable>
      </DropdownMenu>
    </View>
  )
}
