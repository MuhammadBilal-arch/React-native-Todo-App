import {
    Button,
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import Task from '../../components/task'

const Mian = () => {
    const [TaskList, setTaskList] = useState([])
    const [Value, setValue] = useState('')
    const [updatedValue, setupdatedValue] = useState('')
    const [valueID, setvalueID] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const onSubmitTask = () => {
        if(Value === "")return alert('Empty field not allowed.')
        setTaskList([...TaskList, Value])
        setValue('')
    }

    const onDeleteItem = (item) => {
        setTaskList(TaskList.filter((i) => ii !== tem))
    }

    const onUpdateItem = (item, index) => {
        setupdatedValue(item)
        setvalueID(index)
        setModalVisible(!modalVisible)
    }

    const onSubmitUpdateItem = () => {
        if(updatedValue === "")return alert('Empty field not allowed.')
        const clone = [...TaskList]
        clone[parseInt(valueID)] = updatedValue
        setTaskList(clone)
        setupdatedValue('')        
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Todo Tasks</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setValue(text)}
                    value={Value}
                    placeholder="Enter task"
                />
                <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
                    <Text style={styles.btntext}>Add</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.ListView}
                data={TaskList}
                renderItem={({ item, index }) => (
                    <Task
                        item={item}
                        onDeleteItem={() => onDeleteItem(item)}
                        onUpdateItem={() => onUpdateItem(item, index)}
                    />
                )}
                keyExtractor={(item) => item}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text
                            style={{
                                ...styles.heading,
                                marginBottom: 10,
                                marginTop: 0,
                            }}>
                            Update Tasks
                        </Text>
                        <TextInput
                            style={{ ...styles.input, width: '100%' }}
                            onChangeText={(text) => setupdatedValue(text)}
                            value={updatedValue}
                            placeholder="Enter task"
                        />
                        <View style={styles.ModalButtons}>
                            <TouchableOpacity
                                style={styles.btnupdate}
                                onPress={onSubmitUpdateItem}>
                                <Text style={styles.btntext}>Update</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btndelete}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btntext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Mian

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    heading: {
        marginTop: '8%',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        width: '75%',
        height: 40,
        paddingTop: 3,
        paddingRight: 15,
        paddingLeft: 15,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button: {
        marginLeft: '4%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        color: 'white',
    },
    ListView: {
        marginTop: '7%',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
    },
    modalView: {
        // margin: 20,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalheading: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    ModalButtons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    btnupdate: {
        backgroundColor: 'blue',
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        // paddingHorizontal: 10,
        width: 65,
    },
    btndelete: {
        backgroundColor: 'red',
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        width: 65,
    },
    modalbutton: {
        borderRadius: 1,
        padding: 5,
        elevation: 2,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
