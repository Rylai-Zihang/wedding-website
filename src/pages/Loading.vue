<script setup lang="ts"></script>

<template>
    <div class="loader-container fixed w-full h-full bg-white">
        <div class="loader-heart-wrapper">
            <div class="heart heart-1"></div>
            <div class="heart heart-2"></div>
            <div class="heart heart-3"></div>
            <div class="heart heart-4"></div>
            <div class="heart heart-5"></div>
        </div>
        <p class="loader-text text-2xl">Loading</p>
    </div>
</template>

<style lang="scss">
    .loader-heart-wrapper {
        display: block;
        position: relative;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
        width: 50px;
        height: 50px;
    }

    .loader-text {
        font-family: "Alex Brush", sans-serif;
        color: #70a076;
        font-weight: 500;
        position: absolute;
        left: 50%;
        top: calc(50% + 10px);
        margin-left: -35px;
        &:after {
            position: relative;
            top: 0.5rem;
            overflow: hidden;
            display: inline-block;
            animation: ellipsis 1.5s infinite;
            content: "\2026";
        }
        @keyframes ellipsis {
            from {
                width: 2px;
            }
            to {
                width: 15px;
            }
        }
    }

    .heart {
        position: absolute;
        width: 50px;
        height: 45px;
        opacity: 0.6;
        animation: loader-beat 3s infinite ease-in-out;
        &:before,
        &:after {
            content: "";
            position: absolute;
            left: 25px;
            top: 0;
            width: 25px;
            height: 40px;
            background: #f99;
            border-radius: 50px 50px 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
            background-color: #70a076;
        }
        &:after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
        }
    }

    @for $i from 1 to 5 {
        .heart-#{$i} {
            animation-delay: -(0.5s + $i * 0.5s);
        }
    }

    @keyframes loader-beat {
        0%,
        100% {
            -moz-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            -webkit-transform: scale(0);
        }
        50% {
            -moz-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
            -webkit-transform: scale(1);
        }
    }
</style>
