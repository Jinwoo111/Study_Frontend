# state(상태)
React state는 React component의 데이터를 나타낸다.
component에 대한 변경 가능한 데이터를 나타낸다.
**state는 사용자가 정의한다.**

state는 JS의 객체이다. 직접 수정 할 수 없다.

```react
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            liked: false
        };
    }
}
```

state는 steState를 사용해서만 수정가능하다.

# Lifecycle
직역하면 생명주기, 컴퓨터 또한 생명주기가 존재함 
**(component Lifecycle)** : React component의 생명주기
###### 출생
Mounting : constructor -> render -> React update DOM and refs -> componentDidMount
###### 인생
Updating : render -> React updates DOM and refs -> componentDidUpdate
###### 사망
Unmounting : componentWillUnmount