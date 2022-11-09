
import { Formik } from "formik"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { AppContext } from "../AppContext"

const Authenticate = () => {
  const navigate = useNavigate()

  const { setLoggedIn } = useContext(AppContext)

  const userSubmit = async (formdata) => {
    console.log(formdata)

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have successfully logged in",
      })
      const data = await response.json()
      console.log(data)
      setLoggedIn(true)
      // this will store user data in session
      sessionStorage.setItem("user", JSON.stringify(data))
      navigate("/home")
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Invalid Credentials",
      })
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input placeholder="email address" label="Email Address" id="email" onChange={handleChange} value={values.email} />
            <input placeholder="password" type="password" label="Password" id="password" onChange={handleChange} value={values.password} />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Authenticate
