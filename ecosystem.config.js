module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'looking-glass',
      script    : 'lg.js',
      watch     : false
    }
  ]
};
