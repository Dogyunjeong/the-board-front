import uuidv4 from 'uuid/v4';
import loremIpsum from 'lorem-ipsum';

const getRandomMultiElem = (arr) => {
  const start = Math.floor(Math.random() * arr.length);
  const end = Math.floor(start + (Math.random() * (arr.length - start)));
  console.log('satrt: ', start, '/ end: ', end);
  return arr.slice(start, end);
};

const loremWord = (name = '', min, max) => {
  const lorem = name.concat(' ', loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: min,
    sentenceUpperBound: max,
  }));
  return lorem;
};

export default class DataSet {

  static createReference(referenceNum) {
    const arr = [];
    for (let i = 0; i < referenceNum; i += 1) {
      arr.push({ id: uuidv4(), name: loremWord('', 1, 5) });
    }
    return arr;
  }
  static createTeams(teamNum) {
    const dummyTeam = ['개발', '디자인', '기획', '테스트'];
    const teams = [];
    let i = 0;
    while (i < teamNum) {
      const teamName = ''.concat(
        dummyTeam[Math.floor(Math.random() * dummyTeam.length)],
        Math.floor(Math.random() * 10),
      );

      if (teams.filter(elem => elem.name === teamName).length === 0) {
        teams.push({ name: teamName, id: uuidv4() });
        i += 1;
      }
      console.log('while working');
    }
    return teams;
  }
  static createTasks(taskNum, { teamIds, referenceId }) {
    const taskArr = [];
    for (let i = 0; i < taskNum; i += 1) {
      const taskId = uuidv4();
      const assignedTeams = getRandomMultiElem(teamIds);
      const assigned = [];
      assignedTeams.forEach((elem) => {
        const max = Math.floor((Math.random() * 100) + 1);
        const current = Math.floor(Math.random() * max);
        assigned.push({ teamId: elem, subTaskProcess: { current, max } });
      });
      taskArr.push({
        id: taskId,
        title: loremWord('', 1, 5),
        referenceId,
        assignedTeams: assigned,
      });
    }
    return taskArr;
  }
}

