import * as React from 'react';
import { useState } from 'react';
import './Login.css'
function Login() {
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')
    const Test = () => {
        console.log(UserName,PassWord)
    }
    return (
        <div>
            <div className="UserName">
                <label>Tài khoản</label>
                <input
                    value={UserName}
                    onChange={item => setUserName(item.target.value)}
                />
            </div>
            <div className="PassWord">
                <label>Mật khẩu</label>
                <input
                    type='password'
                    value={PassWord}
                    onChange={item => setPassWord(item.target.value)}
                />
            </div>
            <button onClick={Test}>Click</button>
        </div>
    );
}
export default Login;