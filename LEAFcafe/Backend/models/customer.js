const db = require('../util/db');

class customer {
    constructor(id, idCard, dateRececord, name, address, tel){
        this.id = id;
        this.idCard = idCard;
        this.dateRececord = dateRececord;
        this.name = name;
        this.address = address;
        this.tel = tel;
    }

    static fetchAll(){
        console.log("models")
        return db.execute("select * from customer")
    }
}

module.exports = customer;