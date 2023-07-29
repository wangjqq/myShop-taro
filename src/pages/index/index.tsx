import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro'
import HomePage from '../../view/Home'
import CategoryPage from '../../view/Category'
import FindPage from '../../view/Find'
import CartPage from '../../view/Cart'
import MyPage from '../../view/My'
import './index.less'
import { TABBAR_LIST } from './data'

const Index: React.FC = () => {
  const [nowTab, setNowTab] = useState(TABBAR_LIST.HomePage) //当前的tab

  const nowComponent = () => {
    switch (nowTab) {
      case TABBAR_LIST.HomePage:
        return <HomePage></HomePage>
      case TABBAR_LIST.CategoryPage:
        return <CategoryPage></CategoryPage>
      case TABBAR_LIST.FindPage:
        return <FindPage></FindPage>
      case TABBAR_LIST.CartPage:
        return <CartPage></CartPage>
      case TABBAR_LIST.MyPage:
        return <MyPage></MyPage>

      default:
        return <HomePage></HomePage>
    }
  }
  return (
    <View>
      {nowComponent()}
      <Tabbar activeColor="#fa292a" inactiveColor="#5a7670" fixed onSwitch={(index) => setNowTab(index)}>
        <Tabbar.Item title="首页" icon={<Home width={18} height={18} />} />
        <Tabbar.Item title="分类" icon={<Category width={18} height={18} />} />
        <Tabbar.Item title="发现" icon={<Find width={18} height={18} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={18} height={18} />} />
        <Tabbar.Item title="我的" icon={<My width={18} height={18} />} />
      </Tabbar>
    </View>
  )
}

export default Index
