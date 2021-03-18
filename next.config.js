const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'huzefa',
        mongodb_password: 'afezuh',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'MySiteDev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'huzefa',
      mongodb_password: 'afezuh',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'MySite',
    },
  };
};
