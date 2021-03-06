import Moment from "react-moment";

function Reply(props) {
    return (
        <div className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><button onClick={()=> props.updatedState()}>Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                    {props.list.map(person => 
                    <tr key={person.name.first + person.name.last}>                            
                        <td><img alt={person.name.first} className="img-fluid" src={person.picture.large} /></td>
                        <td>{person.name.first} {person.name.last}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td><Moment format="MM/DD/YYYY">{person.dob.date}</Moment></td>
                    </tr>
                    )}
                </tbody>
        </div>
    )
}

export default Reply;