import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <View style={styles.IconsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <Image
                    style={styles.Icons}
                    source={{ uri: "https://img.icons8.com/bubbles/344/view-file.png" }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('UserData')}>
                <Image
                    style={styles.Icons}
                    source={{ uri: "https://img.icons8.com/external-itim2101-flat-itim2101/344/external-contact-us-contact-and-message-itim2101-flat-itim2101-2.png" }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Image
                    style={styles.Icons}
                    source={{ uri: "https://img.icons8.com/bubbles/344/about.png" }} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    Icons: {
        width: "100%",
        height: 50,
        aspectRatio: 1
    },
    IconsContainer: {
        display: 'flex',
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-around"

    }
});