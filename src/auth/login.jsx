import React from 'react'
import Frame from '../../src/frame.png'
const login = () => {
  return (
    <>
    <section className='bg-cover'>
      <div className='custom-container'>
        <div className='alng-frm-item'>
        <div className='sign-in-box'>
          <div className='lft-img-content'>
            <img src={Frame} />
          </div>
          <div className='rht-frm-content'>
            <h2>Sign In</h2>
            <form>
              <div className='inpt-dtl'>
                <label>Email or Mobile</label>
                <input type='text' placeholder='Enter Your Email / Mobile No'/>
              </div>
              <div className='inpt-dtl inpt-gap'>
                <label>Password</label>
                <input type='text' placeholder='Enter Your Password'/>
              </div>
              <div className='frgt-pswd-lnk'>
                <a href='#'> Forget Password</a>
              </div>
              <div className='sbmt-actions'>
                <div className='action-btn'>
                  <a href='#'>Sign In</a>
                </div>
                  <span className='divider-gap'>or</span>
                <div className='action-btn'>
                  <a href='#'>Request Otp</a>
                </div>
              </div>
              <div className='crt-accnt'>
                <p>Don't have an account? <a href='#'>Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default login
