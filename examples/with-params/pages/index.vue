<template>
<f7-page>
    <f7-navbar title="With params" />
    <f7-block-title>Blog</f7-block-title>
        <f7-list>
        <template
            v-for="y in [2017,2018]"
        >
            <f7-list-button
                v-for="i in 5"
                :key="i"
                :href="`/blog/${y}/${i}`"
            >
                {{ y }} - {{ i }}
            </f7-list-button>
        </template>
    </f7-list>

    <f7-block-title>Users</f7-block-title>
    <f7-list>
        <f7-list-button
            v-for="i in 5"
            :key="i"
            :href="`/users/${i}`"
        >
            User {{ i }}
        </f7-list-button>
    </f7-list>
</f7-page>
</template>
