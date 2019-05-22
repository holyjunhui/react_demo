import React, {Component}from 'react';
import Counter from './component/Counter.js'
import counter from './reducers/index.js'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

const store = createStore(counter)

const messages = ['React','re:react',]
function Mailbox(props){
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>hello</h1>
      {unreadMessages.length > 0 &&
        <h2>
          your have {unreadMessages.length} unread unreadMessages
        </h2>
      } 
    </div>
  )
}

function UserGreeting(props){
  return <h1>welcome back</h1>
}
function GuestGreeting(props){
  return <h1>please sign up</h1>
}

const numbers = [2,3,4,21]
function Numbers(props){

  const numbers = props.numbers
const listItems = numbers.map((number)=>
  <li key = {number.toString()}>{number}</li>
)
return (
      <ul>{listItems}</ul>
)
}


function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />
  }
  return <GuestGreeting/>
}

function LoginButton(props){
  return (
    <button onClick = {props.onClick}>
      login
    </button>
  )
}

function LoginOutButton(props){
  return (
    <button onClick = {props.onClick}>
      LoginOutButton
    </button>
  )
}

class LoginControl extends Component{
  constructor(props){
    super(props)
    console.log("props",props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLoginOutClick = this.handleLoginOutClick.bind(this)
    this.state = {isLoggedIn:false}
  }
  handleLoginClick(){
    this.setState({
      isLoggedIn:true
    })
  }
  handleLoginOutClick(){
    this.setState({
      isLoggedIn:false
    })
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LoginOutButton onClick = {this.handleLoginOutClick}> </LoginOutButton>
    }else{
      button = <LoginButton onClick = {this.handleLoginClick}></LoginButton>
    }

    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn}>
        
        </Greeting>
        {button}
      </div>
    )
  }
}
class NameForm extends Component{
  constructor(props){
    super(props)
    this.state = {value:'',name:''}
    this.handleSubmit = this.handleSubmit.bind(this)  
    this.handleChange = this.handleChange.bind(this)
  }
handleSubmit(event){
console.log("提交的名字",this.state.value)

event.preventDefault();
}
handleChange(event){
  this.setState({
    value:event.target.value
  })
}
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        {this.state.value}
        <label>
          名字：
          <input type="text" value = {this.state.value} onChange = {this.handleChange}/>

        </label>
        <input type="submit" value = "提交"/>
      </form>
    )
  }
}
function BoilingVerdict(props){
  if(props.celsius>100){
    return <p>The water would boil</p>

  }
  return <p>The water would bot boil</p>
}
const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32)*5 /9;
}
function toFahrenheit(celsius){
  return (celsius * 9 /5) +32
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature)
  if(Number.isNaN(input)){
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output*1000)/1000
  return rounded.toString()
}
class TemperatureInput extends Component {
  constructor(props){
    super(props)
    this.state  = {
      temperature:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    // this.setState({
    //   temperature:e.target.value
    // })
    this.props.onTemperatureChange(e.target.value)
  }
  render(){
    // const temperature = this.state.temperature
    const temperature = this.props.temperature;
    const scale = this.props.scale
    // console.log("scale",sca)
    return(
      <fieldset>
        <legend> Enter temperature in {scaleNames[scale]}</legend>
        <input value = {temperature}
        onChange = {this.handleChange}
        />

        <BoilingVerdict celsius = {parseFloat(temperature)}></BoilingVerdict>
      </fieldset>
    )
  }
}

function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function WelcomeDialog(){
  
  return(
    <FancyBorder color="blue">
      <h1 className = "dialog-title">
        welcome
      </h1>
      <p className = "Dialog -message">
        thankdy your forj visiting 
      </p>
    </FancyBorder>
  )
}
class Calculator extends Component{
  constructor(props){
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange  = this.handleFahrenheitChange.bind(this)
    this.state = {
      temperature:'',
      scale:'c'
    }
  }
  handleCelsiusChange(temperature){
    this.setState({
      scale:'c',
      temperature
    })
  }
  handleFahrenheitChange(temperature){
    this.setState({
      scale:'f',
      temperature
    })
  }
  render(){
    const scale = this.state.scale
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale = "c"
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}
        ></TemperatureInput>
        <TemperatureInput scale = "f"
          temperature = {fahrenheit}
          onTemperatureChange = {this.handleFahrenheitChange}
        ></TemperatureInput>

        <BoilingVerdict celsius = {parseFloat(celsius)}></BoilingVerdict>
      </div>
    )
  }
}
class Reservation extends  Component{
  constructor(props){
    super(props)
    this.state = {
      isGoing:true,
      numberOfGuests:3
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <form>
        <label>
          参与：
          <input 
            name = "isGoing"
            type="checkbox"
            checked = {this.state.isGoing}
            onChange = {this.handleInputChange}/>
        </label>


        <br/>

        <label>
          来宾人数:
          <input type="number"
            name = "numberOfGuests"
            value = {this.state.numberOfGuests}
            onChange = {this.handleInputChange}/>
        </label>
      </form>
    )
  }
}

class Clock extends Component {
  constructor(props){
    super(props)
    this.sortIndex = 0;
    this.state = {
      date:new Date(),
      isToggleOn: true
    }
    this.tick = this.tick.bind(this)
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(id,e){
    console.log("log this",this)
    console.log("log this id",id)
    console.log("log thiseeeee",e)
    this.setState(state =>({
      isToggleOn:!state.isToggleOn
    }))
  }
  tick(){
    this.setState({
      date:new Date()
   })
  }
  componentDidMount(){
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timeId)
  }
  render(){
    const pro = {fistName:'ben'}
    return (
      <div>
        <h1>hello,world</h1>
        <h2>It si {this.state.date.toString()}</h2>
      <button onClick = {this.handleClick.bind(this,55)}>
        {this.state.isToggleOn ? 'On': 'OFF'}
      </button>
      
      <LoginControl {...pro}/>

      <Mailbox unreadMessages = {messages}></Mailbox>
      <Numbers numbers = {numbers}></Numbers>
      <NameForm></NameForm>
      <Reservation></Reservation>
      <Calculator></Calculator>
      <WelcomeDialog />
      </div>
    );
  }
}

const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

class Modal extends Component{
  constructor(props){
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount(){
    modalRoot.appendChild(this.el);
  }

  componentWillMount(){
    modalRoot.removeChild(this.el)
  }
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }


}


class Parent extends Component{
  constructor(props){
    super(props)
    this.state = {clicks:0}
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(){
    this.setState(state =>({
      clicks:state.clicks + 1
    }))
  }
  render(){
    return(
      <div onClick={this.handleClick}>  
        <p>Number of Clicks: {this.state.clicks}</p>
        <p>
          open up
        </p>
      <Modal>
        <child/>
      </Modal>
      </div>
    )
  }


}


function Child(){
  return(
    <div className="modal">
      <button>click</button>
    </div>
  )
}



function App(){
  // render(){
    console.log("sotre,",store.getState())
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <Clock/>
      </header> */}
      <Counter
        value = {store.getState()}
        onIncrement={()=>store.dispatch({type:'INCREMENT'})}
        onDecrement = {()=>store.dispatch({type:'DECREMENT'})}
      />
      {/* <Parent></Parent> */}
    </div>
  );
    }
  
  // }
  
  store.subscribe(App)


export default App;
