import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import Realm from 'realm'
import Item from './Item'
import Header from './Header'

import StudentModel from '../databases/Model'
import { Service, realm } from '../databases/Service'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeAdd: null,
            nameInput: '',
            phoneInput: '',
            data: [],
            itemUpdate: {}
        }
        this._onShowAdd = this._onShowAdd.bind(this)
        this._onChangeText = this._onChangeText.bind(this)
        this._onCancel = this._onCancel.bind(this)
        this._getData = this._getData.bind(this)
        this._onAdd = this._onAdd.bind(this)
        this._onEdit = this._onEdit.bind(this)
        this._onDelete = this._onDelete.bind(this)

        realm.addListener('change', () => {
            this._getData()
        })
    }

    componentDidMount() {
        this._getData()
    }

    _getData() {
        const data = JSON.stringify(Service.findAll())
        this.setState({ data: Object.values(JSON.parse(data)) })
    }

    _onShowAdd() {
        this.setState({ typeAdd: 'add', nameInput: '', phoneInput: '' })
    }

    _onChangeText(index, content) {
        if(index === 0){
            this.setState({nameInput: content})
        } else {
            this.setState({phoneInput: content})
        }
    }

    _onAdd() {
        const { typeAdd, nameInput, phoneInput, itemUpdate } = this.state
        if (!nameInput) {
            alert('Bạn cần phải nhập tên !')
        } else {
            if(typeAdd === 'add'){
                Service.insert(new StudentModel(nameInput, phoneInput))
            } else {
                const itemTemp = {
                    id: itemUpdate.id,
                    name: nameInput,
                    phone: phoneInput
                }
                Service.update(itemTemp)
            }
            this.setState({typeAdd: null})
        }
    }

    _onCancel() {
        this.setState({ typeAdd: null })
    }

    _onEdit(item) {
        this.setState({
            nameInput: item.name,
            phoneInput: item.phone,
            itemUpdate: item,
            typeAdd: 'edit'
        })
    }

    _onDelete(item) {
        Service.delete(item.id)
    }

    render() {
        const { data, typeAdd, nameInput, phoneInput } = this.state
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <Header
                    onShowAdd={this._onShowAdd}
                    nameInput={nameInput}
                    phoneInput={phoneInput}
                    typeAdd={typeAdd}
                    onChangeText={this._onChangeText}
                    onAdd={this._onAdd}
                    onCancel={this._onCancel}
                />
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <FlatList
                        // style={{marginTop: 15}}
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <Item
                                    item={item}
                                    index={index}
                                    onEdit={this._onEdit}
                                    onDelete={this._onDelete}
                                />
                            )
                        }}
                        keyExtractor={(item, id) => id.toString()}
                    />
                </View>
            </View>
        );
    }
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ED760',
    },
    text: {
        color: 'white'
    }
})