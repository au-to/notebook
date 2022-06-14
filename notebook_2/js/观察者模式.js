class Observer {
    constructor(name) {
        this.name = name;
    }
    update({ taskType, taskInfo }) {
        if (taskType === "route") {
            console.log(`${this.name}不需要日常任务`);
            return;
        }
        this.goToTaskHome(taskInfo);
    }
    goToTaskHome(info) {
        console.log(`${this.name}去任务大殿抢${info}任务`);
    }
}

class Subject {
    constructor() {
        this.ObserverList = [];
    }
    addObserever(observer) {
        this.ObserverList.push(observer);
    }
    notify(task) {
        console.log('发布任务');
        this.ObserverList.forEach((observer) => {
            observer.update(task);
        })
    }
}

const subject = new Subject();
const stu1 = new Observer("弟子1");
const stu2 = new Observer("弟子2");
// stu1 stu2 购买任务通知权限
subject.addObserver(stu1);
subject.addObserver(stu2);
// 任务殿发布五星战斗任务
const warTask = {
    taskType: 'war',
    taskInfo: "猎杀时刻"
}
// 任务大殿通知购买权限弟子
subject.notify(warTask);
// 任务殿发布五星日常任务
const routeTask = {
    taskType: 'route',
    taskInfo: "种树浇水"
}

subject.notify(routeTask)