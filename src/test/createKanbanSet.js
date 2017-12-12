import loremIpsum from 'lorem-ipsum';
import uuidv4 from 'uuid/v4';

const loremWord = (name, min, max) => {
  const lorem = name.concat(' ', loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: min,
    sentenceUpperBound: max,
  }));
  return lorem;
};

const getPriority = () => {
  const priorities = ['urgent', 'major', 'noraml', 'minor'];
  return priorities[Math.floor(Math.random() * priorities.length)];
};

const getWorking = (assignedDate, sections) => {
  const iteration = Math.floor(Math.random() * sections.length);
  const timeArr = [];
  const workingAt = new Date(assignedDate);
  for (let i = 0; i < iteration; i += 1) {
    timeArr.push({ [sections[i]]: new Date(workingAt.setHours(Math.floor(Math.random() * 5))) });
  }
  return timeArr;
};

const createKanbanSet = ({ sectionNum, taskNum, subTaskNum }) => {
  const listDummy = [
    'todo',
    'pending',
    'postPond',
    'develop',
    'pull-request',
    'deploy',
    'waiting-collabo',
    'test',
  ];


  const teamId = uuidv4();
  const projectId = uuidv4();
  const kanbanSet = {
    team: {
      teamId,
      tasks: [],
      subTasks: [],
    },
    tasks: [],
    subTasks: {},
  };

  (function checkParam() {
    if (!Number.isInteger(sectionNum) || sectionNum > (listDummy.length + 1)) {
      throw new Error('sectionNum is invalid.');
    }

    if (!Number.isInteger(taskNum)) {
      throw new Error('taskNum is invalid.');
    }

    if (!Number.isInteger(subTaskNum)) {
      throw new Error('subTaskNum is invalid.');
    }
  }());

  const crasteSections = new Promise((resolve) => {
    kanbanSet.team.sections = listDummy.splice(0, sectionNum);
    kanbanSet.team.sections.forEach((section) => {
      kanbanSet.subTasks[section] = [];
    });
    return resolve();
  });

  const createTasks = () => {
    for (let i = 0; i < taskNum; i += 1) {
      const taskId = uuidv4();
      const task = {
        taskId,
        assignedTeams: [teamId],
        // TODO: need to be added
        referenceId: null,
        projectId,
      };
      kanbanSet.team.tasks.push(taskId);
      kanbanSet.tasks.push(task);
    }
    return null;
  };

  const createSubTasks = () => {
    for (let i = 0; i < subTaskNum; i += 1) {
      const subTaskId = uuidv4();
      const newDate =
        new Date().setDate(-(Math.floor(Math.random() * 31)));
      const assignedDate =
        new Date(newDate).setDate(Math.floor(Math.random() * 7));
      const task =
        kanbanSet.team.tasks[Math.floor(Math.random() * taskNum)];
      const taskId = task.taskId; //eslint-disable-line
      const section = kanbanSet.team.sections[Math.floor(Math.random() * sectionNum)];
      const subTask = {
        subTaskId,
        teamId,
        taskId,
        section,
        // TODO: need to added
        assignees: null,
        title: loremWord('title', 2, 7),
        content: loremWord('contet', 6, 15),
        status: 'status',
        priority: getPriority(),
        createdAt: newDate,
        assigend: assignedDate,
        updatedAt: assignedDate,
        date: {
          startDate: assignedDate,
          endDate: new Date(assignedDate).setDate(Math.floor(Math.random() * 14)),
          working: getWorking(assignedDate, kanbanSet.team.sections),
        },
      };
      kanbanSet.team.subTasks.push(subTaskId);
      kanbanSet.subTasks[section].push(subTask);
    }
    return kanbanSet;
  };

  return crasteSections
    .then(createTasks)
    .then(createSubTasks);
};


export default createKanbanSet;
