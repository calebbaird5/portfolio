<template>
  <div class="resume">
    <VuePdfEmbed source="/portfolio/img/Caleb Baird Resume.pdf" />
    <v-btn
      icon="mdi-download"
      @click="() => downloadFile('/portfolio/img/Caleb Baird Resume.pdf', 'resume')"
      />
  </div>
</template>

<script lang="ts" setup="setup">
  import VuePdfEmbed from 'vue-pdf-embed'

function downloadFile(fileName, text) {
  // Create a new Blob object with the text
  const blob = new Blob([text], { type: 'text/plain' });
  // Create an anchor element with the blob as the href
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  // Trigger the download by clicking the link
  link.click();
}
</script>

<style lang="scss" scoped>
.resume {
  position: relative;

  .v-btn {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>
