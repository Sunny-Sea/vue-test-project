// 入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "@/utils/showMessage";

Vue.prototype.$showMessage = showMessage;
import "./mock";
import "./api/banner";


new Vue ( {
              router,
              render: ( h ) => h ( App )
          } ).$mount ( "#app" );
