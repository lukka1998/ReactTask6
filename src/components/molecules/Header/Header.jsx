import React, { useEffect, useState } from "react";
import image from "../../../assets/Rectangle 79.png";
import axios from "axios";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const todos = todosResponse.data;
        const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = usersResponse.data;
        const combinedData = [];
        for (let i = 0; i < 10; i++) {
          const todo = todos[i];
            combinedData.push({
              id: todo.id,
              title: todo.title,
              email: users[i].email,
              address: `${users[i].address?.street}, ${users[i].address?.city}`, 
              zipCode: users[i].address?.zipcode, 
              status: todo.completed ? "Completed" : "Pending",
              completed: todo.completed, 
            });
          
        }

        setData(combinedData);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);//rodesdac wavshlit vclit datas
    setData(updatedData); 
  };

  return (
    <table style={{ borderSpacing: "30px" }}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Image</th>
          <th>Title</th>
          <th>Email</th>
          <th>Address</th>
          <th>Zip Code</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src={image} alt="" />
            </td>
            <td>{item.title}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.zipCode}</td>
            <td
              style={{
                backgroundColor: item.completed ? "green" : "red",
                color: "white",
                padding: "5px 10px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              {item.status}
            </td>
            <td>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(item.id)} 
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Header;
