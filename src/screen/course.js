import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react';
import Courses from '../api/Course'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'


const Course = () => {
    const navigation = useNavigation();
    const courseCard = ({ item }) => {
        return <View style={styles.mainContainer}>
            <View style={styles.CourseContainer}>
                <View>
                    <Image style={styles.Image_course} source={item.image} resizeMode="contain" />
                </View>
                <Text style={styles.MainTitle}>{item.title}</Text>
                <Text style={styles.MainDescription}>{item.description}</Text>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() =>
                            navigation.navigate("CourseDetails", {
                                courseId: item.id,
                            })
                        }>
                        <Text>Course Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    return <FlatList
        data={Courses}
        renderItem={courseCard}
        keyExtractor={(item) => item.id}
    />


}

export default Course

const styles = StyleSheet.create({
    Image_course: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    CourseContainer: {
        padding: 30,
        backgroundColor: "#ffffff",
        textAlign: "center",
        borderRadius: 7,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        margin: 15,
        elevation: 5
    },
    MainTitle: {
        fontSize: 22,
        color: "#002233",
        textAlign: "center"
    },
    MainDescription: {
        fontSize: 16,
        color: "#002233",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    ButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        color: "#002233",
        backgroundColor: "#e6f7ff",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})