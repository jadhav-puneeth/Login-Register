import { useState } from "react";

export default function UserInfo(props){
    const [search,setSearch]=useState('');
    return (
        <div className="container my-5" style={{
            display: props.userDisplay ? '' : 'none',
        }}>
            <input className="mb-2" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
            <table className="table table-bordered" style={{color: "white", }}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th >Password</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.filter((user)=>user.name.includes(search)).map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}