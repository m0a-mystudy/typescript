import * as React from 'react';
import './App.css';
import LazyLoad from 'react-lazyload';

// function uniqueId() {
//   return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
// }

interface State {
  arr: Array<string>;
}

class Normal extends React.Component<{}, State> {
  constructor() {
    super();
    let arr: string[] = [];
    for (let i = 0; i < 200; i++) {
      arr.push(`${i}`);
    }
    this.state = { arr };
    // console.log(this.state.arr);
  }



  render() {
    return (
      <div>

        {this.state.arr.map((el, index) => {
          return (
                    <LazyLoad once={true} key={index} height={200} offset={50}>

            <p id={`${index}`}  >
              count={index + 1}
            </p>
                    </LazyLoad>

          );
        })}
      </div>
    );
  }
}
class App extends React.Component<{}, null> {
  render() {
    return (

      <Normal />
    );
  }
}

export default App;
