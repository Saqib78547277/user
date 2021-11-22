import React, {useState} from 'react'

import './SignUp.css'

type Person = {
    username : string;
    email : string;
    password : number;
    cntPassword : number;
}

const SignUp = () => {
    const [data, setdata] = useState<Person>(
        {
            username : '',
            email : '',
            password : 1,
            cntPassword : 1
        }
    );


    console.table(data)


    return (
        <div className="container">
            <form>
                <h1 className="main-hedding">SignUp</h1>
                <div className="item1">
                    
                    <div className="input1">
                    <label htmlFor="name">Name</label><br />

                    <input type="text" autoComplete='none' value={data?.username} placeholder="Enter your name" onChange={e =>  setdata({...data, username : e.target.value}) }/><br />
                    {data.username.length < 4 ? <p>Please enter your Nam</p> : ""}
                    <p>{data?.username}</p>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" value={data?.email} autoComplete= 'non e' placeholder="Enter email"  onChange={e => setdata({...data, email: e.target.value})}/>
                    </div>
                    <input id="userImage" type="file" accept=".jpg, .jpeg, .png," />
                    
                </div>

                <div className="item2">
                    <div className="password">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={data?.password} id="password" placeholder="Enter password" />
                    </div>
                    <div className="password">
                    <label htmlFor="conform password">Conform Password</label><br />
                    <input type="password" id="conform password" placeholder="Enter password" />

                    </div>
                </div>
                
                <div className="submit-button">
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
