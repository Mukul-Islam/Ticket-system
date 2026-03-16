const Task_Status = ({ resolvedTasks, completedTasks, completeTask,toast }) => {
    return (
        <div>

            <h1 className="text-lg font-bold">Task Status</h1>

            {
                resolvedTasks.length === 0 ?
                <p className="text-gray-400 text-sm mt-2">
                    Select a ticket to add to Task Status
                </p>
                :
                resolvedTasks.map(task => (
                    <div key={task.id} className="card bg-base-100 shadow p-3 mt-2">
                        <h3 className="font-bold">{task.title}</h3>

                        <button
                        onClick={() => {
                            completeTask(task)
                            toast("Task completed successfully!");
                        }
                        }
                        className='btn btn-success'>
                        Completed
                        </button>
                    </div>
                ))
            }

            <h2 className="font-bold mt-4">Resolved Task</h2>

            {
                completedTasks.length === 0 ?
                <p className="text-gray-400 text-sm">
                    No resolved tasks yet.
                </p>
                :
                completedTasks.map(task => (
                    <p key={task.id} className="text-sm mt-1">
                        ✔ {task.title}
                    </p>
                ))
            }

        </div>
    );
};

export default Task_Status;