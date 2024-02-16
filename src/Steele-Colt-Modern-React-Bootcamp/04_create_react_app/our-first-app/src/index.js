import {helper, sort, sing} from './helper';
import foods from './foods';
import {choice, remove} from './helper';


let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`);
let remaining = remove(foods, fruit);
console.log("May I have another?")
console.log(`Sorry we're all out. We have ${remaining.length}`);



helper();
sort();
sing();