function guid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
}

class StudentModel {
    constructor(name, phone) {
      this.id = guid();
      this.name = name;
      this.phone = phone || ''
    }
}
  
export default StudentModel