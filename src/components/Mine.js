import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import params from '../params';

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coreMeni} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMeni: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    }


})