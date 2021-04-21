import React from 'react'
import { StyleSheet, Pressable, View, Modal } from 'react-native'

interface menuProps {
    style?: React.ReactNode,
    menuOptionsArray: Array<{ name: string, href: string}>,
    children: React.ReactNode,
    menuToggled: boolean
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    boxShadow: '8px 8px 60px rgba(0, 0, 300, .9)'
  }
})

export default function DropdownMenu ({ style, menuOptionsArray, menuToggled }: menuProps) {
  return (
<View style={styles.menu}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={menuToggled}
        // onRequestClose={() => {
        //   toggleMenu
        // }}
        >
            {Object.values(menuOptionsArray).map((item, index) => (
                <Pressable key={index} onPress={() => !menuToggled}>
                        <a href={item.href}>{item.name}</a>
                </Pressable>
            ))}
    </Modal>
</View>
  )
}
