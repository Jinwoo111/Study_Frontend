# Conditional Rendering
conditoin : 조건			conditional Rendering : 조건에 따른 렌더링

######  ex) True이면 값을 보여주고, False라면 값을 가린다.

``` React
function UserGreeting(props){
	return <h1>Welcome back!</h1>; // 사용자
}

function GuestGreeting(props){
	return <h1>Please sign up.</h1> // 게스트
}

function Greeting(props){
	const isLoggedIn = props.isLoggeIn;
	if(isLoggedIn){
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

ReactDOM.render(
	<Greeting isLoggedIn={false} />,
	document.getElementById('root')
)
```

## Element Variable
``` React
function LoginButton(props){
	return (
		<button onClick={props.onClick}>
		Login</button>
	);
}

function LogoutButton(props){
	return (
		<button onClick={props.onClick}>
		Logout</button>
	);
}

handleLoginClick(){
	this.setState({isLoggedIn: true});
// isLoggedIn을 true로 바꿔 로그아웃 버튼이 보이도록 함
}
handleLoginClick(){
	this.setState({isLoggedIn : false});
// isLoggedIn을 false로 바꿔 로그인 버튼이 보이도록 함
}

render() {
	const isLoggedIn = this.state.isLoggedIn;
	let button;
	
	if(isLoggedIn){
		button = <LoggoutButton onClick={this.handleLogoutClick} />;
	} else{
		button = <LoginButton onClick={this.handleLoginClick} />;
	}
	
	return(
		<div>
			<Greeting isLoggedIn={isLoggedIn} />
			<button>
		</div>
	)
}
```

## Inline Condition
조건을 코드 안에 집어넣는 것
if 문의 경우 && 연산자를 사용

###### ex) true && expression -> expression, false && expression -> false

``` React
function Mailbox(props){
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
			<h2>
				You have {unreadMessages.length} unread messages.
			</h2>//Inline Condition
			}
		</div>
	);
}

const messages = ['React', 'Re : React', 'Re:Re: React'];
ReactDOM.render(
	<Mailbox unreadMessages={message} />,
	document.getElementById('root')
);
```
if else문의 경우 ? 연산자를 사용한다.

###### ex) condition ? true : false
``` React
render(){
	const isLoggedIn = this.state.isLoggedIn;
	return(
		<div>
			The user is <b> {isLoggedIn ? 'currently' : 'not'} </b> logged in.
		</div>
	);
}
```

``` React
render() {
	const isLoggedIn = this.state.isLoggedIn;
	return (
		<div>
			{isLoggedIn > (
				<LogoutButton onClick={this.state.HandleLogoutClick} />
			) : (
				<LoginButton onClick={this.state.HandleLoginClick} />
			)}
		</div>
	);
}
```

**NULL을 리턴하면 컴포넌트가 렌더링되지 않는다.**