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
                <div class="card">
                    <div class="card_part card_part-one">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-two">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-three">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-four">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                </div>
                <h2>---------- <img className="countryImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/2560px-Flag_of_Estonia.svg.png" alt="foto" /> Estonia Users Information <img className="countryImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/2560px-Flag_of_Estonia.svg.png" alt="foto" /> ----------</h2>
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