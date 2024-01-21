

export const UserInput = (props)=>{
    return (
        <>
        <div className={`operate-input ${props.error}`}  name={props.name} id={props.name} 
        placeholder={props.placeholder} title={props.placeholder}>
            <input type={props.type} autoComplete="off" name={props.name} id={props.name} 
            maxLength={100} placeholder={props.placeholder} title={props.placeholder} className="input_inner"/>
        </div>
        </>
    );
}
export const ErrorMsg = (props)=>{
    return (
        <p className="error-msg">
            <span>{props.msg}</span>
        </p>
    )
}

export const Label = ()=>{
    return (
        <label check newcheck className="mt-8 custom">
            <input type='checkbox' title='아이디 저장' tabIndex={4}/> 아이디 저장
            <i></i>
          </label>
    )
}
