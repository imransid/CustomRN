import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import React from 'react'

const FormModal = () => {
  return (
    // <SafeAreaView>
    //     <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Text>FormModal</Text>
            </View>
    //     </KeyboardAwareScrollView>
    // </SafeAreaView>>
  )
}

export default FormModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})