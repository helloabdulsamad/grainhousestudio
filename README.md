# Grainhouse. The woodwork finder

Built 25 November 2026 on the owner's request to try the Vitra finder concept first. The first question asks for the woodwork
type in place of Vitra's sitting time. How Vitra works is in `../../research/vitra-finder/README.md`.

Private review link: https://claude.ai/artifact/L4BbXaXWe5JGqTtTk61bce

Public page: https://helloabdulsamad.github.io/grainhousestudio/

## What is in it

1. A welcome ring of photos with a Start button.
2. Six questions in a card at the bottom. Woodwork type with 38 choices, room, wood tone, size, feel of the room, and daily use or
   for show. Each question has an i button, back and next arrows, and a clear button.
3. After each answer all 1,026 photos move into a cloud. The best matches grow in the middle.
4. A short sorting screen, then results with Best matches and All pieces tabs, a match percentage, best match badges, go back and
   start again.
5. Tap any photo to see it large and why it matched.
6. Reduced motion turns every move into a quick change.

## How the match works

Each answered question gives a part score. Type counts 3, room 2, wood tone 1.5 and the rest 1 each. The match is the weighted
average of the answered questions only. Wood tone is the average brightness of the brown pixels in each photo. Feel of the room
is the average brightness of the whole photo. Size, rooms and daily use come from a table per type in the page script.

## Files

| File | What it is |
|---|---|
| `index.html` | The page, built from `src.html` with the photo data put in |
| `src.html` | The source page with a `/*DATA*/` mark where the data goes |
| `media/t/0.webp` to `16.webp` | All 1,026 small photos packed into 17 sheets of 64 at 220 px, about 11 MB in total |
| `media/q/000.webp` to `256.webp` | Large photos at 960 px packed four to a file with a 12 px gap, 141 MB in total and at most 1.3 MB a file, loaded only when a photo is on screen |
| `media/full/` | The original file of every photo, 2.8 GB. Kept on this computer only, never published |
| `licence-log.csv` | One row per photo with its index, file, photographer, photo page, image source, licence and camera |
| `tools/` | The picks, credits, tone script and data used to build the page |

The small photos were packed into sheets because one artifact can hold at most 512 files. `tools/build_data.py` reads the old
single small photos, which were removed after packing. To rebuild, download them again at 220 px from the sources in the log.

## Photos

The first 335 photos are from Unsplash under the Unsplash License, picked by eye from contact sheets so each one shows a clear wooden
piece. People, food shots, plastic or metal pieces and known designer pieces were left out. Unsplash+ photos were left out.
Four photos had no name on their page, so they are credited as an Unsplash photographer with a link.

These are stand ins to show the idea. Nothing here is a piece for sale, and no prices or clients are shown.

## Checked

1. Desktop at 1440 by 900 and 1024 by 768. Welcome ring, grid, cloud after type and tone answers, results, detail.
2. Phone at 375 by 812. Welcome ring, cloud, results and detail. The welcome text was squeezed by the ring, so the ring now
   follows the tall screen and the text is narrower.
3. No console errors.

## Changes after the owner's first review, 25 November 2026

The owner liked the sample and asked for three changes.

1. The welcome ring is now a true circle at every width. Before, it stretched into an oval on wide screens. On a phone the circle
   is wider than the screen, so the photos orbit in from the sides.
2. Tapping a photo now opens it with motion. The photo flies from its tile to its place in the panel while the panel grows out of
   the tile. Closing reverses it back into the tile. This works from the cloud and from the results.
3. Hover now copies Vitra. We read its styles on 25 November 2026. On a mouse or trackpad only, the photo zooms to 1.1 inside its
   tile over 0.6 seconds with the curve cubic-bezier(.25,.46,.45,.94), and the tile edge stays still. Our name tip also fades in
   and rises a little. Result cards get the same zoom.

Also fixed. The photo panel sat in the top left corner on wide screens because the page reset removed its centring margin.

## Not done yet

1. No sound. Vitra's finder has none, so we left it out of this sample.
2. Fonts load from Google. If the artifact viewer blocks them, the page falls back to Georgia and the system font.
3. The gallery card has no preview picture. The owner can set one from the Share menu.

## More photos, 25 November 2026

The owner asked for at least a thousand pieces from Unsplash, Pexels and other free stock sites. The finder now has 1,014.

1. We ran 78 Unsplash searches and 38 Pexels searches, two or three per woodwork type, and set aside the 335 photos we already had.
   That gave about 6,000 candidates.
2. Photos whose descriptions named people, food, drinks, animals, landscapes, drawings or renders were set aside first.
3. About 1,700 of the rest were checked by eye on numbered contact sheets, type by type. We kept clear wooden pieces of the right
   type and left out people, brand logos, plastic or metal pieces and anything that looked computer made.
4. 679 were added, 292 from Unsplash and 387 from Pexels. Every type now has 27 pieces, except coffee tables with 22 and vases with
   20. Most search results for those two were cups of coffee and glass vases.
5. Wood tone and room feel were measured again across all 1,014 photos, so the sliders spread evenly over the full set.

Pixabay was left out on purpose. It hosts many AI made images, and the rule for this work is no AI images.

Pexels names are read from the Pexels download file name, so accents can be missing and a few accounts show only as a Pexels
photographer. Every credit links to the original photo page. Unsplash+ photos are still left out.

One artifact can hold at most 512 files, so the large photos are now packed four to a file. The page shows one quarter of a file
with a CSS background, and a gap between the four cells stops a neighbour bleeding into view. Result cards load their file only
when they scroll near the screen.

To rebuild, run `tools/build_more.py` with the scratch folder that holds `new_picks.json` and the downloaded photos. The previous
single large photos were removed after packing.

Checked at 1440 by 900 and 375 by 812. Welcome ring, grid, cloud after answers, results, the opening animation and the photo panel
all work. Each answer re-sorts the 1,014 tiles in about a tenth of a second. No script errors.

## Coffee table and vase top-up, 25 November 2026

The owner said yes to filling coffee tables and vases up to 27 like the other types. The finder now has 1,026 photos.

1. Unsplash searches: wooden vase, wood vase, turned wood vase, wooden coffee table living room, round wooden coffee table, low
   wooden table, coffee table wood and living room coffee table. Pexels searches: wooden vase and wooden coffee table.
2. About 210 new candidates were checked by eye on numbered contact sheets. Most were again cups of coffee or glass and clay vases.
3. 5 coffee tables and 7 wooden vases were added. 11 are from Unsplash and 1 is from Pexels. Each Unsplash photo page was opened to
   read the photographer and confirm the Unsplash License.
4. The new photos sit after the old ones, so only `media/t/15.webp`, `media/t/16.webp` and `media/q/253.webp` to `256.webp`
   changed. Tone and room feel were measured again across all 1,026 photos.

To rebuild this step, run `tools/build_top.py` with the scratch folder that holds `picks.json`.

## Camera check for AI images, 25 November 2026

The owner asked whether any photo was AI made, then said yes to a camera details check.

1. We read the camera details of every photo. Unsplash shows them on the photo page. Pexels puts them in the page data, which we
   read in the in app browser one page at a time. Results are in `tools/camera-check/`.
2. Unsplash, 638 photos. 500 name a camera, 137 name none and 1 names Corona Renderer, a 3D render program.
3. Pexels, 388 photos. 296 name a camera and 92 name none.
4. The 230 photos with no camera or a render program were checked by eye on numbered sheets made from the full size originals.
5. 57 looked like renders and were replaced. Every photo by the Pexels accounts Dada _design and dada design was a render, and one
   was by an account called Paintit.ai Interior Design.
6. 3 more were the same photo as another item, so they were replaced too. 473 matched 266, 512 matched 97 and 994 matched 333.
7. That makes 60 new photos, all from Pexels, each of the same type as the one it replaces. Each one names a camera make and
   model, and none matches a photo already in the finder. The list is in `tools/replacements.json`.
8. Photos with no camera details that still look like real photos were kept. Many phones and editing apps remove camera details.
9. Pexels names now come from the photo page, so accents are right and no one shows as a Pexels photographer any more.

## Full quality rebuild, 25 November 2026

The owner asked for the best quality images with no extra compression.

1. `tools/get_originals.py` downloads the original upload of every photo with no size or quality settings in the link. The
   smallest original has a short side of 1365 px.
2. `tools/build_hq.py 960 90` builds every image from those originals, so each photo is compressed once only. Large cells are now
   960 px, up from 640, at WebP quality 90. The same script applies the 60 swaps and writes `items.json`, `data.js` and the
   licence log.
3. The review link was republished in three parts because one publish can carry about 64 MB.

## Name and public page, 25 November 2026

The owner asked to push the finder to a GitHub page, give it a name, give the logo a proper name and remove the photo credit
button.

1. The name is Grainhouse. The owner kept it: "Keep Grainhouse". The studio name in `plan/README.md` section 10 is still his decision.
2. The Photo credits button, the credits list, the line under Start, the name under each result card and the credit line in the
   photo panel were removed. Neither licence needs credit on the page. Every credit stays in `licence-log.csv`.
3. The public copy lives in `C:\Users\osunl\source\grainhouse`, its own git repo, outside this folder. It holds only `index.html`, `fonts`, `media/q`,
   `media/t`, the licence log and a short README. The originals and tools are not in it.
4. Repo: https://github.com/helloabdulsamad/grainhousestudio. Pages builds from the main branch.
5. Checked live. The page, the last photo file and the first question all load with no script errors.

To update the public page, rebuild here, copy `index.html` and the changed media into that folder, then commit and push there.

The owner then asked to rename the repo: "rename the repo to grainhousestudio". The address grainhouse.github.io was not possible
because a GitHub organisation called GrainHouse already belongs to someone else. The repo is now helloabdulsamad/grainhousestudio
and the page is at https://helloabdulsamad.github.io/grainhousestudio/. Checked live after the rename.

## iPhone crash fix, 25 November 2026

The owner reported: "as i answer the questions, the app crashes on my iphone." Safari on iPhone closes a page that uses too much
memory. Two things in the page used too much.

1. Every one of the 1,026 cloud tiles had `will-change:transform`, so the phone kept a separate drawing layer for each tile, even
   hidden ones. At iPhone screen density that is close to 1.8 GB. The rule is gone. Tiles that leave the screen are now set to
   hidden after they fade, so the phone does not draw them. After the first answer at 375 by 812, 331 tiles are drawn, down
   from 1,026.
2. Result cards used the 960 px quads, about 15 MB each once decoded, and kept them. Cards now use `media/m`, 480 px photos packed
   eight to a file, built once from the originals by `tools/build_mid.py`. A card loads its photo when it comes within 600 px of
   the screen and drops it when it goes further away. Scrolling all 1,026 cards keeps about 8 loaded at a time. The photo panel
   still uses the 960 px quads.

Checked at 375 by 812 in the in app browser. Answers, cloud, results, the All pieces tab and the photo panel work with no script
errors. A real iPhone was not available, so the owner should confirm on his phone. Pushed to GitHub Pages and republished to the
review link.

## Top five features from the brand research, 25 November 2026

The owner said "Build top five" after reading `reports/Woodwork brand features for Grainhouse.md`. Each feature traces to a row in
that report's ranked table.

1. Send my matches on WhatsApp. A button on the results writes the answers, the top five pieces with their piece numbers and match
   scores, and a link to the same matches into a WhatsApp message. Report row 1.
2. Share link. The six answers and the shortlist sit in the part of the link after the hash, for example
   `#c=chairs&r=dining&t=0.30&l=138.74.65`. Opening that link skips the welcome screen and shows the same results and shortlist.
   No account is needed. On a phone the share sheet opens, on a computer the link is copied. Report row 2.
3. Request a piece. The photo panel has Request this piece and the shortlist has Request these pieces. The form already holds the
   answers and the chosen pieces. The visitor adds name, city, rough size, needed by date, budget and notes, then sends it on
   WhatsApp or copies it. The page stores nothing on a server. Name and city are remembered on that phone only. Report row 3.
4. Data saver. A button in the header. It turns on by itself when the phone asks to save data or the connection is 2G. When on,
   result cards and the shortlist show the small grid photos the phone already has, and the photo panel shows the 480 px photo
   with a Show full quality photo button. `sw.js` keeps photos and fonts the visitor has seen, so a second visit costs no data
   for them. It runs on the public site only. Bump its version name when photos are rebuilt under the same file names.
   Report row 4.
5. Shortlist and compare. A heart on every result card and a Save to shortlist button in the photo panel. A heart button in the
   header opens the shortlist. Tick two or three pieces to compare them side by side by match, rooms, size, wood tone, light in
   the photo, use and why it matched. The shortlist is kept on that phone. Report row 5.

Every piece now shows a piece number, such as Piece 0139, so a buyer can quote it.

Owner facts still needed. `STUDIO_WA` near the end of the script in `src.html` is empty because we do not have the studio
WhatsApp number. While it is empty, WhatsApp opens and the visitor picks who to send to. Budget bands, lead times and deposit
terms were left out because they must come from the owner.

Checked at 375 by 812 and at the pane's desktop size in the in app browser. Hearts, shortlist count, compare, request brief,
WhatsApp text, a shared link opened fresh, data saver on and off, full quality on tap, and the photo cloud all work with no
script errors. Republished to the review link. Pushed to helloabdulsamad/grainhousestudio, but the GitHub Pages deploy failed
with a GitHub server error during a GitHub outage on 25 November 2026, so the public page needs one more deploy.

Redeployed the same day with an empty commit after the outage eased. The live page now serves the five features and `sw.js`.

## Answers panel on the results page, 25 November 2026

The owner said: "the anwers should be better designed. the pill shape matches the tab bar. it needs to look diffrent".
The answers no longer use pills. They sit in one panel with square cells split by thin lines. Each cell has a small label in
iroko capitals, such as Type, Room or Wood tone, the answer in the serif font, and a Change link that goes back to that question.
Wood tone shows a small dot in the chosen wood colour. The request form shows the same panel without the Change links. Checked at
desktop and 375 by 812 with no script errors. Pushed to GitHub Pages and republished to the review link.

## Rebuilt to work like the Vitra gift finder, 25 November 2026

Owner: "i want the selection to be exactly like this. not like a question. and the animation should be exactly like this too", then "the hover, everything really. aside from the images. the backgrounf color too", then "the color wheel too, just that in this case, it will be brown color wheel from light to dark just as you had it before when it was a slider", then "also how the image load up. infact everything."

Source: https://findmy.vitra.com/f/en-en/gifts, read in the in-app browser on 25 November 2026. We measured sizes, colours and timings only. We wrote our own code and words and kept our own photos. The old question page is kept in the scratchpad as `src.before-vitra.html`.

How it works now

1. Welcome. The name, one line of title and a small black Start button, with 14 photos around the edges. The title fades in first, then the photos. Three dots switch between three short welcome lines. Start fades the words out, the 14 photos move into the middle of the canvas and the rest pop in from the centre outwards. The bar slides up last.
2. Canvas. Background `#F5F5F5`. Every piece sits on a large hex grid with 219 px between neighbours. The middle photo is 184 px and sizes fall to 115, 102, 96 and then 90 px as you move out, the same steps we measured. Drag to move around. It glides for about a second and a half after you let go. Zoom with the minus and plus buttons at the bottom right, or pinch on a trackpad.
3. Filters. A white bar at the bottom with Type, Room, Wood and Size. Opening one hides the active chips and slides the bar down, then a round close button grows in the middle and the choices rise in one by one. Closing plays it backwards. Timings follow the reference, for example 400 ms for the bar and a 60 ms step between chips.
4. Type and Room are chip pyramids around the close button. Type uses ten families in place of the 38 old types so it fits one pyramid. Wood is a half wheel of ten browns from light on the left to dark on the right, made from the same four colours as the old slider. Tap as many as you like. Size is a half dial with two red knobs, from Small to Statement.
5. Active filters show as small chips above the bar, each with a dot and a cross. Two or more chips add Clear all. The filters live in the address, so a copied link opens the same view.
6. Hover on a photo grows it to 1.3 times over one second. Every button turns red `#EF6B6B` on hover, as on the reference.
7. Tap a photo. It moves to the upper middle and grows to about three times its size while the others shrink and move away. Below it sit the piece number, the type, a heart, a round close button, Request, and tags for rooms, wood tone, size and use. The sharper photo fades in once it loads.
8. Photos fade in over 0.6 s as their sheet loads. Only photos near the screen are drawn, so phones stay within memory.

Kept from before: shortlist with compare, share link, WhatsApp and the request brief, data saver, piece numbers and the offline cache. Old shared links still open, and their type and wood tone carry over.

Dropped: the six questions, the results page and the match percentages, since the reference has none of these. The room feel and daily use questions have no filter now.

Fonts: Futura where the device has it, which includes iPhone and Mac, then Century Gothic on Windows, then the system font. No font file was downloaded.

Tested at 1280 by 800 and 375 by 812 with no console errors.

## Piece dialog put back, 26 November 2026

Owner: "revert that opened dialog to how it was before".

Tapping a piece opens the old dialog again. The photo flies from its tile into the left half, and the panel grows out of the tile. The right half has the rooms, the type, the reasons it fits, Save to shortlist, Request this piece and the piece number. It uses the old cream colours and the Fraunces and Hanken Grotesk fonts. The reasons now come from the filters you picked, since the match scores are gone. Tested at 1280 by 800 and 375 by 812 with no console errors.

## Old page back, with the new bottom selection, 26 November 2026

Owner: "i loved how the images reorder as you select options before. so revert that part too. revert everything, the only thing is instead of teh question, i love the new selection at the bottom". Also: "when you open an image, it stretches. verfically".

1. Everything is back to the version before the Vitra rebuild. That covers the welcome ring, the tiles that sort into a cloud by match, the results page with match percentages, the photo dialog, the colours and the fonts.
2. The question card is gone. In its place is the Vitra style bar at the bottom with Type, Room, Wood and Size, the chip rows, the brown wood wheel from light to dark, the size dial with two knobs and the active filter chips above the bar. A fifth button, Matches, opens the results page. Change on the results page opens the right panel.
3. The tiles sort with the same scoring as before. The filters feed it in place of the answers. Type and room count the most, then wood tone, then size. The room feel and daily use answers have no filter now.
4. Stretched photo fix. In the canvas version the photo flying into the dialog was pulled to the height of its box. The old dialog code crops it square, and the small thumbnail under it is now square too.
5. Links hold the filters as before. Old links with answers still open.

The Vitra canvas version is kept in the scratchpad as `src.vitra-canvas.html`. Tested at 1280 by 800 and 375 by 812 with no console errors.

## No grey box when a photo opens, 26 November 2026

Owner: "the images when i tap opens, and then shows grey and after a secons loads well".

The dialog waited for the big photo file before it showed anything, so the box stayed grey until it arrived. Now the small photo the page already has sits underneath and shows at once, and the sharp one fades in on top when it lands. The big photo also starts downloading the moment a finger or mouse goes down on a tile, a little before the tap ends.

## Bigger photo, less text in the dialog, 26 November 2026

Owner: "i want the image to be more prominent ... keep the category, the name, the match. and the ctas but the rest are unncessary".

1. On a phone the photo now takes about 72% of the dialog height, up from about 60%. It fills its box and is cropped from the middle, so it never stretches.
2. On a computer the photo column is now about 60% of the width.
3. The dialog keeps the rooms, the name, the match, Save to shortlist and Request this piece. The piece number line and the list of reasons are hidden. The piece number still goes into the WhatsApp brief.

## Scrollable grid and a Pexels style photo page, 26 November 2026

Owner: "when i click on Start at the beginning, the grid isnt moving when i try to scroll down", and "you know how prominent these images are loaded when you open them on pexels".

1. After Start, with no filters picked, the grid now scrolls through all 1,026 pieces. Only rows within about one screen of view are drawn, and rows fade in as you reach them, which keeps phones within memory. As soon as you pick a filter, the page goes back to the sorted cloud.
2. Source for the dialog: a Pexels photo page, https://www.pexels.com/photo/rustic-wooden-table-and-chairs-in-sunlit-room-37895915/, read in the browser on 26 November 2026. On a computer it opens a panel about 980 px wide and the full window tall over a backdrop at 90% black. The photographer and the buttons sit in a bar at the top and the photo fills most of the height below, shown whole. We measured that layout only and copied no code or text.
3. On a computer our dialog now does the same. It is a tall panel over a backdrop at 90% dark brown, with the rooms, name, match and buttons in a bar on top and the whole photo below, as large as the window allows. On a phone it keeps the tall photo on top with the text under it.

## Walnut night trial and a photo wall start screen

The owner asked to see the Walnut night palette and to replace the start ring with photos everywhere and the same words on a card in the middle.

1. Colours. The page is #101010 and panels are #1C1612. Text is the old sawdust cream #F4EDE2, muted text is #A89886, and the accent is the wood tone #C79A64 from our own photos. The dark page comes from the Vitra finder's #101010 and the Pexels photo backdrop at 90% black.
2. Start screen. Columns of square photos fill the screen and drift up and down slowly at different speeds. They fade in from the middle out. A dark card in the centre holds the same eyebrow, heading, text and Start button. On computers the wall moves a little with the mouse. With reduced motion the wall stays still.
3. This is a trial. It is on the review link as version 24 and is not pushed to the live site yet. The old version is saved as src.before-night.html in the scratchpad.

## Photo no longer spills past the dialog on open

On phones the photo box is taller than it is wide, so the square photo inside is wider than the dialog and the box crops its sides. The opening animation flew the photo to the full square, so for about a second it hung past the dialog edges, then snapped back when the crop took over. The photo now flies to the part you can see, which is the photo box cut down to the square photo. On phones it ends exactly at the dialog width, and on computers it lands on the square photo as before. Closing uses the same target.

## Light and dark themes, rounded corners on open, no photo count

1. Light mode is the old sawdust theme and dark mode is Walnut night. A button at the top switches between them. The first visit follows the phone or computer setting, and after that the page remembers the last choice. A small script in the head sets the theme before the page paints, so it never flashes the wrong colours.
2. The flying photo now lands with the same corners as the photo it turns into. On computers that is the photo's 8px corner. On phones the photo meets the top of the dialog, so its top corners take the dialog's 22px corner.
3. The owner asked not to give out the number of photos. The start text no longer says how many pieces there are, and the All pieces tab no longer shows a count.

## One file per photo, so the full photo shows sooner

The owner noticed that the full quality photo took a second or more to show. The cause was the file layout. Each full quality file in media/q held 4 photos at 960 px, about 557 KB a file, so opening one piece downloaded four photos.

1. tools/build_single.py now builds one file per photo from the originals in media/full, with the same centre square crop as before. media/s holds 720 px files at about 53 KB each, used for result cards and as the first layer of the open photo. media/l holds 1200 px files at about 130 KB each, used for the open photo. A test on 8 originals gave these averages.
2. The open photo is built in three layers: the thumbnail, then the 720 px file, then the 1200 px file, each fading in over the one below. The 720 px file is often already there from the result card.
3. Loading starts as soon as a finger touches a tile or card, and on computers when the mouse moves over a tile.
4. After the results show, the page fetches the 1200 px photo of the top 6 matches one at a time when the browser is idle.
5. Result cards still let go of their photos when they scroll far away, which keeps long lists light on phone memory.
6. Data saver skips the 1200 px files. The open photo uses the 720 px file, and the full quality button adds the 1200 px file.
7. media/q and media/m are no longer used by the page. They stay on disk for now. The licence log still names the media/q cell for each photo. The new files are the same photos with the same licences.

## Where the new photo files live

The review link can hold at most 512 files, and the single photo files are 2,052, so they cannot go there. The owner chose to upload only the photo files to the GitHub site first, as commit bd4ef01 in the grainhouse repo, and leave the live page unchanged. The live page still uses media/q and media/m.

The page now picks where to load the single photos from. On github.io and on this computer they sit next to the page. Anywhere else, such as the review link, they come from https://helloabdulsamad.github.io/grainhousestudio/. If those photos are blocked or fail, each photo falls back to the old four photo file in media/q, which the review link still holds. I tested the fallback with a copy pointed at a host that does not exist.
