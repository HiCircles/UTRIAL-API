const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],

  superAdmin: ['getUsers', 'manageUsers', 'getAdmins', 'manageAdmins', 'getDevices', 'manageDevices']
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
