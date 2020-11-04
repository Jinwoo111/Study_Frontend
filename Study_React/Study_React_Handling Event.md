# Handling Event
리액트의 함수에서는 주로 camelCase를 이용한다.(중간중간 단어 시작마다 대문자를 삽입)

###### Event hander : 이벤트를 처리하는 함수 = Event Listener

## 1. Bind를 사용한다.
```React
class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn: true};
		
		//This binding is necessary to make 'this' work in the callback
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}
	render() {
		return(
			<button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}
```

## ClassFieldSyntax를 사용한다.
```React
class LoggingButton extends React.Component{
	//This syntax ensures 'this' is bound within handleClick.
	//Warning: this is *experimental* syntax.
	handleClick = () => {
		console.log('this is:', this);
	}
	render() {
		return(
			<button onClick={this.handleClick}>
				Click me
			</button>
		)
	}
}
```

## Arror Function을 사용한다.
```React
class LoggingButton extends React.Component{
	handleClick() {
		console.log('this is:', this);
	}
	
	render(){
		//this syntax ensures `this` is bound within handleClick
		return(
			<button onClick={(e) => this.handleClick(e)}>
				Click me
			</button>
		)
	}
}
```