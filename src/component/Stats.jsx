function Stats({ tasks = [] }) {

    const totalTaks = tasks.length;

    const progressTasks = tasks.filter(
        (task) => task.status === "proress"
    ).length;

    const completedTasks = tasks.filter(
        (task) => task.status === "completed"
    ).length;

    return (

        <section className="stats">

            <div className="stat-card">

                <div className="stat-icon purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list preview-icon"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
                </div>

                <div>
                    <p>Total Taks</p>
                    <h2>{totalTaks}</h2>
                </div>

            </div>

            <div className="stat-card">

            <div className="stat-icon pink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock preview-icon"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>

            <div>
                <p>In Progress</p>
                <h2>{progressTasks}</h2>
            </div>
            </div>

            <div className="stat-card">

                <div className="stat-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                </div>

                <div>
                    <p>Completed</p>
                    <h2>{completedTasks}</h2>
                </div>
            </div>

        </section>
    )

}

export default Stats;