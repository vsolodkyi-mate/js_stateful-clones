'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateCopy = { ...state };
  const transformState = [];

  for (const action of actions) {
    if (action.type === 'clear') {
      stateCopy = {};
    } else if (action.type === 'addProperties') {
      stateCopy = { ...stateCopy, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      stateCopy = { ...stateCopy };

      for (const key of action.keysToRemove) {
        delete stateCopy[key];
      }
    }
    transformState.push(stateCopy);
  }

  return transformState;
}

module.exports = transformStateWithClones;
