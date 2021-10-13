import { SuperForm, SuperFormSelect } from 'react-hook-superform'

const FormWithOneSelect = () => {
  const inputs = [
    {
      name: "province",
      wrapperProps: { gridColumn: '3/4' },
      registerOptions: { required: "You must select a province." },
      isCustomComponent: true, 
      as: SuperFormSelect,     
      options: [
        { value: "AB" },
        { value: "BC" },
        { value: "SK" },
        { value: "MB" },
        { value: "ON" },
        { value: "QC" },
        { value: "PE" },
        { value: "NL" },
        { value: "NB" },
        { value: "NS" },
        { value: "YT" },
        { value: "NT" },
        { value: "NU" }
      ]
    }
  ]     

  const onSubmit = async (data) => {
    console.log("The selected province is: ", data.province)
  }  	

  return <SuperForm
    titleText="Example With One Select"
    inputs={inputs}
    onSubmit={onSubmit}
  />
}

export default FormWithOneSelect