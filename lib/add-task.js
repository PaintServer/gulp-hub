var gulp = require('gulp');

/**
 * Register the subtasks of the given tasks, and configure the master task to
 * run them.
 *
 * @param  {object} task - A task object from the task registry
 */
module.exports = function(task) {
    var subtaskNames = [];

    // create the unique subtasks
    task.subtasks.forEach(function (subtask) {
        gulp.task(subtask.name, subtask.param1, subtask.param2);
        subtaskNames.push(subtask.name);
    });
    gulp.task(task.name, subtaskNames);
};
