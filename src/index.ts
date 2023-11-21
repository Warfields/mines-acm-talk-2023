/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request) {
		let url = new URL(request.url);
    	let path = url.pathname.slice(1).split("/");
		let destinationURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

		// If the user is being safe and responsible, then give them a cookie instead.
		if (path.length > 0 && path[0] == "safe") {
			destinationURL = "https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg";
		}
		
		// Temporary Redirect, so that the browser does not cache this response
		const statusCode = 302;
		return Response.redirect(destinationURL, statusCode);
	},
};
