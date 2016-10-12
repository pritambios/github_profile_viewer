import React from 'react';
import Profile from './Profile.jsx';
import Search from './Search.jsx';

class App extends React.Component {

   constructor(props) {
      super(props);
      
      this.state = {
         username: 'nbanerjee',
         userData: [],
         userRepo: [],
      }
   };

   getUserData() {
      $.ajax({
         url: 'https://api.github.com/users/'+this.state.username,
         dataType: 'json',
         success: function(data) {
            this.setState({userData: data});
         }.bind(this),
         error: function(xhr, status, err) {
            alert(err);
         }.bind(this)
      });
   }

   componentDidMount() {
      this.getUserData();
   }

   onFormSubmit(username) {
      this.setState({username: username}, function() {
         this.getUserData();
      }).bind(this);
   }
   render() {
      return (
         <div>
            <Search onFormSubmit={this.onFormSubmit.bind(this)}/>
            <Profile userData = {this.state.userData} />
         </div>
      );
   }
}

export default App;