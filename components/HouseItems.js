import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

class HomeItem extends React.Component {
    render() {
        return (
            <FadeInView style={styles.row}>
                <Image
                    source={{uri: this.props.images}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightBox}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.address}>{this.props.address}</Text>    
                </View>
            </FadeInView>
        );
    }
}

export default HomeItem;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightBox: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    address: {
        textAlign: 'center',
    },
});