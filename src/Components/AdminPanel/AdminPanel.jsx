import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Utility/UserSlice.js";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { isLoading, userList } = useSelector((state) => state.UserSlice);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <div className="container "  style={{overflowX:"auto"}}>
        <div className="row mt-5 py-5 ">
          <div className="col px-0">
            <table className="table  ">
              <thead className="align-middle">
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  userList.map((elm, ind) => {
                    const { name, age, email, address, contact, image } = elm;

                    return (
                      <tr key={elm.id}>
                        <th scope="row">{ind + 1}</th>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{contact}</td>
                        <td>
                          <img src={image} alt="..." width={50} height={50} />
                        </td>
                        <td>
                          <div className="btn-group">
                            <button
                              className="btn btn-success"
                              //   onClick={() => handleEdit(id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              //   onClick={() => handleDelete(id)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-warning"
                              //   onClick={() => handleRead(id)}
                            >
                              Read
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
