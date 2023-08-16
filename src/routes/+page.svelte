<script lang="ts">
	import { goto } from "$app/navigation";
	import {scale} from "svelte/transition";

	import { auth } from "$lib/DB/firebaseConfig";
	import { onAuthStateChanged } from "firebase/auth";
	import type { User } from "firebase/auth";

	const authCheck = () =>
	{
		onAuthStateChanged(auth, (userCred: User | null) =>
		{
			userCred ? goto("/Dashboard") : goto("/Login");
		})
	}
	
</script>

<main class="" in:scale>
	<div class="card mx-auto sm:max-w-2xl p-4 bg-gradient-to-t from-white to-blue-300 dark:bg-gradient-to-l dark:from-cyan-800 dark:to-cyan-600 shadow-lg shadow-black rounded-lg">
		<h1 class="h4 text-center font-bold"> Welcome to ICCT Colleges Enrollment System Design and Implementation for Incoming Students for the Year 2023. </h1>
		
		<p class=" text-center mt-4 font-semibold">Where simplicity meets efficiency! Let our friendly chat system guide you through the process seamlessly, making enrollment a breeze. Say goodbye to complexities and hello to hassle-free enrollment.</p>

		<button class="transition-all active:scale-95 hover:opacity-80 px-2 py-1 bg-blue-500 text-white w-full mt-5 dark:bg-green-500"
		on:click={authCheck}
		>Let's go!</button>
	</div>
</main>