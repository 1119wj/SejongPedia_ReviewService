import React from 'react'
import {UserInput, ErrorMsg, Label} from '../components/Common';
import { useState } from 'react';
const Signup = () => {
  const [errorMsgPassword , setErrorMsgPassword] = useState('');
  const [errorMsgId , setErrorMsgId] = useState();
  const [id , setId] = useState('');
  const [password , setPassword] = useState('');
  const [isError , setIsError] = useState('');
  const onSubmitHandle = (e)=>{
    e.preventDefault();
    if(!id){
        setErrorMsgId('아이디(메일)를 확인해 주십시오.');
        setIsError('is-error');
    }
    if(!password){
        setErrorMsgPassword('비밀번호를 입력해 주십시오.');
        setIsError('is-error');
    }
  }
  return (
    <div className="App">
      <div className='wrapper pub-wrapper'>
      <article className='login'>
        <h2>로그인</h2>
      <div className='center-wrap mh-30'>
        <form name='loginForm' id='loginForm' method='POST'
        autoComplete='off' onSubmit={onSubmitHandle}>
            <UserInput name='username' placeholder="아이디(이메일)를 입력해 주십시오." type='text' error={isError} onChange={(e)=>{setId(e.target.value)}} value={id}></UserInput>
            {
               errorMsgId != '' ? <ErrorMsg msg={errorMsgId}></ErrorMsg> : null
            }
            <UserInput name='passwordPlain' placeholder="비밀번호를 입력해 주십시오." error={isError} type='password'onChange={(e)=>{setPassword(e.target.value)}} value={password}></UserInput>
            {
               errorMsgPassword != '' ? <ErrorMsg msg={errorMsgPassword}></ErrorMsg> : null
            }
          </form>
        </div>
        </article>
        </div>
        </div>
  )
}

export default Signup