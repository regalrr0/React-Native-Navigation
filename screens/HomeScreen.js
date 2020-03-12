import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends React.Component {
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.home}>
                <Text>Home Screen</Text>
                <Button
                    title = "Learn More About Us!"
                    onPress={() =>
                        this.props.navigation.push('About')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});