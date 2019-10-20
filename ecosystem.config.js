module.exports = {
  apps: [
    {
      name: "7uptv-staging",
      script: "npm",
      args: "run dev",
      // watch: true,
      // watch: ["server", "client"],
      // Delay between restart
      // watch_delay: 1000,
      ignore_watch: ["node_modules", "Tests"],
      watch_options: {
        followSymlinks: false
        // "usePolling": true
      }
    },
    {
      name: "7uptv-production",
      script: "npm",
      args: "run start"
    }
  ]
};
