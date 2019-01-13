import React from 'react';

const Logins = (props) => {

    //console.log(this.props);
    const { logins } = props; // grab the logins prop and put into local list called logins. #destructuring
    const loginList = logins.map(login => {
      return (
        <div className="login" key={login.id}>Name: { login.name } </div>
      )
    })
    return (
      <div className="test">
        <div className="login-list">
        { loginList }
        </div>
        <form>
          <input type="text" name="userName" />
          <input type="text" name="password" /> 
          <button>Submit</button>
        </form>
        <p>Sample Text.</p>  
      </div>
    );
}

export default Logins;
