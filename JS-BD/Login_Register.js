
const usersDatabase = [
    { username: 'noe', password: '12345' },
    { username: 'admin', password: 'admin' },
    { username: 'user', password: '1' },
 
];

function authenticateUser(username, password) {
    const user = usersDatabase.find(user => user.username === username && user.password === password);
    return user !== undefined;
}




