<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p>公開日: {{ article.releaseDate }}</p>
    <p v-if="article.eventDate">イベント日: {{ article.eventDate }}</p>
    <ContentDoc :value="article" />
    <NuxtLink to="/">← TOPに戻る</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: article } = await useAsyncData(`news-${route.params.slug}`, () =>
  queryContent("news", route.params.slug).findOne()
);
</script>
