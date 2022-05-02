import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'


const Home = (props) => {
    const description = "click to continue"
    return (
        <View style={styles.mainContainer}>
            <View style={styles.HomeTop}>
                <Image style={styles.HeaderImage}
                    source={require("../../assets/home.jpg")}
                    resizeMode="contain" />
                <Text style={styles.MainText}>Welcome To The {props.name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        textAlign: "center"
    },
    HomeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    HeaderImage: {
        height: undefined,
        width: "100%",
        display: "flex",
        alignItems: "stretch",
        marginTop: 20,
        aspectRatio: 1,
        borderRadius: 50
    },
    MainText: {
        textTransform: "uppercase",
        color: "blue",
        fontSize: 35,
        textAlign: "center"
    },
    description: {
        fontSize: 25,
        marginTop: 40
    }
})


export default Home