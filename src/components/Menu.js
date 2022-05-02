import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <Text>Course</Text>
            </TouchableOpacity>
        </View>
    )
}