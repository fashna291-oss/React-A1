import { useState, useEffect, use } from "react";

function UsersPanel(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchUsers() {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                    throw new Error("Unable to fetch students")
                }

                const data = await response.json();

                setUsers(data);
            } catch(err){
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }

        fetchUsers()

    }, []);

    return (
        <section className="users-section" id="students">

            <div className="users-heading">
            <div>
                <h2>Students Directory</h2>
                <p>Student information fetched from API.</p>
            </div>
            <span className="user-count">  {users.length} Students</span>
            </div>

            {loading && ( <p className="loading">Loading students...</p>)}

            {error && ( <p className="error">{error}</p> )}

            <div className="users-grid">

                {users.map((user) => (
                    <div className="user-card" key={user.id}>

                        <div className="user-avator">
                        {user.name.charAt(0)}
                        </div>

                        <div>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                            <small>{user.company.name}</small>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default UsersPanel;