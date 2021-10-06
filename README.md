# react-hook-superform
*Harness the power of [react-hook-form](https://www.npmjs.com/package/react-hook-form) and create functional forms in React, FAST.*

---

## NOTE - oldest stable release

Hello devs everywhere! As I work out the initial bugs in my first package, I'll be updating the oldest stable release here.

The oldest stable release is: **1.1.3**

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
- 

## Quickstart

```js
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
```

## Tech

react-hook-superform uses a number of open source projects:

- [react-hook-form](https://www.npmjs.com/package/react-hook-form) - "Performant, flexible and extensible forms with easy-to-use validation."
- [React](https://reactjs.org/) - "A JavaScript library for building user interfaces"
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) - "Make beautiful, animated loading skeletons that automatically adapt to your app."
- [styled-components](https://styled-components.com/) - "Visual primitives for the component age."
- [react-datetime-picker](https://www.npmjs.com/package/react-datetime-picker) - "A datetime picker for your React app."

## License

MIT

**Free Software, Hell Yeah!**