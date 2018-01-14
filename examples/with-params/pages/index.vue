<template>
<f7-page>
    <f7-navbar title="Users List" />
    <f7-block-title>Users</f7-block-title>
    <f7-list>
        <f7-list-button
            v-for="i in 10"
            :key="i"
            :href="`/users/${i}`"
        >
            User {{ i }}
        </f7-list-button>
    </f7-list>
</f7-page>
</template>
