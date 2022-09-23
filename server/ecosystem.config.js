module.exports = {
  apps: [
    {
      name: 'HANGANGGAK',
      script: './dist/main.js',
      instances: 14,
      exec_mode: 'cluster',
      merge_logs: true,
      autorestart: true,
      watch: true,
      instance_var: 'INSTANCE_ID',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
