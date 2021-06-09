<template>
    <div style=" margin-bottom: 4%;">
        <div class="card mb-3" style="max-width: 540px; margin-left: 1%;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img v-bind:src="require(`@/assets/images/${$route.params.itemId}.jpg`)" style="width: 115%; height: 100%;" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">商品名</h5>
                        <p class="card-text">商品説明</p>
                        <p class="card-text">PRICE ¥99,999 +税</p>
                        <p class="card-text">SIZE：W999 × D999 × H999</p>
                        <p class="card-text">COLOR：黒</p>
                        <p class="card-text">MATERIAL：いろいろ</p>
                        <button class="btn btn-primary" @click="$store.commit('add', $route.params.itemId)" v-if="$store.state.indexOf($route.params.itemId) === -1">お気に入りに登録</button>
                        <button class="btn btn-danger" @click="$store.commit('delete', $route.params.itemId)" v-else>お気に入りから削除</button>
                    </div>
                </div>
            </div>
        </div>
        <button style="margin-left: 15%;" class="btn btn-link" @click="$router.push('/')">商品一覧に戻る</button>
    </div>
</template>

<script>

export default {

}

</script>