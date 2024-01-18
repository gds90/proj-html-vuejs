<script>

import { store } from '../store';

export default {
    name: 'AppBattleCard',
    data() {
        return {
            store
        }
    },
    props: {
        battle: Object
    }
}
</script>
<template lang="">
        <div class="box-battle-card">
            <div class="card text-center">
                <div class="card-header">
                    <div>
                        <img class="p-4" :src="battle.player1" alt="">
                        <img class="p-4" :src="battle.vs" alt="">
                        <img class="p-4" :src="battle.player2" alt="">
                    </div>
                </div>
                    <div class="card-body">
                        <h3 class="card-title">{{battle.title}}</h3>
                        <p class="card-text">{{battle.time}}</p>
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
</template>
<style lang="scss" scoped>
@use '../assets/styles/generals.scss' as *;
@use '../assets/styles/partials/variables' as *;



    .card-header,
    .card-footer {
        background-color: #273448;
    }

    .card-body {
        background-color: $colorblue;
        .card-title {
            color: $colorwhite;
        }
        .card-text {
            color: $colorlime;
            font-family: $font_style;
        }
    }
</style>