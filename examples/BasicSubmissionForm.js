import { SuperForm } from 'react-hook-superform'

const BasicSubmissionForm = () => {
  const inputs = [{ name: 'username' }, { name: 'password' }, { name: 'email' }]
  const onSubmit = async (data) => console.log(data) 

  /* 
  Result in the console:

  {
    username: "SOME_USERNAME",
    password: "SOME_PASSWORD",
    email: "SOME_EMAIL"
  }
  */

  return <SuperForm 
    titleText='Signup' 
    inputs={inputs}  
    onSubmit={onSubmit} 
  />
}

export default BasicSubmissionForm