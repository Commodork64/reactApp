import React from 'react';
import './User.css';

const User = () => {
    
    return (
            <div className="User">
                    <section className="userDetails">
                        <ul>
                            <li>username: </li>
                            <li>age: </li>
                        </ul>
                    </section>

                    <section className="listData">
                    </section>
            </div>      
    );
}

export default User;