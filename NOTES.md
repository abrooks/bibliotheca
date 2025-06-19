Bibliotheke is single page web app (SPA) a resource for filtering, sorting and
displaying a list of media (books, audiobooks, videos, podcasts, podcast
episodes, etc.). The set of media can be tagged with different topical tags
which can be used for filtering. We also want to have details of how many pages
(or viewing/listening minutes), release/copyright date, number of stars (i.e.
rating), pre-requisites (i.e.  things that should be read/watched/listened to
before this).

There should be different ways to filter, sort and view a set of media. As
these are captured in the URL as they are changed so a copy of the current URL
(basically anchor context) should reproduce the current page view.

The out.yaml file is the set of resources that we will display. The SPA should
pull in out.yaml and display it in a tabular form.

Controls above the table should enable filtering according to tag, media type,
duration/length, author, etc.

The titles, summaries, and some of the other fields can get pretty long. These should wrap to remain on screen.

The url field should be a link destination for the title.



