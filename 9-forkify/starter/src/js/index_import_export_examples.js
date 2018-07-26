import string from './models/Search'
// 1 importing method 1
// import {add as a, multiply as m, ID} from './views/searchView'
// 2 importing method 2
import * as searchView from './views/searchView'
// Displaying method 1
// console.log(`Using imported function! ${a(ID,2)} and ${m(3,5)}. ${string}`)
console.log(`Using imported function! ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3,5)}. ${string}`)