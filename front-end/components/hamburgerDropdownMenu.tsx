import React, { useState } from 'react'
import { StyleSheet, Pressable, View, Modal } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
    children?: React.ReactNode,
    style?: object

}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    boxShadow: '8px 8px 60px rgba(0, 0, 300, .9)'
  }
})

export default function HamburgerDropdownMenu ({ children, style }: Props) {
  const [menuOpen, toggleMenu] = useState(false)
  const menuOptions = [
    { name: 'Home', href: '/#top' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Open Source', href: '/#opensource' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Resume', href: 'buggah_no_exist' }
  ]

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuOpen}
        onRequestClose={() => {
          toggleMenu(!menuOpen)
        }}
        >
        <Pressable onPress={() => toggleMenu(true)}>
          <View style={styles.menu}>
            {menuOpen
              ? Object.values(menuOptions).map((item, index) => (
                  <Pressable key={index} onPress={() => toggleMenu(!menuOpen)}>
                    <a href={item.href}>{item.name}</a>
                  </Pressable>
              ))
              : <Icon name='menu' type='material' />
            }
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}
