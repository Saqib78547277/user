import axios from "axios";
import React, { useState } from "react";

import "./SignUp.css";

type Person = {
    username: string;
    email: string;
    password: any;
    cntPassword: any;
    image: any;
};

const SignUp = () => {
    const [data, setdata] = useState<Person>({
        username: "",
        email: "",
        password: "",
        cntPassword: "",
        image: ""
    });

    const [message, setMessage] = useState(false);
    // let f = useRef(4);

    // useEffect(() => {
    //     console.log(f);
    //     console.log(message);

    //     return () => { };
    // }, [message]);
    const handler = (e:any) => {
        e.preventDefault();
        setMessage(true);
        console.log(message);


        const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(data.username !==""|| data.email !== "" || data.password !== "" || data.cntPassword !== "" || data.image !== ""){
            console.table(data)
            if(re.test(String(data.email).toLowerCase())){
                console.table(data);
                axios.post('/user', {
                    username : data.username,
                    email : data.email,
                    password : data.password,
                    cntPassword : data.cntPassword,
                    image : data.image
                })
                .then((response)=> console.log(response))
                .catch((error)=> console.log(error))

            }
            else{
                alert("Please Enter a valid Email")
            }
        }else{
            alert("Please Enater all Fields")
        }
        // let a = data.password.value;
        // //   console.log(a)
        // let b = data.cntPassword.value;

        // if (b.length > 5) {
        //     if (a !== b) {
        //         alert("pleas enter your password");
        //         setMessage(true);
        //         return false;
        //     } else {
        //         alert("thanku");
        //         setMessage(false);
        //         console.log(data);
        //         console.table(data);
        //     }
        // } else {
        //     alert("enter password");
        //     setMessage(true);
        // }
    };

    const loadFile = (event: any) => {
        // event.preventDefault();
        let image = data.image.src;
        image = URL.createObjectURL(event.target.files[0]);
        setdata({ ...data, image: image });
    };

    return (
        <div className="formcontainer">
            <form onSubmit={handler}>
                <h1 className="main-hedding">SignUp</h1>
                <div className="formitem1">
                    <div className="input1">
                        <label htmlFor="name">Name</label>
                        <br />

                        <input
                            type="text"
                            required
                            autoComplete="none"
                            //value={data?.username}
                            placeholder="Enter your name"
                            onChange={(e) => {
                                e.preventDefault();
                                setdata({ ...data, username: e.target.value });
                            }}
                        />
                        <br />
                        {/* {message ? <p>hello</p> : '' }
                    <p>{data?.username}</p> */}
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            required
                            value={data?.email}
                            autoComplete="none"
                            placeholder="Enter email"
                            onChange={(e) => {
                                e.preventDefault();
                                setdata({ ...data, email: e.target.value });
                            }}
                        />
                    </div>
                    <div id="imagefiles">
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png,"
                            id="file"
                            onChange={loadFile}
                            style={{ visibility: "hidden" }}
                        />
                        <label htmlFor="file" id="label" style={{ cursor: "pointer" }}>
                            <img src={data.image} alt="" />
                        </label>
                    </div>
                </div>

                <div className="formitem2">
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            required
                            value={data?.password}
                            id="password"
                            placeholder="Enter password"
                            onChange={(e) => {
                                e.preventDefault();
                                setdata({ ...data, password: e.target.value });
                            }}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="conform password">Conform Password</label>
                        <br />
                        <input
                            type="password"
                            required
                            value={data?.cntPassword}
                            id="conformPassword"
                            placeholder="Enter password"
                            onChange={(e) => {
                                e.preventDefault();
                                setdata({ ...data, cntPassword: e.target.value });
                            }}
                        />
                        {/* {message ? <span>**Please currect your password</span> : ""} */}
                    </div>
                </div>

                <div className="submit-button">
                    <button type="submit" id="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
