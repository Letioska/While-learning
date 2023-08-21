const restaurantBill = (bill) => {
    var tax = bill*0.1;
    var total = bill+tax;
    
    return '$'+(total/5)
};

const output = restaurantBill(50);
console.log(output);
module.exports = restaurantBill;