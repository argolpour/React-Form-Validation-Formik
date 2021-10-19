import {Formik , Field,Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "./Signup.css"
const Signup = () => {
    return (
        <Formik 
        initialValues={{firstName:"" ,lastName:"",email:""}}
        validationSchema={Yup.object({
            firstName:Yup.string().max(15,"Must be 15 characters or less").required('Required'),
            lastName:Yup.string().max(20,"Must be 20 characters or less").required("Required"),
            email:Yup.string().email("Invalid email address").required("Required")
        })}
        onSubmit={(values,{setSubmitting})=>{
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
        }}
        >
        <Form className="form-group">
        <label htmlFor="firstName">First Name</label>
        <Field  className="form-control" name="firstName" type="text"/>
        <li className="error my-1" ><ErrorMessage name="firstName"/></li>
        <label htmlFor="lastName">Last Name</label>
        <Field className="form-control mb-2" name="lastName" type="text"/>
        <li className="error my-1" ><ErrorMessage name="lastName"/></li>
        <label htmlFor="email">Email Address</label>
        <Field className="form-control " name="email" type="email"/>
        <li className="error my-1" ><ErrorMessage name="email"/></li>
        <button className="btn btn-block btn-success mt-4" type="submit">Submit</button>
        </Form>
        </Formik>
    )
}

export default Signup
