---
title: Contact
seo_title: Contact Page
seo_desc: Contact Me
---

Feel free to contact me via the form below!

<div class="row">
    <form name="contact-me" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-me" />
        <label class="u-full-width">Your Name: </label>
        <input class="u-full-width" type="text" v-model="name" />
        <label class="u-full-width">Your Email: </label>
        <input class="u-full-width" type="email" v-model="email" />
        <label class="u-full-width">Message: </label>
        <textarea class="u-full-width" v-model="message"></textarea>
        <button class="u-full-width" type="submit">Send</button>
    </form>
</div>