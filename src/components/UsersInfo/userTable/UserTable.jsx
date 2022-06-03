import "../userTable/UserTable.scss"

const UserTable = (props) => {
    return (
        <>
                    <tr>
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td>{props.age}</td>
                        <td>{props.gender}</td>
                        <td>{props.city}</td>
                    </tr>
        </>
    )
}

export default UserTable