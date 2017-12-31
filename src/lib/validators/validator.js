export const teamValidator = class {
  static textValidator(target) {
    if (typeof target !== 'string' || target === '') return false;
    return true;
  }
  static dateValidator(target) {
    const date = new Date(target);
    if (!date || !date.getTime()) return false;
    return true;
  }
  static checkAndReturnDate(target) {
    if (!this.dateValidator(target)) return null;
    return new Date(target);
  }
  static assignTeamValidator(target) {
    const teamIds = Object.keys(target);
    let assignedFlag = 0;
    teamIds.forEach((teamId) => {
      if (target[teamId]) assignedFlag += 1;
    });
    if (assignedFlag) return true;
    return false;
  }
};

export const projectValidator = class {

};
