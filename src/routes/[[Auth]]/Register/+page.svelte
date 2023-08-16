<script lang="ts">
	import { auth, db } from "$lib/DB/firebaseConfig";
	import { signInWithEmailAndPassword } from "firebase/auth";

	import { scale } from "svelte/transition";
	import Button from "$lib/Components/Button.svelte";
	import { goto } from "$app/navigation";

	const dsComp = {
		loader: false,
		domMsg: "",
		email: "",
		password: "",
	}


	
</script>

<main class="p-4 sm:p-0" in:scale>
	<div class="card p-4 flex flex-col gap-2 mx-auto sm:max-w-[400px] bg-white dark:bg-white  rounded-none">
		<h1 class="h3 text-center dark:text-black">Register</h1>
		<input type="email" class="input rounded-none px-2 py-1" placeholder="Email" />
		<input type="password" class="input rounded-none px-2 py-1" placeholder="Password" />
        <input type="password" class="input rounded-none px-2 py-1" placeholder="Confirm Password" />

		<Button title="Sign Up" loader={dsComp.loader} loader_title="Signing"/>

		<section class="flex">
			<div class="w-full">
				<button class="transition-all active:scale-95 hover:opacity-60 text-left dark:text-black"
				on:click={() => goto("/Login")}
				>Login here</button>
			</div>

		

			
		</section>

		
	</div>
</main>