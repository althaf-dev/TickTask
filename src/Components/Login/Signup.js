import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../CustomeHooks/useForm'
import { initialFormValue } from '../../Utilities/Data'
function Signup() {

    const [formvalues,setFormValues,checkvalidation,psInValid,handleSubmit,userCreated] = useForm(initialFormValue);

    return (
        <div className='container-fluid text-dark'>
            <pre>{JSON.stringify(formvalues)}</pre>
            <div className="row mt-5"></div>
            <div className="row mt-3">
                <form  >
                    <div className="col-3 mt-1 bg-light offset-4 text-dark border border-2  p-4 pb-5 pt-5">
                        <h3>Create Account</h3>
                        <label  htmlFor='fname' className='float-start mt-4 mb-1'>First Name</label>
                        <input
                            id='fname'
                            value={formvalues.Fname}
                            type="text"
                            className='form-control mt-4 mb-2'
                            required
                            placeholder='First Name'
                            name='Fname'
                            onChange={e=>setFormValues(e)}
                        />
                        <label  htmlFor='email' className='float-start mt-1 mb-1'>Email</label>
                        <input
                            id='email'
                            value={formvalues.Email}
                            type="text"
                            className='form-control mt-4 mb-2'
                            required
                            placeholder='Email'
                            name='Email'
                            onChange={e=>setFormValues(e)}
                        />
                        <label  htmlFor='psword' className='float-start mt-1 mb-1'>Password</label>
                        <input
                            id='psword'
                            value={formvalues.Password}
                            type="password"
                            className='form-control mb-2 mt-4 '
                            required
                            placeholder='Password'
                            name='Password'
                            onChange={e=>setFormValues(e)}
                        />
                        <label  htmlFor='cpsword' className='float-start mt-1 mb-1'> Confirm Password</label>
                        <input
                            id='cpsword'
                            value={formvalues.ConPassword}
                            type="password"
                            className='form-control mb-2 mt-4 '
                            required
                            placeholder=' Confirm Password'
                            name='ConPassword'
                            onChange={e=>setFormValues(e)}
                            onBlur={checkvalidation}
                        />

                        {psInValid && <span className='text-danger'>Password does not match</span>}
                        <Link to={ !psInValid  &&"/usercreated"}><button 
                  
                        
                        type='submit'
                            className='btn btn-primary form-control mb-2 mt-4'
                            onClick={handleSubmit}>Create</button>
                        </Link>

                        <span className='mt-4'>Alreday have account ? </span><Link to={'/Login'} >Login</Link>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default Signup
