class Workable {
  work() {
    throw new Error('Method not implemented');
  }
}

class Manageable {
  manage() {
    throw new Error('Method not implemented');
  }
}
class Worker extends Workable {
  manage() {
    throw new Error('Method not implemented');
  }
}

class Developer extends Worker {
  work() {
    console.log('Developer is coding...');
  }
}

class Manager extends Worker {
  work() {
    console.log('Manager is managing tasks...');
  }

  manage() {
    console.log('Manager is managing other workers.');
  }
}
function performWork(worker) {
  worker.work();
}

function performManagement(manager) {
  manager.manage();
}
const developer = new Developer();
const manager = new Manager();

performWork(developer);
performWork(manager);

performManagement(manager);
