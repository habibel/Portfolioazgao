
export function Validateinfo(values) {
    let errors = {}

    if(!values.fullname.trim())
    {
        errors.fullname = "Name Required"
    }
    if(!values.email.trim())
    {
        errors.email = "Email Required"
    }else
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email = "Email address is invalid"
    }
    if(!values.message.trim())
    {
        errors.message = "message Required"
    }else
    if(values.message.length < 50)
    {
        errors.message = "message need to be more then 50 caracters"
    } 
    return errors     
}

export default Validateinfo
