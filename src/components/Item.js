import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Item = ({ item, index, onEdit, onDelete }) => {
    const styles = Styles(index)
    return (
        <View style={styles.container}>
            <View style={{ flex: 5 }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 4 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onEdit(item)}
                >
                    <Text style={{ color: 'white' }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'tomato' }]}
                    onPress={() => onDelete(item)}
                >
                    <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Item

const Styles = (index) => {
    return {
        container: {
            flexDirection: 'row',
            backgroundColor: index % 2 == 0 ? '#1ED76040' : '#1ED76070',
            paddingVertical: 25,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        button: {
            flex: 2.5,
            marginLeft: 15,
            alignItems: 'center',
            paddingVertical: 10,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#0077B5'
        },
        text: {
            color: 'black',
            fontSize: 18
        }
    }
}