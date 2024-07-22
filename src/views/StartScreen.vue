<script>
   
</script>

<template>
    <div class="w-2/3 p-4 flex flex-col justify-center items-center min-h-full gap-5 m-auto">
        <h1 class="text-4xl text-center justify-center font-bold w-1/2 mb-5">Welcome to...</h1>
        <h1 class="text-4xl font-extrabold text-green-300 uppercase tracking-wide">Who wants to be an Ignite Millionaire</h1>
        <div class="justify-center text-center flex flex-col" >
            <img class="w-full h-72" src="../assets/images/wwtba.png" alt="Ignite Quiz">

            <router-link to="/Quiz" class="mt-5">
                <v-btn elevation="20" color="primary" class="primary elevation-">
                    Start Game
                </v-btn>
            </router-link>
        </div>
    </div>


</template>
