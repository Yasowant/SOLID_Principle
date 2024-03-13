class AuthManager {
  constructor() {
    this.users = [];
  }
  registerUser(username, password) {
    const newUser = { username, password };
    this.users.push(newUser);
    console.log(`${username} has been registered successfully.`);
  }
  authenticateUser(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      console.log(`${username} has been authenticated successfully.`);
    } else {
      console.log(`Authentication failed for ${username}.`);
    }
  }
}
const authManager = new AuthManager();
authManager.registerUser('john', 'password123');
authManager.authenticateUser('john', 'password123');
authManager.authenticateUser('alice', 'password456');
