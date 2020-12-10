import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// functional base (architecture)
const Demo = (props) => {
  return(
    <div className="maindiv_style"> 
      <h1>Hello, I am {props.name}</h1>
      <p>I am a <span className="highlight">UI Developer.</span></p>
      <p>Welcome to my App :)</p>
    </div>
    )
}
// class base (architecture) Component

// class Demo extends Component{
//     render(){
//         return(
//             <div className="maindiv_style"> 
//               <h1>Hello, I am {this.props.name}</h1>
//               <p>I am a <span className="highlight">UI Developer.</span></p>
//               <p>Welcome to my App :)</p>
//             </div>
//             )
//     }
// }
export default Demo;