
import { useState } from 'react';
import '../App.css';
import {UserInput, ErrorMsg, Label} from '../components/Common';
function Login() {
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
      <Head></Head>
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
{/* 
          <div className='operate-input' name='passwordPlain' id='passwordPlain'
          placeholder='비밀번호를 입력해 주십시오.' title='비밀번호를 입력해 주십시오.'>
            <input type='password' autoComplete='off' name='passwordPlaine' id='passwordPlain'
            maxLength={100} placeholder='비밀번호를 입력해 주십시오.' 
            title='비밀번호를 입력해 주십시오.' className='input_inner'></input> */}
          {/* </div> */}
          <Label></Label>
          <button tabIndex={5} className='btn point'>
            <span>로그인</span>
            <div className='spinner'></div>
          </button>
          <a onClick= {()=>{}}className='btn kakao'>카카오톡으로 로그인</a>
        </form>
        <div className='button-group'>
          <p>
            <a href='www.naver.com' className='line-btn'> 회원 가입 </a>
          </p>
          <div>
            <a href='www.naver.com' className='gray-btn'> 아이디 찾기 </a>
            <a href='www.naver.com' className='gray-btn'> 비밀번호 찾기 </a>
          </div>
        </div>
      </div>
      </article>
      </div>
    </div>
  );
}

const Head = ()=>{
  return (
      <header className='pub-header'>
        <div className='center-wrap'>
          <h1>
            <a href='https://www.naver.com' className='ir'></a>
          </h1>
        </div>
      </header>
  );
}



export default Login;
