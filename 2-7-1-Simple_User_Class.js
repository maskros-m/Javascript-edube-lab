class User {
    constructor({name, surname, email, role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    };
    addCourse(course, level){
        this.courses.push({course, level});
    };
    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    };
    editCourse(course, level) {
        this.courses.forEach((c) => {
            if (c.course === course) {
                c.course = course;
                c.level = level;
            }
        });
    };
    
    sendEmail(from, to, message){
        return {from, to, message};
    };
    
    sendMessage(from, message) {
        this.messages.push(this.sendEmail(from.email, this.email, message));
    };
    
    showMessagesHistory() {
        this.messages.forEach((m) => {
            console.log(`-> ${m.from} -> ${m.to}: ${m.message}`);
        });
    };
};
let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.come', role: 'teacher'});

student1.addCourse('math', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`);
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`);
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();
