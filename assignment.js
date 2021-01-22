function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;   //because 1km=1000m;

    if (kilometer < 0) {
        return ("Please input postive value");   //kilometer cannot be negative.
    }
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);






function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watch = 50;
    var phone = 100;
    var laptop = 500;
    cost = [];

    var watchPrice = watch * watchQuantity;
    var phonePrice = phone * phoneQuantity;
    var laptopPrice = laptop * laptopQuantity;


    if (phoneQuantity < 0) {
        phonePrice = 0;
        return ("Please input postive value");    // quantity cannot be negative.
    }
    if (watchQuantity < 0) {
        watchPrice = 0;
        return ("Please input postive value");
    }
    if (laptopQuantity < 0) {
        laptopPrice = 0;
        return ("Please input postive value");
    }
    var cost = watchPrice + phonePrice + laptopPrice;
    return cost;
}
var total = budgetCalculator(5, 1, 1);
console.log(total);







function hotelCost(days) {
    var totalPrice = [];

    if (days < 0) {
        return ("Please input postive value");
    }
    if (days <= 10) {
        var cost = 100 * days;
        totalPrice = cost;
        return totalPrice;
    }
    if (days > 10 && days <= 20) {
        var costFirst = ((80 * (days - 10)) + (100 * 10));   //minus first 10 days and  multiply with each other.
        totalPrice = totalPrice + costFirst;
        return totalPrice;
    }
    if (days > 20) {
        var costSecond = ((50 * (days - 20)) + (80 * 10) + (100 * 10));  //minus first 20 days and  multiply with each other.
        totalPrice = totalPrice + costSecond;
        return totalPrice;
    }

}
var finalCost = hotelCost(40);
console.log(finalCost);








function megaFriend(array) {
    var lengthOfFirst = 0;
    var longest;

    if (array == "") {
        return ("Please fill up the array section");
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > lengthOfFirst) {
            var lengthOfFirst = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}
var array = [];
var finalResult = megaFriend(array);
console.log(finalResult);
