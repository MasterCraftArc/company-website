<script>
	import Button from '../Button.svelte';
</script>

<section>
	<div class="h1-container">
		<h1>How Can <span>Defense Unicorns</span> Help</h1>
		<h1>With Your Mission Need?</h1>
	</div>
	<div class="contact-form">
		<form action="" method="post">
			<div class="left-right-container">
				<div class="left">
					<div class="box">
						<label for="first-name">First Name</label>
						<input
							type="text"
							id="first-name"
							name="first_name"
							required
							placeholder="First Name"
						/>
					</div>
					<div class="box">
						<label for="work-email">Work Email</label>
						<input
							type="email"
							id="work-email"
							name="work_email"
							required
							placeholder="Work Email"
						/>
					</div>
				</div>
				<div class="right">
					<div class="box">
						<label for="last-name">Last Name</label>
						<input type="text" id="last-name" name="last_name" required placeholder="Last Name" />
					</div>
					<div class="box">
						<label for="phone-number">Phone Number</label>
						<input
							type="tel"
							id="phone-number"
							name="phone_number"
							required
							placeholder="Phone Number"
						/>
					</div>
				</div>
			</div>
			<div class="bottom">
				<label for="how-can-we-help">How can we help?</label>
				<textarea
					id="how-can-we-help"
					name="how_can_we_help"
					required
					placeholder="How Can We Help?"
				/>
			</div>
			<div class="submit-button">
				<Button text="submit now" />
			</div>
		</form>
	</div>
</section>

<style>
	section {
		gap: 5rem;
		padding-top: 5rem;
	}

	.left-right-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	label {
		font-family: 'montserrat';
	}

	.left,
	.right {
		width: 48%;
	}

	form {
		width: 100%;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.h1-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 800px;
	}

	.box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	input,
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 16px;
		border: 1px solid #ccc;
		background-color: black;
		border-radius: 4px;
		box-sizing: border-box;
		font-family: 'montserrat';
		color: white;
	}

	input {
		height: 50px;
	}

	textarea {
		height: 100px;
	}

	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
