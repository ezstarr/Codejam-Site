import Html exposing (..)
import Html.Attributes exposing (..)
import String

import Center
import Skeleton



main =
  Skeleton.skeleton
    "TimeEnjoyed's codejam"
    Skeleton.Docs
    [ Center.markdown "600px" content
    , div [ class "docs-buttons" ]
        [ a [ href "https://guide.elm-lang.org/" ] [ text "Discord" ]
        , a [ href "https://package.elm-lang.org/" ] [ text "Twitch" ]
        ]
    , Center.markdown "600px" additionalResources
    ]


content = """

# Goal

The goal of this CodeJam is to challenge ourselves to build something engaging to share with others, ideally with others, and… to make it as fun as possible. 😀 It’s an opportunity to exercise skills in collaboration, creativity, and learning. How does it feel to work in a team? I don’t know - let’s find out!
"""


additionalResources = """

### Additional Resources

* [Install](https://guide.elm-lang.org/install/elm.html)
* [FAQ](http://elm-community.github.io/elm-faq/)
* [Syntax](/docs/syntax)
* [Syntax vs JS](/docs/from-javascript)
* [Style Guide](/docs/style-guide)
* [Package Design](http://package.elm-lang.org/help/design-guidelines)
* [Writing Documentation](http://package.elm-lang.org/help/documentation-format)
* [Advanced Topics](/docs/advanced-topics)

"""
