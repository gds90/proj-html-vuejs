<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                {
                    name: 'Quick Links',
                    items: ['Games', 'Latest Tournament', 'Shop', 'Blog', 'Contact']
                },
                {
                    name: 'Help',
                    items: ['Faqs', 'Terms & Conditions', 'Privacy']
                },
                {
                    name: 'Follow Us',
                    items: ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Github']
                },
                {
                    name: 'Contect',
                    items: ['Location: 4 Mayfield, Buckden, PE19 5SZ', 'Phone: (302) 555-0107']
                }
            ]
        }
    },
}
</script>
<template lang="">
    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="footer-form">
                        <div class="row">
                            <div class="col-7">
                                <h3>Subscribe Newsletter</h3>
                                <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                            <div class="col-5">
                                <form action="#">
                                    <div class="form-group input-area d-flex align-items-center">
                                        <input type="text" placeholder="Enter your email" autocomplete="off">
                                        <button class="btn-area"><img src="/public/img/icon/send-icon.png" alt="icon"></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-top pt-120 d-flex justify-content-center">
            <div class="container">
                <div class="row pb-120">
                    <div class="col-4">
                        <img src="/public/img/logo.png" alt="futio">
                        <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, elit. varius enim in eros elementum Duis mi quis viverra ornare</p>
                        <div class="socials">
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div class="col-2" v-for="link, index in links" :key="index">
                        <h5>{{link.name}}</h5>
                        <ul class="list-unstyled">
                            <li v-for="item, index in link.items" :key="index"><a href="#">{{item}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p>
                            Copyright © 2022
                            <a href="#">FUTIO</a>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/styles/generals.scss';
@use '../assets/styles/partials/variables' as *;

footer {
    background-color: #273449;

    h5,
    p {
        color: white;
    }

    a {
        margin-top: 8px;
        text-decoration: none;
        color: gray;

        &:hover {
            color: $colorlime;
        }
    }

    .footer-bottom {
        background-color: $colorblack;
        padding: 30px 0;
    }

    .footer-top {
        position: relative;
    }

    .footer-top::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 110%;
        left: 0;
        top: -20%;
        z-index: -1;
        background-color: #273449;
    }


    .footer-form {
        border-radius: 30px;
        background-color: $colorblue;
        padding: 80px 60px 72px;
    }

    .form-group {
        padding: 0 5px;

        button {
            border-radius: 50%;
            border: none;
            background-color: $colorlime;
            min-width: 50px;
            min-height: 50px;
        }
    }

    .input-area {
        border-radius: 15px;
        background-color: #425374;
        outline: 1px solid #556f9c;

        input {
            padding: 12px;
            margin: 4px;
            border: none;
            background: transparent;
            width: 100%;
        }
    }
}

.pt-120 {
    padding-top: 120px;
}

.pb-120 {
    padding-bottom: 120px;
}
</style>