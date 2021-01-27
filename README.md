# 基于 react 的抽奖插件

## 方式 1：通过 import 引入

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
