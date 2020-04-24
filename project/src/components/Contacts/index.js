import React from 'react';
import "./index.css";

class ContactApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      profile: {}
    };
  }

  componentDidMount() {
    this.getContacts();
    this.getProfile();
  }

  add = (event) => {
    event.preventDefault();
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: 'POST',
      body: JSON.stringify({
        name: this.refs.name.value,
        number: this.refs.number.value
      }),
      headers: {"Content-type": "application/json", API: "marshall"}
    })
    .then(res => {return res.json() })
    .then(() => {
      this.getProfile();
      this.getContacts();
    });
  }

  getContacts() {
    window.fetch ("http://plato.mrl.ai:8080/contacts", {
      headers: {API: "marshall"}
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts });

    });
  }

  getProfile(){
    window.fetch ("http://plato.mrl.ai:8080/profile", {
      headers: {API: "marshall"}
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({profile: data});
    });
  }
  remove = (index) => {
    fetch( 'http://plato.mrl.ai:8080/contacts/remove', {
      method :'POST',
      body: JSON.stringify({position: index}),
      headers: {"Content-type": "application/json", API: "marshall"}
    })
    .then(res => {return res.json() })
    .then(() => {
      this.getProfile();
      this.getContacts();
    });
  }

  render(){
    return(
      <div>
        <h1>The Contact App</h1>
        <div className="body">
        <div>
              <fieldset>
                <h2>Profile</h2>
                <div className="profile">
                  <h4>Name: {this.state.profile.name} </h4>
                  <h5>Number of Contacts: {this.state.profile.count}</h5>
                </div>
              </fieldset>
            </div>

        <br/>
        
            <fieldset className= "contacts">
              <h2>Contacts</h2>
              {this.state.contacts.map((value,index) => {
                return(
                  <fieldset className="card">
                    <legend key={index +1}></legend>
                <h4>{value.name}</h4>
                <p>{value.number}</p>
                <div className="buttondiv">
                  <button type="submit"
                  onClick={() => this.remove(index)}
                  id={index}> Remove Contact
                  </button>
                </div>
                </fieldset>);
              })
              }
            </fieldset>
          </div>
            <br />
            <div className="addcontact">
              <fieldset>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                  <input ref="name" type='text' placeholder='Name'/>
                  <input ref="number" type='text' placeholder='Number'/>
                  <br/>
                  <button type="submit"> Add Contact</button>
                </form>
                </fieldset>  
            </div>

          </div>
      
    );
  }
 }

export default ContactApp;