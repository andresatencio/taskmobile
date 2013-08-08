module.exports = {
  db: { native_parser: false },
  server: { poolSize: 5 },
  user: process.env.UserTask,
  pass: process.env.PassTask
}