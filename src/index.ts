class user {
    constructor(public name: string, public email: string, public pass: string) {
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
}

class manage {
    public Users: user[] = [];

    addUser(newUser: user) {
        this.Users.push(newUser);
    }
    showUser() {
        if (this.Users.length == 0) {
            console.log("No User!");
        } else {
            this.Users.forEach((User) => {
                console.log(`Name: ${User.name}, Email: ${User.email}, Pass: ${User.pass}`);
            });
        }
    }

    editUser(newUser: user) {
        const User = this.Users.find((u) => u.name == newUser.name);
        if (User) {
            User.name = "Tonmoy";
        }
    }
}

const manageUser = new manage();
const user1: user = {
    name: "Banik",
    email: "test@gmail.com",
    pass: "12345"
}
manageUser.addUser(user1);
manageUser.showUser();
manageUser.editUser(user1);