"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[2230],{6287:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=a(5893),n=a(1151);const l={sidebar_position:4},t="Players",i={id:"game/players",title:"Players",description:"The Player is a core class that represents a user",source:"@site/docs/game/players.md",sourceDirName:"game",slug:"/game/players",permalink:"/game/players",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/players.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Board Structure",permalink:"/game/board"},next:{title:"Actions",permalink:"/game/actions"}},o={},c=[{value:"Player List",id:"player-list",level:2},{value:"Current player",id:"current-player",level:2},{value:"Customize player",id:"customize-player",level:2},{value:"Player Board elements",id:"player-board-elements",level:2},{value:"Profile badge",id:"profile-badge",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",profilebadge:"profilebadge",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"players",children:"Players"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"../api/classes/Player",children:(0,s.jsx)(r.code,{children:"Player"})})," is a core class that represents a user\nplaying the game. Each game will have its own player class that contains any\nspecial properties and methods particular to the game, such as ",(0,s.jsx)(r.code,{children:"player.score()"}),"\nor ",(0,s.jsx)(r.code,{children:"player.isDealer"}),". Boardzilla will manage seating the players to start the\ngame, and show each player what actions they can perform. The player object will\nbe passed back to you in your actions when the players perform them."]}),"\n",(0,s.jsx)(r.h2,{id:"player-list",children:"Player List"}),"\n",(0,s.jsxs)(r.p,{children:["The current list of players is always available as\n",(0,s.jsx)(r.a,{href:"../api/classes/Game#players",children:(0,s.jsx)(r.code,{children:"game.players"})})," which returns an Array-like of\nplayers with other special methods added. The array is in the order the players\nwill normally act, but can be re-ordered with\n",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection#sortby",children:(0,s.jsx)(r.code,{children:"sortBy"})}),"."]}),"\n",(0,s.jsx)(r.admonition,{title:"player order vs table position",type:"warning",children:(0,s.jsxs)(r.p,{children:["Player order is not always the same as the seating order around the\ntable. Boardzilla will begin the game with players in order based on seating,\nbut if the order is changed, then ",(0,s.jsx)(r.code,{children:"game.players"})," will be in turn order, but\nlooking at ",(0,s.jsx)(r.a,{href:"../api/classes/Player#position",children:(0,s.jsx)(r.code,{children:"player.position"})})," or\n",(0,s.jsx)(r.a,{href:"../api/classes/Game#inpositionorder",children:(0,s.jsx)(r.code,{children:"game.players.inPositionOrder()"})})," will tell\nyou what the seating order is."]})}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection",children:"the full API"})," for ",(0,s.jsx)(r.code,{children:"PlayerCollection"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"current-player",children:"Current player"}),"\n",(0,s.jsx)(r.p,{children:"Boardzilla has a concept of a current player, that is currently allowed to\nact. If not otherwise specified, when presenting possible player actions, they\nare presented for the current player, and no other player can act until their\nturn."}),"\n",(0,s.jsxs)(r.p,{children:["The current player is available by calling\n",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection#current",children:(0,s.jsx)(r.code,{children:"game.players.current()"})}),". You can set\nthe current player, with\n",(0,s.jsx)(r.a,{href:"../api/classes/Player#setcurrent",children:(0,s.jsx)(r.code,{children:"player.setCurrent()"})}),". Typically however,\nwhen letting each player take turns, you will simply use\n",(0,s.jsx)(r.a,{href:"flow#eachplayer",children:(0,s.jsx)(r.code,{children:"eachPlayer"})})," which automatically sets the current player."]}),"\n",(0,s.jsxs)(r.p,{children:["It is possible for ",(0,s.jsx)(r.strong,{children:"multiple"})," players to be considered current, in which case\nthese player can act simultaneously. You can set multiple players by calling\n",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection#setcurrent",children:(0,s.jsx)(r.code,{children:"game.players.setCurrent()"})})," with\nan array. In these cases, you must use\n",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection#allcurrent",children:(0,s.jsx)(r.code,{children:"game.players.allCurrent()"})})," to\nretrieve the list of current players rather than\n",(0,s.jsx)(r.a,{href:"../api/classes/PlayerCollection#current",children:(0,s.jsx)(r.code,{children:"game.players.current()"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"../api/classes/Player",children:"the full API"})," for ",(0,s.jsx)(r.code,{children:"Player"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"customize-player",children:"Customize player"}),"\n",(0,s.jsxs)(r.p,{children:["It is common to subclass the ",(0,s.jsx)(r.a,{href:"../api/classes/Player",children:(0,s.jsx)(r.code,{children:"Player"})})," class with a\nplayer class suited to a particular game. For this reason, installing Boardzilla\nautomatically creates this subclass in ",(0,s.jsx)(r.code,{children:"game/index.ts"}),", to which you can add\nproperties and methods to it as you progress. Typically this is where you keep\nper-player state, e.g. any per-player scoring."]}),"\n",(0,s.jsxs)(r.p,{children:["The player object is used in many places in Boardzilla. Most importantly, it is\nthe argument sent to every ",(0,s.jsx)(r.a,{href:"actions",children:"Action"}),". For this reason, the Player\nsubclass for your game is passed as an argument to\n",(0,s.jsx)(r.a,{href:"/api/modules#creategame",children:"createGame"})," so that every method and object that\nuses player has the Typescript generic applied to it so it understands the\nproperties and methods of ",(0,s.jsx)(r.em,{children:"your game's"})," Player."]}),"\n",(0,s.jsx)(r.h2,{id:"player-board-elements",children:"Player Board elements"}),"\n",(0,s.jsxs)(r.p,{children:["As described in ",(0,s.jsx)(r.a,{href:"board#ownership",children:"Board Structure"}),", player's can own elements of the board\nby setting its ",(0,s.jsx)(r.code,{children:"player"})," property to the player you choose. This marks the\nelement as being assigned to this player, e.g. the player mat, the player's\nhand, the player's unique tokens. All elements that enter a space assigned to a\nplayer are considered to be \"owned\" by that player, and are accessible using the\n",(0,s.jsx)(r.a,{href:"../api/classes/Player#my",children:"player.my"})," and\n",(0,s.jsx)(r.a,{href:"../api/classes/Player#allmy",children:"player.allMy"})," methods for finding respectively one\nor many owned elements."]}),"\n",(0,s.jsx)(r.h2,{id:"profile-badge",children:"Profile badge"}),"\n",(0,s.jsxs)(r.p,{children:["It is generally good practice to place the\n",(0,s.jsx)(r.a,{href:"../api/modules#profilebadge",children:(0,s.jsx)(r.profilebadge,{})})," component into the UI to mark the\nplayer's area of the board and show information about the player, such as\nscore. This automatically displays if it's the player's turn, whether they're\nonline, and links to their profile, if any. It can be further customized with\nCSS."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,r,a)=>{a.d(r,{Z:()=>i,a:()=>t});var s=a(7294);const n={},l=s.createContext(n);function t(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);