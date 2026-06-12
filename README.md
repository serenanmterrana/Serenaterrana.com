[README.md](https://github.com/user-attachments/files/28861309/README.md)
# Kingdom Journey Ministry Website

This is a static ministry website built for GitHub Pages.

## Pages

- `index.html` is the home page with the cinematic photo hero, About Me, Donate, interactive world map, newsletter signup, and social links.
- `nations/` contains one editable page for each nation. For example, edit `nations/usa.html` for the USA page and `nations/chile.html` for the Chile page.
- `shop.html` is the Etsy shop page.

## Before Publishing

Update these placeholders:

- Replace `Kingdom Journey` with your ministry name.
- Replace the About Me text with your testimony.
- Replace the donate button `href="#"` values with your giving links.
- Replace the social media `href="#"` values with your TikTok, Instagram, Facebook, and YouTube links.
- The Etsy shop page is linked to `https://inthedeepcreations.etsy.com`.
- Replace the placeholder gallery photos with your own trip photos.
- Replace the newsletter form action with your email platform form link.

## Editing Nation Pages

Each nation has its own file in the `nations` folder. Edit the text, photos, gallery images, and social video links directly inside that nation's file.

To add another country later:

1. Copy one file inside `nations/`, such as `chile.html`.
2. Rename the copy to the new country slug, such as `brazil.html`.
3. Edit the text and photos inside that new file.
4. Add the new country to the `nations` list in `script.js`, using the same slug:

```js
{ slug: "brazil", name: "Brazil", flag: "🇧🇷", lat: -14.2, lon: -51.9, region: "South America" },
```

## GitHub Pages

Upload these files to a GitHub repository, then enable GitHub Pages from the repository settings. Choose the main branch and root folder.
