import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Field from './Fields';

export default props => {

    const rows = props.board.map(( row , r) => {

        const colummns = row.map((field , c) => {
            return <Field {...field} key={c} 
                         onOpen={() => props.onOpenField(r, c)} 
            />
        })
        return <View  style={{flexDirection: 'row'}} key={r}>{colummns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})