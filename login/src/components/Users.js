export default function UserInfo(props){
    return (
        <div className="container my-5" style={{
            display: props.userDisplay ? '' : 'none',
        }}>
            <table className="table table-bordered" style={{color: "white", }}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th >Password</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
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