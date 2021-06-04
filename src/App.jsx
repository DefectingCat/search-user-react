import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.css';
import ax from './network/axios.js';
import List from './components/List/List';
import debounce from './util/debounce';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 搜索到的用户
      users: [],
      // 输入的信息
      inputMsg: '',
    };
    // 节流
    this.de_search = debounce(this.toSearch(), 250);
  }

  // 获取 Input 组件输入并更新状态
  getInput() {
    return (e) => {
      const value = e.target.value;
      this.setState({
        inputMsg: value,
      });
      // 输入时延迟搜索
      if (value) this.de_search();
    };
  }

  // 搜索用户
  toSearch() {
    return async () => {
      const { items: res } = await ax.get('', {
        params: {
          q: `${this.state.inputMsg}`,
        },
      });
      this.setState({
        users: res,
      });
    };
  }

  render() {
    return (
      <div className="app__body">
        <Search
          getInput={this.getInput()}
          toSearch={this.toSearch()}
          className="search__body"
        />
        <List users={this.state.users} />
      </div>
    );
  }
}

export default App;
