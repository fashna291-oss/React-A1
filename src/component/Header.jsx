


function Header({search, setSearch}){

    return (
        <header className="header" id="dashboard">

            <div className="header-title">
                <h2>Student Task Manager</h2>
                <p>Manage your tasks and track your progress</p>
            </div>

        <div className="header-right"> 
        <input type="text" placeholder=" Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} />

            <button className="notification">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-deciduous preview-icon"><path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"/><path d="M12 19v3"/></svg>
            </button>
        <div className="user-profile">
        
        <div className="user-image">
        👩‍🎓
        </div>

        <div>
            <h4>Ashna Fatima</h4>
            <p>Student</p>
        </div>
        </div>
        </div>

        </header>
    )
}

export default Header;