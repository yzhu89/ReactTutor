import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';
import './style.css';


class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.handleLogin = this.handleLogin.bind(this);
      this.handleSignOut = this.handleSignOut.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = { count: 0 , newName: 'Yang', isLogin: false, userName: '' };
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log(props.myName);

      this.student1 = {
        name: 'Bill Gates',
        major: 'Computer Science',
      };

      this.student2 = {
          name: 'Steve Jobs',
          major: 'Computer Science',
      };

      this.student3 = {
          name: 'Elon Musk',
          major: 'Computer Science',
      };
      

      const students = (
          <ul>
              <li>student('Bill Gates', 'Computer Science')</li>
              <li>student('Steve Jobs', 'Computer Science')</li>
              <li>student('Elon Musk', 'Computer Science')</li>
          </ul>
      )
  }

  handleSubmit() {
    console.log(this.state.count);
      console.log(this.state.myName);
    this.setState(state => ({
      count: state.count + 1,
      newName: 'Bang',
        myName: 'Angel'
    }));

    console.log(this.myName);
      this.myName = 'Yawei';
  }

  handleLogin(){
      this.setState({
          isLogin: true
      })
  }

    handleSignOut(){
        this.setState(state =>({
            isLogin: false
        }));
    }

    handleChange(event) {
        this.setState({userName: event.target.value});
    }

    render() {
      return (
       <div>
         <div>
         This is my newName: {this.state.newName}
         </div>
         <div>
         This is my reduxName: {this.props.simpleReducer.reduxName}
         </div>
         <div>
           This is a counter: {this.state.count}
         </div>

         <div>
          <button onClick={this.handleSubmit}> Plus </button>
         </div>

         <div>
          <button className={'btn-primary'} onClick={this.props.simpleAction}> Redux </button>
         </div>
           <hr></hr>
           <h className="border">This is a StudentList</h>
           <div> </div>
           <div className="divStyle">
               <div><span className="spanStyle">Student Name: </span> <span> { this.student1.name }</span></div>

               <div><span className="spanStyle">Student Major: </span> <span>{ this.student1.major }</span></div>
           </div>
           <div className="divStyle">
               <div><span className="spanStyle">Student Name: </span> <span> { this.student2.name }</span></div>

               <div><span className="spanStyle">Student Major: </span> <span>{ this.student2.major }</span></div>
           </div>
           <div className="divStyle">
               <div><span className="spanStyle">Student Name: </span> <span> { this.student3.name }</span></div>

               <div><span className="spanStyle">Student Major: </span> <span>{ this.student3.major }</span></div>
           </div>
           <hr></hr>
           <h className = "border">This is a input Box</h>
           <div>
               <span>User Name: </span>
               <input type="text" value={this.state.userName} onChange={this.handleChange}></input>
            </div>

           <div>
               <span>Password: </span>
               <input type="password"></input>
           </div>

           <div>
               <br/>
               <button variant="outline-secondary" onClick={this.handleLogin}> Login </button>
               <button variant="outline-secondary" onClick={this.handleSignOut}> Sign Out </button>
           </div>

           {this.state.isLogin &&
               <div className="informBoxBoarder">You Loggedin as {this.state.userName}</div>
           }



       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
