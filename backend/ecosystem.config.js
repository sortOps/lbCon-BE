// 설정파일 ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "app",
      script: './server.js',
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
