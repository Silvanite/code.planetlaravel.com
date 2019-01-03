<template>
    <div>
        <router-link
            v-for="item in items"
            :key="item.key"
            :to="item.path"
        >
            <h2>{{ item.title}}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    props: [
        'count',
    ],

    computed: {

        numberOfItems() {
            const numberOfItems = this.count || 5
            const numberOfPages = this.$site.pages.filter(page => page.path.match(new RegExp(`(?=.*html)`))).length

            return numberOfPages < numberOfItems ? numberOfPages : numberOfItems
        },

        items() {
            return this.getRandom(this.$site.pages
                .filter(page => page.path.match(new RegExp(`(?=.*html)`))), this.numberOfItems)
        }

},

    methods: {
        /**
         * Credit: https://stackoverflow.com/a/19270021
         */
        getRandom(arr, n) {
            let result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        }
    },
}
</script>
