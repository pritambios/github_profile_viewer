import React from 'react';

class Profile extends React.Component {
   render() {
      return (
         <div className="panel panel-default">
           <div className="panel-body">
             <div className="row">
               <div className="col-md-3">
                  <img className="thumbnail" height="280" width="250" src={this.props.userData.avatar_url} />
               </div>
               <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary btn-xs btn-pills">followers <span className="badge">{this.props.userData.followers} </span></button>
                        <button type="button" className="btn btn-success btn-xs btn-pills">following <span className="badge">{this.props.userData.following} </span></button>
                        <button type="button" className="btn btn-warning btn-xs btn-pills">repos <span className="badge">{this.props.userData.public_repos} </span></button>
                        <button type="button" className="btn btn-danger btn-xs btn-pills">gists <span className="badge">{this.props.userData.public_gists} </span></button>
                     </div>

                     <div className="col-md-12">
                         <ul className="list-group">
                          <li className="list-group-item">{this.props.userData.name}</li>
                          <li className="list-group-item">{this.props.userData.email}</li>
                          <li className="list-group-item">{this.props.userData.company}</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <a className="btn btn-primary" href={this.props.userData.html_url}>Github</a>
             </div>
           </div>
         </div>
      );
   }
}

export default Profile;