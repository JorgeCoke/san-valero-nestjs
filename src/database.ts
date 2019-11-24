import { User } from './users/classes/user';

let users: User[] = [
    {id: 1, email: '1@test.com', password: '123'},
];

function getAll() {
    return users;
}
function getById(id: number) {
    return users.find(e => e.id === id);
}
function getByEmail(email: string) {
    return users.find(e => e.email === email);
}
function insert(user: User) {
    user.id = Math.random();
    users.push(user);
    return user;
}
function update(user: User) {
    users = users.map(e => e.id === user.id ? user : e);
    return user;
}
function deleteByid(id: number) {
    users = users.filter(e => e.id !== id);
}

export const database = 
    {getAll, getById, insert, update, deleteByid, getByEmail};