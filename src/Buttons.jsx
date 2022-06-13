import React, { useEffect, useState } from 'react';
const Buttons = () => {
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);

    const getData = async () => {
        const url = "https://reqres.in/api/users";
        await fetch(url).then(res => res.json()).then(res => setUsers(res.data))

    }
    useEffect(() => {
        getData();
    }, [])


    const handleChanges = (id) => {
        console.log(id);
        const url2 = `https://reqres.in/api/users/${id}`;
        // fetch(url2).then(res=>res.json()).then(res=>console.log(res.data));
        fetch(url2).then(res => res.json()).then(res => setUsers1(res.data))
    }
    return (
        <div>
            <h1 align="center" className='heading'>Extract User Information</h1>
            <div className='forBtn'>
                {
                    users.map((currUser) => {
                        return <div>
                            <button className='btn' key={currUser.id} onClick={() => handleChanges(currUser.id)}>User {currUser.id}</button>
                        </div>
                    })
                }

            </div>
            <center>
                <div className="main_container">
                    {
                        <>
                            {(users1.id) ?
                                <>
                                    <div className="forData">
                                        <div className='image'> <img src={users1.avatar} alt="" /></div>
                                        <div className='container'>
                                            <h2>First Name: {users1.first_name} </h2>
                                            <br />
                                            <h2>Last Name: {users1.last_name}</h2>
                                            <br />
                                            <h2>Email: {users1.email}</h2>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </>
                    }

                </div>
            </center>
        </div>
    )
}

export default Buttons
{/* <div className='image'> <img src={users1.avatar} alt="" /></div>
    <div className='container'>
     <h2>First Name: {users1.first_name} </h2>
     <br />
     <h2>Last Name: {users1.last_name}</h2>
     <br />
     <h2>Email: {users1.email}</h2>
     </div> */}