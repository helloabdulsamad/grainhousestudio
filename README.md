# Grainhouse

A woodwork finder. You pick a type, a room, a wood tone or a size, and photos of real wood pieces sort themselves around you, so the closest matches come to the front. It has a light and a dark theme.

Live page: https://grainhouse.seeitlive.store/

## Photos

Every photo is a real stock photo from Unsplash or Pexels, used under their free licences. Neither licence asks for credit on the page. The photographer, photo page and camera for each one are listed in `licence-log.csv`.

Photos were checked for AI renders on 25 November 2026 by reading the camera details and looking at each doubtful photo by eye. Renders were replaced.

## Fonts

Fraunces and Hanken Grotesk, both under the SIL Open Font License.

## Files

| Path | What it is |
|---|---|
| index.html | The whole page, with the photo data inside |
| media/l | Large photos for the open piece, one to a file, 1200 px |
| media/s | Photos for result cards and the first layer of the open piece, one to a file, 720 px |
| media/q | Older large photos, four to a file, 960 px each. Kept as a fallback |
| media/m | Older result card photos, eight to a file. No longer used |
| media/t | Small photos for the grid, 64 to a file |
| fonts | The two web fonts |
| licence-log.csv | Source, photographer and licence of every photo |
