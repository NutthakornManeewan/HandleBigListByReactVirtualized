import React, { Component } from "react";
import loremIpsum from "lorem-ipsum";
import { List } from "react-virtualized";
import "./App.css";

const rowCount = 5000;
const listHeight = 600,
  rowHeight = 50,
  rowWidth = 800;
const BNK48Members = [
  "Cherprang",
  "Pun",
  "Jennis",
  "Music",
  "Kaimook",
  "Orn",
  "Mobile",
  "New",
  "Aom",
  "Tarwaan",
  "Jane",
  "Noey",
  "Pupe"
];

class App extends Component {
  constructor() {
    super();
    this.list = Array(rowCount)
      .fill()
      .map((val, idx) => {
        return {
          id: idx,
          name: BNK48Members[idx % BNK48Members.length],
          image: "http://via.placeholder.com/40",
          text: loremIpsum({
            count: 1,
            units: "sentences",
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
          })
        };
      });
  }

  // renderRow = item => {
  //   return (
  //     <div key={item.id} className="row">
  //       <div className="image">
  //         <img src={item.image} alt="" />
  //       </div>
  //       <div className="content">
  //         <div>
  //           <strong>{item.name}.BNK48Official</strong>
  //         </div>
  //         <div>{item.text}</div>
  //       </div>
  //     </div>
  //   );
  // };

  renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>
            <strong>{this.list[index].name}</strong>
          </div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {/* <div className="list">{this.list.map(this.renderRow)}</div> */}
        <h2>React - Virtualized Table</h2>
        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length}
          />
        </div>
      </div>
    );
  }
}

export default App;
