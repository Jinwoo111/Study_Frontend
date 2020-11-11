# Lists and Keys

### Lists

###### 배열 : Javascript의 변수나 객체들을 하나의 변수로 묶어놓은 것
React에서는 Array를 사용하여 다수의 Element를 렌더링 할 수 있다.

```React
const numbers = [1, 2, 3, 4, 5];
const listItems = number.map((number) =>
	<li>{number}</li>
);

ReactDOM.render(
	<ul>{listItems}</ul>,
	document.getElementById('root')
);
```

###### 별도의 컴포넌트로 만들기
```React
function NumberList(props){
	const numbers = props.number;
	const listItems = numbers.map((number) =>
		<li>{number}</li>
	);
	return (
		<ul>{listItems}</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);
```

### Keys
###### 아이템들을 구분하기 위한 고유한 문자열

Key의 값은 해당 Elements 사이에서만 고유한 값이면 된다.