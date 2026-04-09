import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>React API Integration Dashboard</h1>

      <nav>
        <Link to="/users">Users</Link> | 
        <Link to="/fetch">Fetch API</Link> | 
        <Link to="/posts">Axios Posts</Link>
      </nav>

      <p>Select an option above.</p>
    </div>
  );
}

export default Dashboard;