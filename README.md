# React Password Strength

This is a fork of https://github.com/mmw/react-password-strength.
I have used the password strength scoring which is inspired by https://stackoverflow.com/a/11268104 inorder to reduce the size of the dependency.

## Install in your project

`npm install --save @koundinyagoparaju/react-password-strength`

_Note: react/react-dom is a peer dependency. You should be using this in a React project._

## Using the tool

```
<ReactPasswordStrength
  className="customClass"
  style={{ display: 'none' }}
  minLength={5}
  minScore={2}
  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
  changeCallback={foo}
  inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
/>
```

### Importing

If using ES6 imports:
`import ReactPasswordStrength from 'react-password-strength';`

Using CommonJS require:
`var ReactPasswordStrength = require('react-password-strength');`

Using in a __Universal JS App__ (server-side rendering):
- Import component from `react-password-strength/dist/universal`
- Include default style from `react-password-strength/dist/style.css`.

### Props

#### ClassName

- ClassName to render with default container classes

#### Style

- Style object to customize container

#### minLength (Default: 5)

- Minimum password length acceptable for password to be considered valid

#### minScore (Default: 2)

- Minimum score acceptable for password to be considered valid
- Scale from 0 - 4 denoting too guessable to very unguessable

#### scoreWords (Default: ['weak', 'weak', 'okay', 'good', 'strong'])

- An array denoting the words used to describe respective score values in the UI

#### tooShortWord (Default: 'too short')

- A string to describe when password is too short (based on minLength prop).

#### changeCallback

- Callback after input has changed (and score was recomputed)
- React Password Strength passes one object to the callback function:
    - current app state (`score`, `password`, `isValid`)

#### inputProps

- Props to pass down to the `input` element of the component. Things like `name`, `id`, etc
- Protected props: `className`, `onChange`, `ref`, `value`
  - Passing in `className` will append to the existing classes
  - The remaining props will be ignored

#### defaultValue

- A default value to set for the password field. If a non-empty string is provided the `changeCallback` will be called in `componentDidMount`.

#### namespaceClassName (Default: 'ReactPasswordStrength')

- Used to control the CSS class namespace. CSS classes created by RPS will be prepended with this string.
- If you change this prop you have to provide all CSS and it's recommended to import RSP from the universal JS build (`react-password-strength/dist/universal`)

### Classes

_All styling is applied with CSS classes to allow custom styling and overriding. Note that if you change the `namespaceClassName` prop the below classnames will be affected._
- `ReactPasswordStrength` - namespace class and component wrapper
- `is-strength-{0-4}` - modifier class indicating password strength
- `ReactPasswordStrength-input` - password input field
- `is-password-valid` - modifier class indicating valid password
- `is-password-invalid` - modifier class indicating invalid password (only applies if password length > 0)
- `ReactPasswordStrength-strength-bar` - color bar indicating password strength
- `ReactPasswordStrength-strength-desc` - text indicating password strength


### Functions

_Access through `ref` handle of ReactPasswordStrength._
- `clear` - reset password field to initial state
