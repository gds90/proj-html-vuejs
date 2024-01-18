<script>

import { store } from '../store';

export default {
    name: 'AppBattleCard',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div v-for="battle, index in store.battleCards" :key="index" class="box-battle-card">
                    <div class="card text-center">
                        <div class="card-header">
                            <div>
                                <img class="p-4" :src="battle.player1" alt="">
                                <img class="p-4" :src="battle.vs" alt="">
                                <img class="p-4" :src="battle.player2" alt="">
                            </div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer text-body-secondary">
                                <div class="d-flex justify-content-center align-items-center p-4 text-light">
                                    <img class="px-2" :src="battle.icon_youtube" alt="">
                                    <div class="pe-2">{{ battle.text_1}}</div>
                                    <img class="px-2" :src="battle.icon_twitch" alt="">
                                    <div>{{ battle.text_2}}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/generals.scss' as *;
@use '../assets/styles/partials/variables' as *;

.box-battle-card {
    width: calc(100% / 2 - 20px);
    margin: 10px;

    .card-header,
    .card-footer {
        background-color: #273448;
    }

    .card-body {
        color: $colorwhite;
        background-color: $colorblue;
    }
}
</style>