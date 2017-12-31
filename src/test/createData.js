import DataSet from './DataSet';

export default class extends DataSet {
  // eslint-disable-next-line
  static createTeamBoardData({ teamNum, referenceNum, taskNum }) {
    const dataSet = {};
    dataSet.references = DataSet.createReference(referenceNum);
    dataSet.teams = DataSet.createTeams(teamNum);
    const teamIds = dataSet.teams.map(elem => elem.id);
    dataSet.tasksByReferenceId = {};
    dataSet.tasks = [];
    dataSet.references.forEach((reference) => {
      dataSet.tasksByReferenceId[reference.id] =
      DataSet.createTasksForTeamBoard(taskNum, { teamIds, referenceId: reference.id });
      dataSet.tasks = dataSet.tasks.concat(dataSet.tasksByReferenceId[reference.id]);
    });
    dataSet.teamTasks = {};
    dataSet.tasks.forEach((task) => {
      Object.keys(task.assignedTeams).forEach((teamId) => {
        if (!dataSet.teamTasks[teamId]) {
          dataSet.teamTasks[teamId] = {
            sections: [],
          };
        }
        if (!dataSet.teamTasks[teamId][task.assignedTeams[teamId].section]) {
          dataSet.teamTasks[teamId][task.assignedTeams[teamId].section] = [];
          dataSet.teamTasks[teamId].sections.push(task.assignedTeams[teamId].section);
        }
        dataSet.teamTasks[teamId][task.assignedTeams[teamId].section].push(task);
      });
    });
    return dataSet;
  }
}
