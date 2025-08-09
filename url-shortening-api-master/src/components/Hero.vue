<template>
    <section class="hero">
        <div class="hero__content">
            <h1 class="hero__title">
                {{ title }}
            </h1>
            <p class="hero__text">
                Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <a href="#" class="btn hero__getstarted">
                Get Started
            </a>
        </div>
        <div class="hero__illustration">
            <img src="../assets/illustration-working.svg" alt="Illustration working">
        </div>
    </section>
</template>

<style lang="scss">
.hero {
    display: flex;
    text-align: left;
    position: relative;
    margin-bottom: 120px;
    overflow: hidden;

    @media screen and (max-width: 400px) {
        flex-direction: column-reverse;
        text-align: center;
    }

    &__content {
        width: 55%;
        padding: 70px 0px;

        @media screen and (max-width: 400px) {
            padding: unset;
            width: 100%;
        }
    }

    &__illustration {
        position: absolute;
        left: 57.66%;

        @media screen and (max-width: 400px) {
            position: unset;

            & img {
                height: 340px;
            }
        }
    }

    &__title {
        color: $color-neutral-verydarkviolet;
        font-size: 4.5rem;
        letter-spacing: -2.5px;
        line-height: 5rem;

        @media screen and (max-width: 400px) {
            font-size: 2.7rem;
            line-height: 3.5rem;
        }
    }

    &__text {
        font-size: 1.24rem;
        line-height: 2rem;
    }

    &__getstarted {
        margin: 35px 0;
    }
}
</style>

<script setup>

defineProps({
    title: String
})

</script>