import { login } from "../../api"
import { setStorage } from "../../utils"
export default function Login() {
    const submit = () => {
        const user = document.getElementById('username').value
        const pass = document.getElementById('password').value
        console.log(user);
        console.log(pass);
        login(user, pass)
            .then((res) => {
                console.log(res.data);
                if(res.data.token) setStorage('user', res.data.token)
            })
    }
    return (
        <div>
            <input id="username" placeholder="username" />
            <input id="password" placeholder="password" />
            <button onClick={() => submit()}>submit</button>
        </div>
    )
}