import React from 'react'

const header = () => {
    return (
        <div className='Header'>
            <h3>hello</h3>
            <div className='menu-list'>
                <ul className='li-list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/users'>Users</a></li>
                    <li> <a href='/register'>Register</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/product'>Product</a></li>
                </ul>
            </div>
        </div>
    )
}

export default header