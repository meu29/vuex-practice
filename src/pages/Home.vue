<template>
    <div style="display: flex; flex-wrap: wrap; margin-left: 7%; margin-bottom: 3%;">
        <div v-for="i in page * 8" v-bind:key="i">
            <div class="card" style="width: 18rem; margin-bottom: 10%; margin-right: 26px;">
                <img class="bd-placeholder-img card-img-top" v-bind:src="require(`@/assets/images/item${i}.jpg`)" style="width: 100%;" />
                <div class="card-body">
                    <span>{{"プロダクト" + i}}</span>
                    <button class="btn btn-link" @click="$router.push({path: `/item/item${i}`})">商品詳細</button>
                </div>
            </div>
        </div>
        <button style="margin-left: 42%;" class="btn btn-link" @click="page++" v-if="page <= 1">もっと見る</button>
    </div>
</template>

<script lang="ts"> 

export default {
    data(): {page: number} {
        return {
            page: 1
        }
    }
}

</script>