import React from "react"
import { Form,Formik, Field } from "formik"
import './search.styled.css'

export const Serchbar = ({onSubmit}) =>{

const handeleSubmit = (values, actions) => {
  onSubmit(values)
  actions.resetForm()
}

return (
<Formik initialValues={{serch: ''}} onSubmit={handeleSubmit}>

  <Form className="find">
    <button type="submit" className="button SearchForm-button">
      <span>&#128270;</span>
    </button>
<label>
    <Field
    className="SearchForm-input"
      name= 'serch'
      type="text"
      autoFocus
      placeholder="Search images and photos"
    />
    </label>
  </Form>
</Formik>
)
}