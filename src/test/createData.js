import DataSet from './DataSet';

export default {
  // eslint-disable-next-line
  createTeamBoardData({ teamNum, referenceNum, taskNum }) {
    const dataSet = {};
    dataSet.references = DataSet.createReference(referenceNum);
    dataSet.teams = DataSet.createTeams(teamNum);
    const teamIds = dataSet.teams.map(elem => elem.id);
    dataSet.tasksByReferenceId = {};
    dataSet.references.forEach((reference) => {
      dataSet.tasksByReferenceId[reference.id] =
      DataSet.createTasks(taskNum, { teamIds, referenceId: reference.id });
    });
    return dataSet;
  },
};
