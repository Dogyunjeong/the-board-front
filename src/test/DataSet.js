import uuidv4 from 'uuid/v4';
import loremIpsum from 'lorem-ipsum';

const getRandomMultiElem = (arr) => {
  const start = Math.floor(Math.random() * arr.length);
  const end = Math.floor(start + (Math.random() * (arr.length - start)));
  return arr.slice(start, end + 1);
};

// const getRandomElem = arr => arr[Math.floor(Math.random() * arr.length)];

const loremWord = (name = '', min, max) => {
  const lorem = name.concat(' ', loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: min,
    sentenceUpperBound: max,
  }));
  return lorem;
};

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


export default class DataSet {
  static createId() {
    return uuidv4();
  }
  static createReference(referenceNum) {
    const arr = [];
    for (let i = 0; i < referenceNum; i += 1) {
      arr.push({ id: uuidv4(), name: loremWord('', 1, 5) });
    }
    return arr;
  }

  static createTeams(teamNum, sectionNum = Math.floor((Math.random() * 6) + 1)) {
    const dummyTeam = ['개발', '디자인', '기획', '테스트'];
    const teams = [];
    let i = 0;
    while (i < teamNum) {
      const teamName = ''.concat(
        dummyTeam[Math.floor(Math.random() * dummyTeam.length)],
        Math.floor(Math.random() * 10),
      );

      if (teams.filter(elem => elem.name === teamName).length === 0) {
        const sections = listDummy.splice(0, sectionNum);
        teams.push({ name: teamName, sections, id: uuidv4() });
        i += 1;
      }
    }
    return teams;
  }

  static createTasks(taskNum) {
    const taskArr = [];
    const startDate = new Date(Date.now() - Math.floor((Math.random() * 14) * 1000 * 60 * 60 * 24));
    for (let i = 0; i < taskNum; i += 1) {
      const taskId = uuidv4();
      taskArr.push({
        id: taskId,
        title: loremWord('', 1, 5),
        start: startDate,
        end: new Date(startDate.getTime() + Math.floor((Math.random() * 14) * 1000 * 60 * 60 * 24)),
        detail: loremWord('', 5, 20),
      });
    }
    return taskArr;
  }

  static createTasksForTeamBoard(taskNum, { teamIds, referenceId }) {
    const taskArr = DataSet.createTasks(taskNum);
    taskArr.forEach((elem) => {
      const task = elem;
      const assignedTeams = getRandomMultiElem(teamIds);
      const assigned = {};
      assignedTeams.forEach((teamId) => {
        const total = Math.floor((Math.random() * 100) + 1);
        const current = Math.floor(Math.random() * total);
        assigned[teamId] = {
          subTaskProcess: { current, total },
          section: ['todo', 'doing', 'done'][Math.floor(Math.random() * 3)],
        };
      });
      task.referenceId = referenceId;
      task.assignedTeams = assigned;
    });
    return taskArr;
  }
}

