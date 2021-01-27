<div align="center">
  <img src="https://raw.githubusercontent.com/LuckDraw/lucky-canvas/master/web.svg" width="200" alt="logo" />
  <h1>react-luck-draw 抽奖插件</h1>
  <p>一个基于 react 的 ( 大转盘 / 九宫格 ) 抽奖插件</p>
  <p>
    <a href="https://github.com/LuckDraw/react-luck-draw/stargazers" target="_black">
      <img src="https://img.shields.io/github/stars/buuing/react-luck-draw?color=%23ffca28&logo=github&style=flat-square" alt="stars" />
    </a>
    <a href="https://github.com/LuckDraw/react-luck-draw/network/members" target="_black">
      <img src="https://img.shields.io/github/forks/buuing/react-luck-draw?color=%23ffca28&logo=github&style=flat-square" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/react-luck-draw" target="_black">
      <img src="https://img.shields.io/github/package-json/v/LuckDraw/react-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/react-luck-draw" target="_black">
      <img src="https://img.shields.io/npm/dm/react-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="downloads" />
    </a>
  </p>
  <p>
    <a href="https://github.com/buuing" target="_black">
      <img src="https://img.shields.io/badge/Author-%20buuing%20-7289da.svg?&logo=github&style=flat-square" alt="author" />
    </a>
    <a href="https://github.com/LuckDraw/react-luck-draw/blob/master/LICENSE" target="_black">
      <img src="https://img.shields.io/github/license/LuckDraw/react-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="license" />
    </a>
  </p>
</div>

<br />

## 官方文档 & Demo演示

> **中文**：[https://100px.net/document/react.html](https://100px.net/document/react.html)  

> **English**：**If anyone can help translate the document, please contact me** `ldq404@qq.com`

<br />

## 在 react 中使用

1. 首先安装插件

```shell
# npm 安装：
npm install react-luck-draw

# yarn 安装：
yarn add react-luck-draw
```

2. 然后找到 `main.js` 引入插件并使用

```js
import { LuckyWheel, LuckyGrid } from 'react-luck-draw'

export default function Test () {
  return <div>

    // 大转盘抽奖
    <LuckyWheel width="300px" height="300px" ...你的配置></LuckyWheel>

    // 九宫格抽奖
    <LuckyGrid width="300px" height="300px" ...你的配置></LuckyGrid>

  </div>
}
```

3. 最后我提供一个 react 的抽奖 demo 供你参考, 具体参数配置请看文档

```jsx
import React from 'react'
import { LuckyWheel } from 'react-luck-draw'

export default class App extends React.Component {
  constructor () {
    super()
    this.myLucky = React.createRef()
    this.state = {
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      prizes: [
        { title: '1元红包', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
        { title: '100元红包', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
        { title: '0.5元红包', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
        { title: '2元红包', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
        { title: '10元红包', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
        { title: '50元红包', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] },
      ],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          fonts: [{ text: '开始\n抽奖', fontSize: '18px', top: -18 }]
        }
      ],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
    }
  }
  render () {
    return <LuckyWheel
      ref={this.myLucky}
      width="300px"
      height="300px"
      blocks={this.state.blocks}
      prizes={this.state.prizes}
      buttons={this.state.buttons}
      defaultStyle={this.state.defaultStyle}
      onStart={() => { // 点击抽奖按钮会触发star回调
        // 调用抽奖组件的play方法开始游戏
        this.myLucky.current.play()
        // 模拟调用接口异步抽奖
        setTimeout(() => {
          // 假设拿到后端返回的中奖索引
          const index = Math.random() * 6 >> 0
          // 调用stop停止旋转并传递中奖索引
          this.myLucky.current.stop(index)
        }, 2500)
      }}
      onEnd={prize => { // 抽奖结束会触发end回调
        console.log(prize)
        alert('恭喜获得大奖:' + prize.title)
      }}
    ></LuckyWheel>
  }
}
```

<br />
