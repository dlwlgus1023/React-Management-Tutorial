import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers =[{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이지현',
  'birthday' : '970420',
  'gender' : '남',
  'job' : '프로그래머',
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '920420',
  'gender' : '남',
  'job' : '프로게이',
}
,{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이재천',
  'birthday' : '951218',
  'gender' : '남',
  'job' : '게이',
}

]


class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              job={c.job}
            />
            );
        })
      }
    </div>
    );
  }
}

export default App;
