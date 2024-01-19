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
                }
            ]
        }
    },
}
</script>
<template lang="">
    <footer id="contact">
        <!-- Footer top start  -->
        <div class="footer-top pt-200 d-flex justify-content-center">
            <div class="newsletter">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-11">
                            <!-- Footer form  -->
                            <div class="footer-form">
                                <div class="row align-items-center ">
                                    <div class="col-7">
                                        <h3>Subscribe Newsletter</h3>
                                        <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                    </div>
                                    <div class="col-5 align-items-center ">
                                        <form action="#">
                                            <div class="form-group input-area d-flex align-items-center justify-content-between">
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
            </div>
            <div class="container">
                <div class="row pb-120">
                    <div class="col-4">
                        <img src="/public/img/logo.png" alt="futio">
                        <p class="mt-4 mb-4 footer-p">Lorem ipsum dolor sit amet, elit. varius enim in eros elementum Duis mi quis viverra ornare</p>
                        <div class="socials d-flex gap-2">
                            <div class="single-social">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div class="single-social">
                                <i class="fab fa-twitch"></i>
                            </div>
                            <div class="single-social">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div class="single-social">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-2" v-for="link, index in links" :key="index">
                        <h5>{{link.name}}</h5>
                        <ul class="list-unstyled">
                            <li v-for="item, index in link.items" :key="index" class="my-3 fs-5"><a href="#">{{item}}</a></li>
                        </ul>
                    </div>
                    <div class="col-2 contect">
                        <h5>Contact</h5>
                        <ul class="list-unstyled">
                            <li>
                                <b>Location:</b>
                                <p>4 Mayfield, Buckden, PE19 5SZ</p>
                            </li>
                            <li>
                                <b>Phone:</b>
                                <p>(302) 555-0107</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Footer top end  -->
        </div>
        <div class="footer-bottom">
            <!-- Footer bottom start  -->
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center font-style">
                        <p>
                            Copyright © 2022
                            <a href="#">FUTIO</a>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
                <!-- Footer bottom end  -->
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/styles/generals.scss';
@use '../assets/styles/partials/variables' as *;

footer {
    background-color: #273449;

    .footer-p {
        font-family: $font_style;
    }

    h5,
    p {
        color: white;
    }

    a {
        margin-top: 10px;
        text-decoration: none;
        color: rgb(171, 171, 171);

        &:hover {
            color: $colorlime;
        }
    }

    .footer-bottom {
        background-color: #1A222E;
        padding: 30px 0;

        a {
            color: $colorlime;
        }

        .font-style {
            font-family: $font_style;
        }
    }

    .footer-top {
        position: relative;

        a {
            font-family: $font_style;
        }

        .contect {

            b {
                color: $colorlime;
            }

            p {
                color: #fff;
            }

            b,
            p {
                font-family: $font_style;
            }
        }
    }

    .newsletter {
        position: absolute;
        top: -150px;

        h3 {
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 40px;
            line-height: 55.9px;
            color: white;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
            font-family: $font_style;
        }

        .footer-form {
            border-radius: 30px;
            background-color: $colorblue;
            padding: 80px 60px 72px;
        }

        .form-group {
            font-family: $font_style;
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

                &::placeholder {
                    color: #B4ACC8;
                    opacity: 1;
                    /* Firefox */
                }
            }
        }
    }

    .single-social {
        padding: 5px 10px;
        border-radius: 50%;
        border: 1px solid;
        color: $colorpanna;
        cursor: pointer;
        font-size: 15px;

        &:hover {
            background-color: $colorlime;

        }
    }
}

.pt-200 {
    padding-top: 250px;
}

.pb-120 {
    padding-bottom: 120px;
}
</style>