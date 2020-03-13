import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends React.Component {
    render()
    {
        return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.topBox} onPress={ () => 
                    this.props.navigation.push('HomeListScreen') }>
                    <Image 
                        style={styles.homeBanner}
                        source={require('../assets/House.png')}
                    />
                </TouchableHighlight>
                <View style={styles.bottomBox} />
            </View>
        );
    }
}
/*

                <TouchableHighlight style={styles.topBox}
                                    onPress={() =>
                                        this.props.navigation('HomeListScreen')
                                    }>
                    <Image 
                        style={styles.homeBanner}
                        source={require('../assets/House.png')}
                    />
                </TouchableHighlight>

<View style={styles.topBox}>
                    <Image 
                        style={styles.homeBanner}
                        source={require('../assets/House.png')}
                    />
                </View>
                <View style={styles.bottomBox} />

<Text>Home Screen</Text>
                <Button
                    title = "Learn More About Us!"
                    onPress={() =>
                        this.props.navigation.push('About')
                    }
                />
*/
const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topBox: {
        flex: 1,
        backgroundColor: '#cce5ee',
    },
    bottomBox: {
        flex: 2,
        backgroundColor: '#FFFFCC'
    },
    homeBanner : {
        bottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },
});