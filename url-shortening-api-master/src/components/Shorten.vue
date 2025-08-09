<template>
    <section class="shorten">
        <form @submit.prevent="fetchAPI" action="" method="post" class="shorten__form">
            <input v-model="url" type="url" class="shorten__input" name="url" id="url"
                placeholder="Shorten a link here..." />
            <input type="submit" class="btn shorten__input shorten__input--submit" value="Shorten It!" />
        </form>
        <ul class="shorten__links">
            <li v-for="result in results" :key="result.code" class="link">
                <span class="link__original">{{ result.original_link }}</span> <span class="link__shorten">{{
                        result.full_short_link
                }}</span> <span class="btn">Copy</span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const url = ref()

let results = ref([]);

// function to get the short url from the API and append the result to the list
async function fetchAPI() {
    let fetchURL = new URL("https://api.shrtco.de/v2/shorten")
    fetchURL.searchParams.set('url', url.value);
    fetch(fetchURL.href).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
        })
        .then((data) => {
            results.value.push(data.result);
            url.value = ""
        })
        .catch(error => {
            console.log(error)
        });
    
}

</script>

<style lang="scss">
.shorten {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    background: $color-neutral-bg;
    padding-bottom: 100px;

    &__form {
        transform: translateY(-50%);
        margin-bottom: -60px;
        background-color: $color-primary-darkviolet;
        padding: 2.9rem 3.5rem;
        border-radius: 10px;
        background-image: url("../assets/bg-shorten-desktop.svg");
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        width: 100%;
        font-size: 1.12rem;

        @media screen and (max-width: 400px) {
            flex-direction: column;
            padding: 1.2rem;
            gap: 1rem;
        }
    }

    &__input {
        width: 100%;
        padding: 1.1rem 1.5rem;
        border-radius: 0.5rem !important;
        border: 1px solid $color-primary-bg;
        font-size: 1em;

        @media screen and (max-width: 400px) {
            padding: 0.9rem;
        }

        &::placeholder {
            color: $color-neutral-grayishviolet;
            font-family: $font-family-primary;
        }

        &:focus {
            outline: none;
        }

        &--submit {
            cursor: pointer;
            border: 1px solid $color-primary-cyan;
            flex: 1;
            font-weight: 700;
            transition: all 0.2s ease-in-out;

            &:hover {
                border: 1px solid lighten($color: $color-primary-cyan, $amount: 20%);
            }

            &:active {
                transform: translateY(5px);
            }
        }
    }

    &__links {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.link {
    background: $color-primary-bg;
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 20px;

    &__original {
        flex: 1;
        text-align: left;
        color: $color-neutral-verydarkviolet;
    }

    &__shorten {
        text-align: right;
        color: $color-primary-cyan;
    }
}
</style>
