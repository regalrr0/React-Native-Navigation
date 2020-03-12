import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default AboutScreen = () => {
    return (
        <View style={styles.about}>
            <Text>About Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    about: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});