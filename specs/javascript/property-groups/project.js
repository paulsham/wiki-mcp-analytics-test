/**
 * @typedef {Object} PropertyGroup
 * @property {string} name
 * @property {string} description
 * @property {string[]} properties - Property names included in this group
 */

/**
 * project property group
 * Information about a project
 *
 * @type {PropertyGroup}
 */
export const project = {
  name: 'project',
  description: 'Information about a project',
  properties: [
    'project_id',
    'project_name',
    'project_template'
  ]
};

export default project;
