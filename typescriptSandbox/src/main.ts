let x: number | string = 10;
console.log(x)
x = 'watafak'
console.log(x)

let array: Array<String> = ['a', 'b', 'c']
console.log(array)

let lambda = (name: String): number => {
    return name.length
};
let tuple: [String, number, object] = ['Опа', 27, {name: 'да ну', surname: 'нахуй', lambda}]
console.log(tuple)

interface User {
    name: String,
    id: number
}

class AuthorizedUser implements User {
    id: number;
    name: String;
    login: String
}

let noname: User = {id: 100, name: 'Балаболкин'}
let authUser: AuthorizedUser = {id: 200, name: 'Тру', login: 'goshaKuzmenko'}
console.log(noname)
console.log(authUser)

let x3: User | AuthorizedUser = {id: 300, name: '?', login: 'Кажися норм'}
console.log(Object.keys(x3))

type GetUserFromDatabase = (userId: String) => Error | User
let getUser: GetUserFromDatabase = (userId) => {
    if (userId != 'Фаил Исмаиловитч') {
        return {id: 100, name: userId};
    } else {
        throw Error
    }
}
getUser('Фаил Исмаиловитч')

console.log(getUser('ВАССАП БИТЧ'))
