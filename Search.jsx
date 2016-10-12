import React from 'react';

class App extends React.Component {

   searchUser(e) {
      e.preventDefault();
      let username = this.refs.username.value;
      if(!username) {
         alert("Please enter a username.");
         return;
      }
      this.props.onFormSubmit(username);
      this.refs.username.value = '';

   }
   render() {
      return (
         <div>
            <form onSubmit={this.searchUser.bind(this)}>
               <h3>Search User By username: </h3>
               <input ref="username" className="form-control"/>
            </form>
         </div>
      );
   }
}

export default App;