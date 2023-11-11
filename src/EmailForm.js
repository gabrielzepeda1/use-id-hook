import { useId } from 'react'

export default function EmailForm() { 
    const id = useId()
    // const id2 = useId()
    return ( 
      <>
        <label htmlFor={`${id}--email`}>Email</label>
        <input id={`${id}--name`} type="email" /> 
        <br />
        <label htmlFor={`${id}--name`}>Name</label>
        <input id={`${id}--name`} type="text" /> 
      </>
    )
}