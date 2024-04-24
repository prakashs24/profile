import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        
        axios.get('http://localhost:3000/user/')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container border border-5 my-5">
            <h1 className="text-center  border-bottom border-5">Profile Details</h1>
            <div className="row mt-5">
               
                {data.map(user => (
                    <div key={user.id} >
                       <div className="row"><strong className="fs-1 text-end col">User :</strong> <p className="fs-1 text-start col"> {user.name}</p></div>
                       <div className="row"><strong className="fs-1 text-end col">Email :</strong> <p className="fs-1 text-start col"> {user.email}</p></div>
                       <div className="row"><strong className="fs-1 text-end col">Country :</strong> <p className="fs-1 text-start col"> {user.country}</p></div>
                       <div className="row"><strong className="fs-1 text-end col">Phone :</strong> <p className="fs-1 text-start col"> {user.phone}</p></div>
                       <div className="row"><strong className="fs-1 text-end col">Address :</strong> <p className="fs-1 text-start col"> {user.address}</p></div>
                       <div className="row"><strong className="fs-1 text-end col">Gender :</strong> <p className="fs-1 text-start col"> {user.gender}</p></div>
            
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
