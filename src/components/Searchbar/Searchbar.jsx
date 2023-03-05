import React from "react"
import { Form,Formik, Field } from "formik"


export const Serchbar = ({onSubmit}) =>{

const handeleSubmit = (values, actions) => {
  onSubmit(values)
  actions.resetForm()
}

return (
<Formik initialValues={{serch: ''}} onSubmit={handeleSubmit}>

  <Form>
    <button type="submit" >
      <span >Search</span>
    </button>
<label>
    <Field
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