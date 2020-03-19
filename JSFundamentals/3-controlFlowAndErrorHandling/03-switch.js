/* let friend = "Tom";

switch(friend){
    case 'Tom':
        console.log('Hey Tom, you want go rock climbing?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, you want to play Catan?');
        break;
    case 'Carolyn':
        console.log('Hey Carolyn, when are we playing DnD?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}
*/

// Challenge:

let dessert = 'burger';

switch(dessert){
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`Sorry, ${dessert} is not on the menu.`);
}


// Multiple conditions

console.log('');

let yep = -8;

switch (true){
    case (yep < 0 && yep > -10):
        console.log('Worked');
        break;
    case (yep > 0 ):
        console.log('Worked!');
        break;
    default:
        console.log('dign\t work');
}
