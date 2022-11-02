import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function UserList() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <center>
      <div className="container">
        <div className="row">
          <h1>Redux CRUD User app</h1>
        </div>
        <div className="row">
          <div className="two columns">
            <button
              onClick={() => dispatch(fetchUsers())}
              className="button-primary"
            >
              Load Users
            </button>
          </div>
          <div className="two columns">
            <NavLink to="/AddUser">
              <button className="button-primary">Add user</button>
            </NavLink>
          </div>
        </div>
        <div className="row">
          {loading ? (
            "Loading..."
          ) : (
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {entities.length &&
                  entities.map(({ id, name, email }, i) => (
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <NavLink to={`/EditUser/${id}`}>
                          <button>Edit</button>
                        </NavLink>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </center>
  );
}
export default UserList;
