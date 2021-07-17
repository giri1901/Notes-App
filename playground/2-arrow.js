/*const square = function(number){
    return number * number
}*/

const square = (number) => number * number;

const myEvent = {
    name: 'Birthday party',
    guestList:  ['Girish', 'Ganesh', 'Alex'],
    printGuestsList () {
        console.log('Hey this is a ' + this.name)
        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}
/*const babyShowerevent = new myEvent();
babyShowerevent.title = 'Birthday party'
babyShowerevent.guestList =  ['Girish', 'Ganesh', 'Alex'];*/


console.log('square is: ' + square(25))
myEvent.printGuestsList();