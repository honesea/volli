import { fail, type Actions } from '@sveltejs/kit';

import { MAILCHIMP_API_URL, MAILCHIMP_API_KEY } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

		if (!email || !email.toString().match(emailRegex)) {
			console.log('bad email');
			return fail(400, { email, invalid: true });
		}

		const body = {
			email_address: email,
			status_if_new: 'subscribed'
		};

		const options = {
			method: 'PUT',
			headers: {
				Authorization: `Basic ${Buffer.from(`api:${MAILCHIMP_API_KEY}`).toString('base64')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		};

		try {
			const response = await fetch(
				MAILCHIMP_API_URL + '/lists/56c7675411/members/' + email,
				options
			);
			const json = await response.json();
			if (json.status >= 400) throw new Error(json.detail);
			return { success: true };
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'Could not subscribe' });
		}
	}
};
