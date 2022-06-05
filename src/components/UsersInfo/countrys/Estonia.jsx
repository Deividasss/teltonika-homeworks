import UsersData from "../../../UsersDatabase"
import { Form, Table } from "react-bootstrap"
import { useState } from "react"
import "../countrys/Users.scss"
import UserTable from "../userTable/UserTable"


const Estonia = () => {

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState(UsersData)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="usersInfo">
                <h2>----------Estonia Users Information----------</h2>
                <h4><span>Select the city whose users you want to see</span></h4>
                <Form>
                    <Form.Select
                        onChange={handleChange}
                        className="usersSelect">
                        <option>Select City</option>
                        <optgroup label="Harju"></optgroup>
                        <option>Tallinn</option>
                        <option>Paide</option>
                        <option>Polva</option>
                        <option>Tartu</option>
                        <optgroup label="Hiiu"></optgroup>
                        <option>Saare</option>
                        <option>Rapla</option>
                        <option>Parnu</option>
                    </Form.Select>
                </Form>
                <div className="usersTable">
                    <Table class="table table-striped userTable">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UsersData.users.filter((users) => {
                                if (search === "") {
                                    return null
                                } else if (users.city.includes(search)) {
                                    return users

                                }
                            }).map((user, i) => (
                                <UserTable
                                    key={i}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    age={user.age}
                                    gender={user.gender}
                                    city={user.city}
                                />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Estonia