import React from 'react';
import AuthTitle from '@/components/shared/AuthTitle.jsx';
import AuthInput from '@/components/shared/AuthInput.jsx';
import AuthButton from '@/components/shared/AuthButton.jsx';

function Login() {
    return (
        <>
            <AuthTitle title="계정 로그인하기" />
            <AuthInput label="계정의 아이디" placeholder="아이디를 입력해 주세요" value={} onChange={}/>
            <AuthInput label="계정의 비밀번호" placeholder="비밀번호를 입력해 주세요" value={} onChange={}/>
            <AuthButton text="로그인하기" onClick={} />
            <span><u>회원가입하기</u></span>
        </>
    );
}

export default Login;