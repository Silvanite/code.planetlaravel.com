<template>
    <div>
        <router-link
            v-for="item in items"
            :key="item.key"
            :to="item.path"
        >
            <h2>{{ item.title }}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    computed: {
        items() {
            const folder = this.$page.path

            return this.$site.pages
                .filter(page => page.path.match(new RegExp(`(${folder})(?=.*html)`)))
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        }
    }
}
</script>
