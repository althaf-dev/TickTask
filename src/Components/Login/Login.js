import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { initialFormValue } from '../../Utilities/Data';
import useForm from '../../CustomeHooks/useForm';


function Login() {

    const [formvalues, setFormValues, , , , , doLogin] = useForm(initialFormValue);
   

    return (
        <div className='container-fluid'>
            <div className="row mt-5"></div>
            <div className="row mt-5">
                <form onSubmit={(e)=>{
                    doLogin(e);   
                }}>
                    <div className="col-3 mt-5 bg-light offset-4 text-dark border border-2  p-4 pb-5 pt-5">
                        <h3>Login</h3>
                        <input
                            value={formvalues.Email}
                            type="email"
                            className='form-control mt-4 mb-2'
                            required
                            placeholder='Email'
                            name='Email'
                            onChange={setFormValues}
                        />
                        <input
                            value={formvalues.Password}
                            type="password"
                            className='form-control mb-2 mt-4 '
                            required
                            placeholder='Password'
                            name='Password'
                            onChange={setFormValues}
                        />
                        <button className = 'btn btn-primary form-control mb-2 mt-4'>Login</button>
                        <span className='mt-4'>No Account ? </span><Link to={'/signup'} >Create One</Link>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default Login
