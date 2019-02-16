import React, { Component } from 'react';
import './App.css';
import SignUpContainer from './components/SignUpContainer';
import SignInContainer from './components/SignInContainer';
import UserContainer from './components/UserContainer';
import SaveBtn from './components/SaveBtn';
import UserContainer from './components/userContainer';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import "./Login.css";


class App extends Component {
  constructor() {
    super();

    onOpenModal_SignUp = () => {
      this.loadUsers();
      console.log(this.state.users)
      this.setState({ open1: true });
    };

    onCloseModal_SignUp = () => {
      this.loadUsers();
      this.setState({ open1: false });
    };

    onOpenModal_SignIn = () => {
      this.loadUsers();
      this.setState({ open2: true });
    };

    onCloseModal_SignIn = () => {
      this.loadUsers();
      this.setState({ open2: false });
    };

    componentDidMount() {
      this.loadUsers();
      this.LoadUserPads();
      this.setState({ initialized: true });
    };

    loadUsers = () => {
      API.getUser()
        .then(res =>
          this.setState({ users: res.data })
        )
        .catch(err => console.log(err));
    };

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
      console.log("Email: ", this.state.email, "Password: ", this.state.password);
      console.log(this.state.users);
    };

    validateForm = () => {
      return this.state.email.length > 0 && this.state.password.length > 0;
    };

    toggleUsernameShow = () => {
      const { usershow } = this.state
      this.setState({ usershow: !usershow })
    }

    logOffonClick = () => {
      this.toggleUsernameShow();
      this.setState({ email: "" });
    }

    render() {
      const { open1 } = this.state;
      const { open2 } = this.state;
      return (
        <div className="App">
          <header className="App-header">
            <h1 > MedTracker</h1 >
          </header >
          {this.state.usershow && <UserLogged email={this.state.email} />}
          {!this.state.usershow && <button>="login_modal_button" onClick = {this.onOpenModal_SignUp} > Sign Up</button >}
        </div>
        /* { !this.state.usershow && <button ="login_modal_button" onClick = { this.onOpenModal_SignIn } > Sign In</button >}
        { this.state.usershow && <button ="login_modal_button" onClick = { this.logOffonClick } > Log off</button >}
        <Modal open={open1} onClose={this.onCloseModal_SignUp} little> */
        <h2>Sign Up</h2>
        <p>Save</p>
        <SignUpContainer onClose={this.onCloseModal_SignUp} LoadUsers={this.LoadUsers} users={this.state.users} />

        <Modal open={open2} onClose={this.onCloseModal_SignIn} little>
          <h2>Sign In</h2>
          <p>Save</p>
          <SignInContainer email={this.state.email} handleChange={this.handleChange} validateForm={this.validateForm} users={this.state.users} onClose={this.onCloseModal_SignIn} password={this.state.password} LoadUsers={this.LoadUsers} toggleUsernameShow={this.toggleUsernameShow} />
        </Modal>
        <SaveBtn users={this.state.users} pads={this.state.pads} email={this.state.email} pads_users={this.state.pads_users} LoadUserPads={this.LoadUserPads()} clickPadButtons={this.clickPadButtons} />

        <div class UserLogged extends Component {
        constructor()}
          super

          render
          return {
    


            <div> userContainer email={this.props.email}></userContainer>


          }



          export default class={App} 
