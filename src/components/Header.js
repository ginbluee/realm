import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const Header = ({ onShowAdd, onChangeText, nameInput, phoneInput, typeAdd, onAdd, onCancel }) => {
    return (
        <View>
            {!typeAdd ? <TouchableOpacity
                style={styles.container}
                activeOpacity={0.7}
                onPress={onShowAdd}
            >
                <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
            </TouchableOpacity> : null}
            {typeAdd ? <View style={styles.viewInput}>
                <View style={styles.viewTextInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your name ...'
                        placeholderTextColor='white'
                        value={nameInput}
                        onChangeText={(nameInput) => onChangeText(0, nameInput)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonInput}
                    onPress={onAdd}
                >
                    <Text style={{ color: 'white' }}>{typeAdd === 'add' ? 'Add' : 'Edit'}</Text>
                </TouchableOpacity>
            </View> : null}
            {typeAdd ? <View style={styles.viewInput}>
                <View style={styles.viewTextInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your phone ...'
                        placeholderTextColor='white'
                        keyboardType='phone-pad'
                        value={phoneInput}
                        onChangeText={(phoneInput) => onChangeText(1, phoneInput)}
                    />
                </View>
                <TouchableOpacity
                    style={[styles.buttonInput, { backgroundColor: 'tomato' }]}
                    onPress={onCancel}
                >
                    <Text style={{ color: 'white' }}>Cancel</Text>
                </TouchableOpacity>
            </View> : null}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 15,
        marginBottom: 15,
        borderColor: 'white',
        borderWidth: 2
    },
    viewInput: {
        flexDirection: 'row',
        marginBottom: 15,
        marginHorizontal: 15
    },
    viewTextInput: {
        borderColor: 'white',
        borderWidth: 1,
        flex: 8,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    buttonInput: {
        flex: 2.5,
        marginLeft: 15,
        alignItems: 'center',
        paddingVertical: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#0077B5'
    },
    textInput: {
        color: 'white',
        fontSize: 16
    },
})