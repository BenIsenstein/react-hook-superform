import React from 'react'
import { Label, Textarea, Input, FlexSection, Error } from './resources'
import Skeleton from 'react-loading-skeleton'

const ComplexInput = ({ 
  name, 
  errors, 
  register, 
  isCustomComponent, 
  forwardErrors, 
  type, 
  wrapperProps,
  labelProps,
  ...props 
  }) => {
  const isCheckbox = type === 'checkbox'
  const isNumber = type === 'number'

  // ensuring the wheel behaviour is disabled on number inputs
  // const registerMethods = !isCustomComponent && register && register(name, !isCheckbox && props.registerOptions) // only apply registerOptions if it isn't a checkbox. 
  // const numberRegisterMethods = !isCustomComponent && register && {
  //   ...registerMethods,
  //   ref: elem => {
  //     elem?.addEventListener("wheel", event => event.preventDefault(), {passive: false})
  //     registerMethods?.ref(elem)
  //   }
  // }

  return (
    <FlexSection 
      key={props.key}
      gridColumn={wrapperProps?.gridColumn || "1/-1"}                // gridColumn: "1/-1" unless specified otherwise
      fullWidth={!wrapperProps?.noFullWidth}                         // fullWidth unless specified otherwise
      column={!wrapperProps?.noColumn}                               // column unless specified otherwise
      {...isCheckbox ? {alignCenter: true} : {alignStart: true}}     // checkbox aligmnent
      {...wrapperProps}
    >
  
      {props.isAddMode || props.areDetailsLoaded || isCustomComponent
        ? <>
        {!props.labelHidden && (props.isAddMode || props.areDetailsLoaded) &&                         // label can be hidden with labelHidden. 
          <Label htmlFor={name || props.labelText} {...isCheckbox && {margin: '0'}} {...labelProps}>
            {props.labelText || name}
          </Label>
        }
    
        <Textarea   
          id={name || props.labelText}
          name={name || props.labelText}
          {...!isCustomComponent && register && register(name, { shouldUnregister: true, ...isCheckbox ? {} : props.registerOptions })}  
          {...isCustomComponent && register && { register }}
          {...forwardErrors && errors && { errors }}
          {...type && { as: Input, type }}
          {...props}
        />
    
        {!forwardErrors && errors && <Error>{errors[name]?.message}</Error>}
      </>
        : <Skeleton height={20} width={400} />
      }
  
    </FlexSection>
  )
}

export { ComplexInput }