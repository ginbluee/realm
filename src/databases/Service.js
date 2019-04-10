import Realm from 'realm'

const Student = {
    name: 'Student',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        name: 'string',
        phone: 'string'
    }
}

const databaseOptions = {
    schema: [Student]
}
const realm = new Realm(databaseOptions);

const Service = {
    findAll() {
        return realm.objects('Student');
    },

    insert(data) {
        realm.write(() => {
            realm.create('Student', data);
        })
    },

    update(data) {
        realm.write(() => {
            let updateData = realm.objectForPrimaryKey('Student', data.id)
            updateData.name = data.name
            if(data.phone){
                updateData.phone = data.phone
            }
        });
    },

    delete(dataId) {
        realm.write(() => {
            let deleteData = realm.objectForPrimaryKey('Student', dataId)
            realm.delete(deleteData)
        })
    }
};

module.exports = {
    realm,
    Service
};