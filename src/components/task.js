import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => console.log('you clicked a button')}>
            <Text style={styles.text}>{props.item}</Text>

            <View style={styles.btnscontainer}>
                <TouchableOpacity
                    style={styles.btndelete}
                    onPress={props.onDeleteItem}>
                    <Text style={styles.btntext}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnupdate}
                    onPress={props.onUpdateItem}>
                    <Text style={styles.btntext}>Update</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Task

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#0A66C2',
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    text: {
        width: '70%',
        fontSize: 16,
    },
    btnscontainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    btnupdate: {
        marginLeft: '4%',
        backgroundColor: 'blue',
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    btndelete: {
        marginLeft: '4%',
        backgroundColor: 'red',
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    btntext: {
        fontSize: 10,
        color: 'white',
    },
})
