<script setup>
 import { onMounted } from 'vue';
 
 onMounted(() => {
   console.log('mounted')
 });
 </script>
 
 <template>
    <div class="bg">
      <div class="left"></div>
      <div class="center gradient-background">
        <div class="center_t1">{{ $t('home.title') }}</div>
        <div class="center_t2">{{ $t('home.subTitle') }}</div>
        <div class="center_t3">{{ $t('home.content') }}</div>
        <a class="center_button" href="https://github.com/vearch/vearch" target="_blank">{{$t('home.tryOpen')}}</a>
      </div>
      <div class="right">
        <div class="right_bg"></div>
      </div>
    </div>

    <div class="company">
      <div class="company-title">{{ $t('home.companyTitle') }}</div>
      <div class="company-content">
        <div class="company-flex">
          <img src="@/assets/jd.webp" alt="">
          <img src="@/assets/huawei.webp" alt="">
          <img src="@/assets/keda.webp" alt="">
          <img src="@/assets/renmin.webp" alt="">
          <img src="@/assets/wangyi.webp" alt="">
        </div>
        <div class="company-flex">
          <img src="@/assets/aiqiyi.webp" alt="">
          <img src="@/assets/xiaohongshu.webp" alt="">
          <img src="@/assets/qutoutiao.webp" alt="">
          <img src="@/assets/oppo.webp" alt="">
          <img src="@/assets/qiche.webp" alt="">
        </div>
      </div>
    </div>

    <div class="feature">
      <div class="feature-title">{{ $t('home.feature.title') }}</div>
      <div class="feature-flex">
        <div class="feature-flex-in">
          <img src="@/assets/hybridsearch.webp"/>
          <p class="feature-flex-in-title">{{ $t('home.feature.HybridSearch') }}</p>
          <p>{{ $t('home.feature.HybridSearchC') }}</p>
        </div>
        <div class="feature-flex-in">
          <img src="@/assets/richconfigurations.webp"/>
          <p class="feature-flex-in-title">{{ $t('home.feature.RichFilteringConfigurations') }}</p>
          <p>{{ $t('home.feature.RichFilteringConfigurationsC') }}</p>
        </div>
        <div class="feature-flex-in">
          <img src="@/assets/highlyscalable.webp"/>
          <p class="feature-flex-in-title">{{ $t('home.feature.HighlyScalable') }}</p>
          <p>{{ $t('home.feature.HighlyScalableC') }}</p>
        </div>
        <div class="feature-flex-in">
          <img src="@/assets/highlyavailable.webp"/>
          <p class="feature-flex-in-title">{{ $t('home.feature.RobustAndHighlyAvailable') }}</p>
          <p>{{ $t('home.feature.RobustAndHighlyAvailableC') }}</p>
        </div>
      </div>
    </div>
 </template>
 
<style lang="less" scoped>
  @media (max-width: 800px) {
    .bg{
      margin-top: -100px;
    }
    .center{
      padding-top: 100px;
    }
  }
  .bg{
    display: flex;
    background: #000;
    z-index: 1;
    margin-top: -60px;
  }
  .center{
    padding-top: 60px;
    padding-bottom: 60px;
    flex:3;
    text-align: center;
    background: url('@/assets/bgcenter.webp') no-repeat center top/90% 90%;
    animation: slideCenter 2s ease; 
    .center_t1 {
      margin-top: 50px;
      border-image: linear-gradient(121.37deg, rgba(176,130,0,1) 0%,rgba(246,184,67,1) 56.6215034965035%,rgba(195,249,24,1) 100%) 0.3 0.3;
      font-size: clamp(24px, 5vw, 52px);
      line-height: 1.4;
      font-weight: bold;
      color: rgba(255,255,255,1);
    }
    .center_t2 {
      font-size: clamp(20px, 2.5vw, 46px);
      line-height: 1.4;
      font-weight: bold;
      color: transparent;
      background: linear-gradient(94.25deg, rgba(255,83,10,1) 0%,rgba(230,242,35,1) 99.6722027972028%,rgba(230,242,34,1) 100%);
      background-clip: text;
    }
    .center_t3{
      font-size: clamp(12px, 2vw, 22px);
      line-height: 1.5;
      font-weight: 200;
      max-width: 480px;
      margin: 20px auto 0;
      text-align: center;
      color:#fff;
    }
    .center_button{
      display: inline-block;
      padding: 10px 40px;  
      font-size: 16px;
      text-align: center;
      background: linear-gradient(94.25deg, rgba(255,83,10,1) 0%,rgba(230,242,35,1) 100%,rgba(230,242,34,1) 100%);
      border-radius: 33px;
      text-decoration: none;
      transition: background-image 0.3s ease;
      margin-top: 20px;
    }
    .center_button:hover{
      color: #000; 
      background: linear-gradient(94.25deg, rgba(255,83,10,0.9) 0%,rgba(230,242,35,0.9) 100%,rgba(230,242,34,0.9) 100%);
      
    }
    .center_button:active,.center_button:visited{
      color:#000
    }

  }
  @keyframes slideCenter {
    0% {
      background-size: 180% 180%;
      background-position: center center;
    }
    100% {
      background-size: 90% 90%;
      background-position: center top;
    }
  }
  .left{
    flex:1;
    background: url('@/assets/bgleft.webp') no-repeat 50% bottom/80% auto;
    transform-origin: 0% 0%; 
    transform: translate(-50px);
    animation: transformLeft 2s ease-in-out both;
  }
  @keyframes transformLeft {
    0% {
      transform:translate(-100px);
    }
    100% {
      transform:translate(-50px);
    }
  }
  .right{
    flex:1;
    background: url('@/assets/bgright.webp') no-repeat right bottom/100% auto;
    transform-origin: 100% 100%; 
    transform: scale(0.8);
    animation: transformRight 2s ease-in-out both;
  }
  @keyframes transformRight {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.8);
    }
  }
  .company{
    .company-title{
      max-width: 500px;
      text-align: center;
      margin: 50px auto;
      font-size: clamp(22px , 3vw , 28px);
      line-height: 1.5;
      color: rgba(0,0,0,1);
    }
    .company-flex{
      display: flex;
      justify-content: space-around;
      
      margin: 50px auto;
      img{
        max-width: clamp(50px,20vw,200px); /* 限制图片的最大宽度 */
        height: auto; /* 保持图片的原始纵横比 */
        flex: 1 0 auto; /* 允许图片在必要时缩小； 防止图片放大 */
      }
    }
  }
  .feature{
    .feature-title{
      max-width: 600px;
      text-align: center;
      margin: 100px auto;
      font-size: clamp(22px , 3vw , 28px);
      line-height: 1.5;
      color: rgba(0,0,0,1);
    }
    .feature-flex{
      display: flex;
      justify-content: space-around;
      margin: 100px auto;
    }
    .feature-flex-in{
      flex: 1;
      text-align: center;
      img{
        display: inline-block;
      }
      p{
        font-size: 14px;
        max-width: 260px;
        margin: 10px auto;
      }
      .feature-flex-in-title{
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
 </style>
 