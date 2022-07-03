var countStudents = function(students, sandwiches) {
    while(true){
        let cur = students[0];
        if(cur !== sandwiches[0]){
            students.shift();
            students.push(cur);
        }else {
            students.shift();
            sandwiches.shift();
        }
        if(!students.includes(sandwiches[0])){
            break;
        }
    }
    return students.length;
};
