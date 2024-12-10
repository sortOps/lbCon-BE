# 설정파일 ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
