<template>
    <div class="statcard">
        <div class="statcard__icon">
            <img :src="getImagePath(icon)" :alt="title + ' icon'">
        </div>
        <h3 class="statcard__title">{{ title }}</h3>
        <div class="statcard__content">{{ content }}</div>
    </div>
</template>

<script setup>

defineProps({
    icon: String,
    title: String,
    content: String
})

// function to handle url of Static icons
function getImagePath(icon) {
    return new URL(`../assets/${icon}`, import.meta.url).href;
}

</script>

<style lang="scss" scoped>
.statcard {
    flex: 1;
    background: $color-primary-bg;
    position: relative;
    padding: 60px 30px;
    border-radius: 5px;
    text-align: left;
    display: flex;
    flex-direction: column;
    z-index: 20;

    @media screen and (max-width: 400px) {
        text-align: center;
    }

    &:nth-child(1) {
        align-self: flex-start;
    }

    &:nth-child(2) {
        align-self: center;
    }

    &:nth-child(3) {
        margin-top: 80px;

        @media screen and (max-width: 400px) {
            margin-top: unset;
        }
    }

    &__icon {
        border-radius: 50%;
        height: 80px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $color-primary-darkviolet;
        position: absolute;
        left: 20px;
        transform: translateY(-100px);

        @media screen and (max-width: 400px) {
            left: 50%;
            transform: translateY(-100px) translateX(-50%);
        }
    }

    &__title {
        margin-top: 20px;
        color: $color-neutral-verydarkviolet;
        font-size: 1.2em;
    }

    &__content {
        margin-top: 10px;
        font-size: 0.83em;
    }
}
</style>