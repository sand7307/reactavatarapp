import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

// const Avatar = (props) => {

class Avatar extends Component{
    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar world!"
        }
    }

    namechange(){
        this.setState({
            name: "Subscribe to this channel.."
        })
    }
    render(){
        const avatarlistarray = [
            {
                id: 1,
                name: "Seema",
                work: "Dotnet Developer"
            },
            {
                id: 2,
                name: "Aboli",
                work: "UI Developer"
            },
            {
                id: 3,
                name: "Aarti",
                work: "Web Developer"
            },
            {
                id: 4,
                name: "Pooja",
                work: "Php Developer"
            }
    
        ]
    
        // map syntax:
        // map(callback(currentvalue, index, array) arg)
        const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        }) 
    
        return (
            <div className="mainpage">
               <h1>{this.state.name}</h1>
               {arrayavatarcard}
               {/* <Avatarlist id={avatarlistarray[0].name} name={avatarlistarray[0].name} work={avatarlistarray[0].work} />
               <Avatarlist id={avatarlistarray[1].name} name={avatarlistarray[1].name} work={avatarlistarray[1].work}/>
               <Avatarlist id={avatarlistarray[2].name} name={avatarlistarray[2].name} work={avatarlistarray[2].work}/>
               <Avatarlist id={avatarlistarray[3].name} name={avatarlistarray[3].name} work={avatarlistarray[3].work}/> */}
               <button onClick={ () => this.namechange()} >Subscribe</button>
            </div>
            )
    }
}
    
     

    
// }
export default Avatar;

// Note for state:
// state is managed within the component.
// state can be changed
// useState Hook - functional Component
// this.state - class components.