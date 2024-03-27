<script setup>
  const openEmail = (addr)  => {
      parent.location.href = 'mailto:' + addr
  }
</script>

<template>
  <main class="community">
    <h2>Community</h2>
    <p class="sub-title">
      Vearch is development in the open. We welcome more contributors join us.
      Here are some of channels we use to communicate and contribute.
    </p>
    <div class="line"></div>
    <article class="article">
      <p class="mb30">
        <strong class="strong">Mailing list:</strong> <a href="javaScript:" @click="openEmail('vearch-maintainers@groups.io')">vearch-maintainers@groups.io</a> – discussion around Vearch usage, community support and developer discussion.
      </p>
      <p class="mb30">
        <strong class="strong">Slack: </strong><a href="https://vearchwrokspace.slack.com" target="_blank">vearch.slack.com</a>
      </p>
      <p class="mb30">
        <strong class="strong">Twitter: </strong><a href="https://twitter.com/ai_vearch" target="_blank">@ai_vearch</a>
      </p>
      <p class="mb30">
        <strong class="strong">Issue tracker: </strong>Use the  <a href="https://github.com/vearch/vearch/issues/issues" target="_blank">Github issue tracker</a>  to file bugs and features request. If you need support, please send your questions to the  <a  href="javaScript:" @click="openEmail('vearch-maintainers@groups.io')">vearch-maintainers@groups.io</a> mailing list rather than filing a GitHub issue.
      </p>
      <p class="mb30">
        <strong class="strong strong2">Contributing</strong><br>
        We welcome community contributions! If you are planning on making more elaborate or controversial changes, please discuss them on the mailing list or on <a href="https://github.com/vearch/vearch/issues" target="_blank">GitHub</a> before sending a pull request.
      </p>
      <p class="mb30">
        <strong class="strong strong2">Project Governance</strong><br>
        Vearch is an independent open-source project and not controlled by any single company. More details please refer to  <a href="https://github.com/vearch/vearch/issues/blob/master/GOVERNANCE.md" target="_blank">Governance.md</a>.
      </p>
      <p class="mb50">
        <strong class="strong strong2">Code of Conduct</strong><br>
        To make Vearch a welcoming and harassment-free experience for everyone, we follow the <a href="https://github.com/cncf/foundation/blob/master/code-of-conduct.md" target="_blank"> CNCF Code of Conduct</a>.
      </p>
    </article>
  </main>
</template>

<style lang="less" scoped>
.community {
  margin: 0 auto;
  padding: 30px;
  max-width: 800px;
  font-size: 16px;
  color: #292929;

  h2{
    text-align: center;
    font-size: 28px;
    color: #292929;
  }
  .sub-title{
    margin-top: 10px;
    line-height: 30px;
  }
  .article{
    line-height: 30px;
  }
  .line{
    width: 50px;
    height: 3px;
    background: #F16529;
    margin: 10px auto;

    @media (--phone) {
      display: none
    }
  }
  .mb30{
    margin-bottom: 20px;
  }
  .mb50{
    margin-bottom: 35px;
  }
  .strong{
    font-size: 18px;
    font-weight: bold;
  }
  .strong2{
    font-size: 22px;
    line-height: 30px;
  }
  a{
    color: #1C6598;
    text-decoration: underline;
  }
}

</style>