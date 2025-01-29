<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Create Vue project with Vite</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Create Github repository</template>
    Go to <a href="https://github.com/new">Github</a> and create a new repository. Make sure Public
    is selected if you don't have a premium account. Otherwise, you won't be able to host your app
    using Github Page.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Write test</template>

    To test your components and web pages, check out
    <a href="https://www.vitest.dev/" target="_blank" rel="noopener">Vitest</a> and
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Create workflow</template>
    Go to "Actions Settings", select Read and write permissions and hit Save. Create a new file:
    <code>.github/workflows/deploy.yml</code> and add your deploy script. You will need to :
    <ul>
      <li><code>checkout the repo</code></li>
      <li><code>setup node</code></li>
      <li><code>npm install</code></li>
      <li><code>npm format</code></li>
      <li><code>npm lint</code></li>
      <li><code>npm test</code></li>
      <li><code>npm test:e2e</code></li>
      <li><code>npm run build</code></li>
      <li><code>deploy to Github Page</code></li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Enjoy Github page</template>
    Go to Pages Settings, set Source to gh-pages, and hit Save. Now you just have to push on the
    main branch of your repository and you're good.
  </WelcomeItem>
</template>
