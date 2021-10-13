# react-hook-superform

*Harness the power of [react-hook-form](https://www.npmjs.com/package/react-hook-form) and create functional forms in React, FAST.*

---

## Features

- Access to every hook provided by [`useForm`](https://react-hook-form.com/api/useform/)
- No need no write repetitive html, just an array of input names
- Extensive control over input types and formatting using props
- Usable as an input form, editable details form, or display-only details block
- If using [styed-components](https://styled-components.com/), access to your project's [`themeProvider`](https://styled-components.com/docs/api#themeprovider)

## Install

```sh
npm install @benisenstein/react-hook-superform
```

## Links

- [react-hook-form docs](https://www.npmjs.com/package/react-hook-form)
- [examples](https://github.com/BenIsenstein/react-hook-superform/tree/main/examples)

## Coming soon to these docs:

- Theming your forms with styled-components
- Building powerful custom input components 
- Writing your own css for ANY part of your forms

## Quickstart

```js
import { SuperForm } from 'react-hook-superform'

const BasicSubmissionForm = () => {
  const inputs = [
    { name: 'username' }, 
    { name: 'password' }, 
    { name: 'email' }
  ]
  const onSubmit = async (data) => console.log(data) 

  /* 
  Result in the console on submitting the form:

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
```

## Tech

react-hook-superform uses a number of open source projects:

- [react-hook-form](https://www.npmjs.com/package/react-hook-form) - "Performant, flexible and extensible forms with easy-to-use validation."
- [React](https://reactjs.org/) - "A JavaScript library for building user interfaces"
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) - "Make beautiful, animated loading skeletons that automatically adapt to your app."
- [styled-components](https://styled-components.com/) - "Visual primitives for the component age."
- [react-datetime-picker](https://www.npmjs.com/package/react-datetime-picker) - "A datetime picker for your React app."

---

## Documentation  

### `SuperForm`

`import { SuperForm } from 'react-hook-superform'`

A dynamic form component wrapped in a flexbox div tag. By default, the wrapper div is set to `width: 100%` but this can be changed with props.  

<br>

#### Props

**inputs** | type: array | default: undefined 

The inputs array is very important. Its absence won't break the component, but it might as well be required for SuperForm to be of any use. It needs this structure:

```js
const inputs = [
  {
    name: "item",
    registerOptions: { required: "You must choose an item." },
    labelText: "",
    maxLength: '50'
  },
  {
    name: "task",
    registerOptions: { required: "You must choose a task." },
    labelText: "Custom label text",
    maxLength: '50'
  }
]
```

- Each JavaScript object in the array will result in the rendering of a `ComplexInput` - a label, html input element with corresponding name, and a conditional error message if validation has been selected. `ComplexInput` has some other potential use cases and is also exported by 'react-hook-superform'. See 'ComplexInput' for more info.
- The 'name' attribute of each input will determine the data structure of the JavaScript object returned by the form. See the quickstart example.
- Other than the crucial 'name' prop, inputs can take any regular html attributes as well as some custom ones.

**See 'ComplexInput' for a complete look at individual input props.**

<br>
  
##### Other Props

| Prop | Type | Default| Description |
| ---- | ---- | ------ | ----------- |
BeforeTemplate | JSX | undefined | React component that will render above the form
AfterTemplate | JSX | undefined  | React component that will render below the form
BeforeSubmitButton | JSX | undefined | React component that will render between the input fields and the submit button
BeforeSubmitButtonIfEditView | JSX | undefined | BeforeSubmitButton, but only if in details mode and edit view
formProps | object | undefined | all props fed directly to the main `<form>` element. 
onSubmit | func | alert('No onSubmit given to `<FormTemplate />`') | called on submit event of the main `<form>` element.**MUST BE ASYNCRONOUS**
formMode | str | 'add' | can be either 'add' or 'details'
titleText | str | null | Appears just below the back button, above the inputs
titleTag | str, React component | `<p></p>` | Can make the title of the template into any native html element, or a React component.
openInEditView | bool | undefined | can choose to open a details mode form in editable view.
addModeCancel | func | history.push('/') | a customizable function that fires on clicking the 'cancel' button. 
submitText | str | "Save" | `<Form />` 'submit' button at the bottom of the template
cancelText | str | "Cancel" | right next to the 'submit' button
detailsUrl | str | undefined | is crucial to fetch info for the template dynamically when in details mode
displayOnly | bool | false | if true the PencilIcon disappears, meaning you can effectively have a read-only div 
editViewCancel | func | undefined | function that can overide the cancel button onClick() in edit view of details form.
homeUrl | str | undefined | the url that is redirected to when cancelling in add mode
noCancelButton | bool | undefined | Choose not to render a cancel button.  

<br>

### `ComplexInput`

`import { ComplexInput } from 'react-hook-superform'`

Render a label, input element, and error message with as little code as possible.

<br>

#### Props

**name** | type: str | default: undefined 
The 'name' prop is the bare minimum you need to deliver a functional `ComplexInput` that meets accessibility standards. The label's "for" attribute, the input's "id" and "name" will all be given the value you specify for the 'name' prop.

| Prop | Type | Default| Description |
| ---- | ---- | ------ | ----------- | 
readOnly | bool |  false 
as | str, React component | undefined | [styled-components 'as' prop](https://styled-components.com/docs/api#as-polymorphic-prop)
labelText | str | this.name | Choose what to display on the label, if the name of the input isn't desirable.
labelHidden | bool | false | whether to hide the label, only displaying the input field.
labelProps | object |undefined | props for the label tag.
registerOptions | object | undefined | [react-hook-form 'register' method](https://react-hook-form.com/api/useform/register)
isCustomComponent | bool | false | Whether the input is being rendered as a custom React component, and should have 'register' passed along to it so as to properly track the value of its underlying input element.
forwardErrors | bool | false | Whether to pass the error messages along to your custom React component, or let the SuperForm render them at the top level.

<br>

**wrapperProps:**
Props for the outer wrapper div.  
It needs this structure:

```js
const wrapperProps = {
  gridColumn: "",
  noColumn: false,
  noFullWidth: true,
  // any other props for the outer wrapper div.
}
```

<br>


### `GroupOfInputs`

`import { GroupOfInputs } from 'react-hook-superform'`

Deliver a series of accessibility-compliant input fields with as little code as possible. <br>

`<SuperForm>` renders a `<GroupOfInputs>` under the hood, so for information on props check out the section on 'SuperForm'. <br>

`<GroupOfInputs>` can be very useful for clustering input fields and rendering them in different ways, such as horizontally in a row. For more information, check out the section on 'using custom React components as input fields'

<br>

### `SuperFormSelect`

`import { SuperFormSelect } from 'react-hook-superform'`

Deliver a drop-down menu with as little code as possible. 

<br>

#### Props

**options:** | type: array | default: undefined
List of options for the `<select>` element. Each option is declared as a JavaScript object, with a 'value' prop, and an 'optionText' prop if you want the text on the option to be something other than the value.  

An example: 

```js
const options = [
  { optionText: "Lakeside Cottage", value: "5hbfjdg73" },
  { optionText: "Mountain Cabin", value: "bfgn3tgf" },
  { optionText: "Chicago Duplex", value: "bghfj66b3" }
]
```

This complete example includes the declaration of options within the larger structure of the 'inputs' array:

```js
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
```
<br>

### `ToggleVisibleInput`

`import { ToggleVisibleInput } from 'react-hook-superform'`

#### Props

| Prop | Type | Default| Description |
| ---- | ---- | ------ | ----------- |
startVisible | bool | false | Whether to render with user input visible.
wrapperProps | object | undefined | 

## License

MIT

**Free Software, Hell Yeah!**