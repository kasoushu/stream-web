
<template>
      <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header  class="header" :style="{  zIndex: 1, width: '100%',backgroundColor:'#fff' }" >

          <div class="ic"  >
            <a-icon  type="unordered-list" />
          </div>
          <div id="search_bar">
            <a-input-search id="search_input" size="large" placeholder="input search loading with enterButton"   />
          </div>


          <div id="rightccc">
            <a title="通知">
              <a-icon type="mail" />
            </a>
            <span>
                <a-avatar size="large" icon="user" />
            </span>
          </div>
        </a-layout-header>
        <a-layout>


          <div  id="sider">
            <a-layout-sider
              width="200" style="background: #fff"
          >
            <a-menu theme="light" mode="inline" :default-selected-keys="['4']">
              <a-menu-item class="menu-item" key="1">
                <a-icon type="home" />
                <span class="nav-text" >首页</span>
              </a-menu-item>
              <a-menu-item class="menu-item" key="2">
                <a-icon type="video-camera" />
                <span class="nav-text">订阅内容</span>
              </a-menu-item>
              <a-divider type="horizontal" />
              <a-menu-item class="menu-item" key="3">
                <a-icon type="upload" />
                <span class="nav-text">历史记录</span>
              </a-menu-item>
              <a-menu-item class="menu-item" key="4">
                <a-icon type="bar-chart" />
                <span class="nav-text">稍后观看</span>
              </a-menu-item>
              <a-menu-item class="menu-item" key="5">
                <a-icon type="cloud-o" />
                <span class="nav-text">顶过的视频</span>
              </a-menu-item>
              <a-divider type="horizontal" />
              <a-menu-item class="menu-item" key="6">
                <a-icon type="appstore-o" />
                <span class="nav-text">订阅内容</span>
              </a-menu-item>
              <a-menu-item class="menu-item" key="7">
                <a-icon type="team" />
                <span class="nav-text">更多内容</span>
              </a-menu-item>
            </a-menu>
            </a-layout-sider>


          </div>


          <a-layout  id="content" style="padding: 0 24px 24px">
            <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item>List</a-breadcrumb-item>
              <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content
                :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
            >
              <p v-for="i in 50">{{i}}</p>
            </a-layout-content>
          </a-layout>
        </a-layout>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>

    </template>

    <script>
      export default {
        data() {
          return {
            collapsed: false,
          };
        },
      };
    </script>


    <style>
    #content{
      position: relative;
      left: 200px;
    }
    #sider{
      position: fixed;
      height: 100%;
      margin-top: 10px;
      background-color: #fff;
    }
    .ic:hover{
      cursor: pointer;
      background-color: bisque;
    }
    .ic{
      width: 5%;
    }
    .header{
      position: sticky;
      top: 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    #search_bar{
      width: 50%;
    }

    #search_bar span{
      display: inline-block;
      padding-top: 10px;
    }
    #profile{
      display: inline-block;
      width:32px;
      height:32px;
      border-radius: 50%;
      background-color: #2c3e50;
    }
    #rightccc{
      width: 10%;
      display: flex;
      /*text-align: right;*/
      justify-content: space-around;
    }
    </style>

