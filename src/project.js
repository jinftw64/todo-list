const project = (() => {
  const hasLocalStorage = storageAvailable('localStorage');

  let projectList;

  if (hasLocalStorage) {
    projectList = localStorage.getItem('projectList') || '[]';
    projectList = JSON.parse(projectList);
  } else {
    projectList = [];
  }

  class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function add(title) {
    const project = new Project(title);
    projectList.push(project);
  }

  function edit(title, index) {
    projectList[index].title = title;
  }

  function remove(index) {
    if (index > -1) {
      projectList.splice(index, 1);
    }
  }

  function updateLocalStorage() {
    if (hasLocalStorage) {
      localStorage.setItem('projectList', JSON.stringify(project.projectList));
    }
  }

  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  return {
    projectList,
    add,
    edit,
    remove,
    updateLocalStorage,
  };
})();

export default project;
