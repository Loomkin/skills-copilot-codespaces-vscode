function skillsMember() {
    var member = {
        name: 'Trevor',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            console.log('Hello, my name is ' + this.name);
        }
    };

    return member;
}