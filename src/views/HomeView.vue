<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>What is Political Compass?</h1>
  <p>
    The underlying theory of the political model used by The Political Compass is that political
    ideology may be better measured along two separate, independent axes. The economic (left–right)
    axis measures one's opinion of how the economy should be run. "Left" is defined as the desire
    for the economy to be run by a cooperative collective agency, which can mean the state but also
    a network of communes, while "right" is defined as the desire for the economy to be left to the
    devices of competing individuals and organizations.
  </p>
  <p>
    The other axis (authoritarian–libertarian) measures one's political opinions in a social sense,
    regarding the amount of personal freedom that one would allow. "Libertarianism" is defined as
    the belief that personal freedom should be maximised, while "authoritarianism" is defined as the
    belief that authority should be obeyed. This makes it possible to divide people into four
    quadrants: authoritarian left (marked by red and placed in the top left), authoritarian right
    (blue in the top right), libertarian right (yellow or purple in the bottom right), and
    libertarian left (green in the bottom left). A full reference to the original political compass
    can be found <a href="https://www.politicalcompass.org/">here.</a>
  </p>
  <div class="flex">
    <img src="../assets/compass.png" alt="Political compass" />
  </div>
  <p>
    <strong>Before taking the test:</strong> Please note that this isn’t a survey, and these aren’t
    questions. They’re propositions. To question the logic of individual ones that irritate you is
    to miss the point. Some propositions are extreme, and some are moderate. That’s how we can show
    you whether you lean towards extremism or moderation on the Compass. Your responses should not
    be overthought. Some of them are intentionally vague. Their purpose is to trigger reactions in
    the mind, measuring feelings and prejudices rather than detailed opinions on policy.
  </p>
  <RouterLink to="quiz" class="btn">Start Test</RouterLink>
</template>

<style scoped>
h1 {
  color: var(--color-main-contrast);
  text-decoration: underline;
  text-decoration-color: var(--color-main);
}
img {
  width: 100%;
  max-width: 450px;
}
.btn {
  margin-top: 2rem;
}
</style>
