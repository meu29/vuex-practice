<template>
    <div style="margin-left: 1%; margin-bottom: 1%;">
        <p style="text-align: center;">あなたがお気に入りに登録した商品</p>
        <div style="display: flex; margin: 0;">
            <div v-for="itemId in $store.state" v-bind:key="itemId">
                <img v-bind:src="require(`@/assets/images/${itemId}.jpg`)" style="width: 8%; display: block;" @click="$router.push(`/item/${itemId}`)"  />
            </div>
        </div>
    </div>
</template>

<script>

export default {

}

</script>