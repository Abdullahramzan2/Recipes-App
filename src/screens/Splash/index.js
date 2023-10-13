import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./style";
import Button from "../../components/Button";

const Splash = ({ navigation }) => {

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                <Text style={styles.title}>100K+ Premium Recipe</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.bigTitle}>Get</Text>
                <Text style={styles.bigTitle}>Cooking</Text>
                <Text style={styles.subtitle}>Simple Way to Find Tasty Recipe</Text>

                <Button onPress={() => navigation.navigate('Home')}>Start Cooking</Button>
            </View>
        </ImageBackground>
    )
}

export default React.memo(Splash);