
import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Register = () => {
  const navigate = useNavigate()

  const userSubmit = async (formdata) => {
    console.log(formdata)

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format

    //  for creating request on backend
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      console.log("success")
      Swal.fire({
        icon: "success",
        title: "Well Done 👍",
        text: "You have done a wonderfull Job!!",
      })
      navigate("/login")
    } else {
      console.log(response.status)
      console.log("something went wrong")
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input placeholder="username" id="username" onChange={handleChange} value={values.username} />
            <input placeholder="email" id="email" onChange={handleChange} value={values.email} />
            <input placeholder="password" type="password" label="Password" id="password" onChange={handleChange} value={values.password} />

            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Register
