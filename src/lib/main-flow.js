
function percent(top, left, width, height) {
    //percentage to window size in pixels
    top = top * screen.availHeight / 100
    left = left * screen.availWidth / 100
    width = width * screen.availWidth / 100
    height = height * screen.availHeight / 100
    return {
        top: `${top}`,
        left: `${left}`,
        width: `${width}`,
        height: `${height}`
    }
}

function randomPos(width, height) {
    width = width * screen.availWidth / 100
    height = height * screen.availHeight / 100
    return {
        top: `${Math.floor(Math.random() * (screen.availHeight - height))}`,
        left: `${Math.floor(Math.random() * (screen.availWidth - width))}`,
        width: `${width}`,
        height: `${height}`
    }
}

function posGrid(rows, cols, posRow, posCol) {
    const NAVBAR_HEIGHT = 64
    const OFFSET_MENUEBAR = screen.height - screen.availHeight
    console.log('posGrid', rows, cols, posRow, posCol)
    const rowSize = (screen.availHeight - (NAVBAR_HEIGHT * rows)) / rows
    const colSize = screen.availWidth / cols
    console.log('rowSize', rowSize, screen.availHeight, rows)
    return {
        top: `${(posRow * rowSize) + (posRow * NAVBAR_HEIGHT) + OFFSET_MENUEBAR}`,
        left: `${posCol * colSize}`,
        width: `${colSize}`,
        height: `${rowSize}`
    }
}


export const createPopup = (
    url,
    params = {},
    pos = randomPos(20, 20),
    name = Math.random().toString()) => {
    console.log('createPopup', url, params, pos, name)
    let searchParams = new URLSearchParams(params)
    console.log('searchParams', searchParams, searchParams.toString())
    if (searchParams.size > 0) url = url + '?' + searchParams.toString()
    const features = [
        `left=${pos.left}`,
        `top=${pos.top}`,
        `width=${pos.width}`,
        `height=${pos.height}`,
        `menubar=no`,
        `toolbar=no`,
        `location=no`,
        `status=no`,
        `resizable=yes`,
        `scrollbars=no`
    ].join(",");
    // (crbug.com/1153004): The onPopupClose beforeunload works with about:blank popups...
    return window.open(url, name, features);
};

// window.open(`/${gender}?p=${current - 1}`, `${gender}`, nextPageWindowString + ",popup,location=0");


const DEFAULT_MODULES = {
    text: {
        type: 'text',
        content: 'Hello world'
    },
    bgImg: {
        type: 'bgImg',
        url: 'https://picsum.photos/800/800'
    },
    circleText: {
        type: 'circleText',
        content: ['1Hello', '2world', '3again']
    },
    circleImg: {
        type: 'circleImg',
        url: ['https://picsum.photos/800/800', 'https://picsum.photos/200/200', 'https://picsum.photos/700/700']
    },
    circleTitle: {
        type: 'circleTitle',
        content: ['Hello', 'world', 'again']
    },
    circleAttr: {
        type: 'circleAttr',
        content: ['Hello', 'world', 'again']
        // duration: 2500
    },
}

function text(content = 'txt') {
    return [
            {
                type: 'text',
                content: content
            }
        ]
}


const mainFlow = [
    {
        she: {modules: []},
        he: {
            title: 'IT HAS TO START SOMEWHERE',
            modules: [{
                type: 'text',
                content: 'on the wrong side of the river bank'
            },
                {
                    type: 'bgImg',
                    filter: 1,
                    url: '/land1.gif',
                }
            ]
        }
    },
    {
        he: {
            pos: percent(50, 50, 35, 35),
            bgImg: '/waves.gif',
            modules: [
                {
                    type: 'text',
                    content: 'I had corona last week and Im feeling quite melancholic right now.'
                },
                {
                    type: 'circleAttr',
                    content: ['Somehow', 'winter arrived later', 'but now I can’t escape.']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(50, 20, 35, 20),
            modules: text('This is an experiment… a collection of fragments strung together. working title: „on the wrong side of the river bank“')
        }
    },
    { // 1
        she: null,
        he: {
            pos: percent(10, 20, 35, 80),
            modules: [
                {
                    type: 'bgImg',
                    url: '/weinachtsbaum.jpeg',
                    filter: false
                }
            ]
        }
    },
    {
        she: {
            pos: percent(50, 50, 35, 25),
            next: false,
            modules: [
                {
                    type: 'text',
                    content: 'This was our Christmas tree.'
                },
                {
                    type: 'circleText',
                    content: ['None of us had any Christmas decoration,', "(maybe that's  something to inherit and not to buy)", 'so each of us chose a sailor moon character, and we printed different images of them to hang them on the tree.']
                }
            ]
        }
    },
    {
        he: {
            pos: percent(10, 20, 35, 80),
            modules: [
                {
                    type: 'bgImg',
                    url: '/weinachtsbaum-sailor.jpeg',
                    filter: 1
                }
            ]
        }
    },
    { // 2
        she: {
            pos: percent(60, 80, 25, 40),
            onMount() {
                const config = {
                    url: '/sailor-saturn.jpeg',
                    filter: 1
                }
                createPopup('/singles/img', {config: JSON.stringify(config)}, randomPos(30, 40))
            },
            modules: [
                {
                    type: 'bgImg',
                    url: '/sailor-saturn.jpeg',
                    filter: null
                }
            ]
        },
        he: {
            pos: percent(30, 10, 80, 30),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'superBig',
                    content: '✷*  🎀  1  🎀  *✷'
                }
            ]
        }
    },
    {
        she: {
            pos: percent(50, 50, 35, 25),
            modules: [
                {
                    type: 'text',
                    content: 'After Christmas this year, I got a late Christmas gift on the 26. of December.'
                }
            ]
        }
    },
    {
        she: {
            pos: percent(15, 50, 30, 75),
            modules: [
                {
                    type: 'bgImg',
                    url: '/schauble.jpg',
                    filter: 1
                }
            ]

        },
        he: {
            pos: percent(10,10,30,10),
            modules: text('Wolfgang Schäuble died.')
        }
    },
    {
        she: {
            pos: percent(50, 50, 35, 40),
            next: false,
            modules: [
                {
                    type: 'bgImg',
                    url: '/waves4.gif',
                    filter: 10
                },
                {
                    type: 'circleText',
                    content: ['If you don’t know him, he is kind of the German Henry Kissinger.', 'Or maybe even the European one.', 'This brought back memories of the 2010 European debt crisis.', 'Where Schäuble was deeply involved in the austerity measurements / punishment of Greece', 'resulting in the sellout of Greek infrastructure to German and international companies to the enrichment of Germany.']
                }
            ]
        }
    },
    {
        he: {
            pos: percent(70,10,30,10),
            onMount() {
                createPopup('/singles/text', {txt: '»ein Land der Nichtstuer und Korrupteure«,<br> "a country of do-nothings and corruptors"'}, randomPos(40, 10))
                createPopup('/singles/text', {txt: 'jetzt müsse endlich »Schluss sein mit der Schummelei«;<br> Now "the cheating must finally come to an end"'}, randomPos(40, 10))
                createPopup('/singles/text', {txt: '»diese Griechen« seien pleite, aber Milliarden-Bettler«. <br> "these Greeks" are broke, but "beggars worth billions"'}, randomPos(40, 10))
                createPopup('/singles/text', {txt: 'Man dürfe jetzt »keineswegs die Faulheit der Griechen unterstützen«; <br> One should now "by no means support the laziness of the Greeks"'}, randomPos(40, 15))
                createPopup('/singles/text', {txt: 'schließlich sei »Griechenland im Grunde ein orientalisches Land«, <br> After all, "Greece is basically an oriental country"'}, randomPos(45, 10))
                createPopup('/singles/text', {txt: 'in Hellas herrschten »orientalische Lebensgesetze«. <br> Hellas is governed by "oriental laws of life"'}, randomPos(40, 10))

            },
            modules: text('Which has a long history…')
        }
    },
    {
        she: {
            pos: percent(0, 0, 100, 100),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'superBig',
                    content: 'This was my first political radicalization'
                }
            ]
        }
    },
    {
        she: null,
        he: {
            pos: percent(30, 10, 80, 30),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'superBig',
                    content: '✷*  🎀  2  🎀  *✷'
                }
            ]
        }
    },
    {
        she: {
            pos: percent(20,20,20,70),
            modules: [
                {
                    type: 'text',
                    content: 'school locker room.'
                },
                {
                    type: 'text',
                    content: 'The air is humid and damp of teenage boys.'
                },
                {
                    type: 'text',
                    content: 'Not the best flavor. '
                }
            ]
        }
    },
    {
        he: {
            pos: percent(20,60,20,70),
            title: 'Wasn’t the point that girls are desirable?    ',
            modules: [
                {
                    type: 'text',
                    content: 'A boy puts his hand around my wist and calls it a girls’ ankle. <br><br> I did not rebut.<br>I was confused. <br><br>How should I know that being “girly” was a bad thing?'
                }
            ]
        }
    },
    {
        she: {
            pos: percent(25, 50, 20,20),
            modules: text('One week later, I understood that it was meant as an insult.')
        }
    },
    {
        she: {
            pos: percent(25, 50, 20,40),
            title: 'sackkneifer',
            modules: [
                {
                    type: 'bgImg',
                    url: '/sackkneifer.jpg',
                    filter: false
                }
            ]
        }
    },
    {
        he: {
            pos: percent(20,60,20,70),
            title: 'Wasn’t the point that girls are desirable?    ',
            next: false,
            modules: [
                {
                    type: 'circleText',
                    content: [' Turns out, I was also wearing the wrong kind of underwear.', 'Probably the start of the conflict.', 'Mine were called Sackkneifer – ball-pincher', 'in contrast to boxer shorts, obviously the correct kind of underwear.']
                },
                {
                    type: 'bgImg',
                    url: '/boxershorts.webp',
                }
            ]
        }
    },
    {
        he: {
            pos: percent(25, 70, 20,40),
            title: 'BOXERSHORTS ',
            modules: [
                {
                    type: 'bgImg',
                    url: '/boxershorts.webp',
                    filter: 1
                }
            ]
        },
        she: {
            pos: percent(25, 50, 20,40),
            title: 'SACKKNEIFER ',
            modules: [
                {
                    type: 'bgImg',
                    url: '/sackkneifer.jpg',
                    filter: 1
                }
            ]
        }
    },
    {
        she: {
            pos: percent(0, 0, 100, 100),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'superBig',
                    content: 'This was my first political radicalization'
                }
            ]
        }
    },
    {
        he: {
            pos: percent(30, 10, 80, 30),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'superBig',
                    content: '✷*  🎀  3  🎀  *✷'
                },
                {
                    type: 'circleAttr',
                    content: ['Maybe', 'my first radicalization was', 'when was born as an alien.']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(10, 50, 35, 70),
            modules: [
                {
                    type: 'text',
                    content: 'I like the narrative of aliens.'
                },
                {
                    type: 'bgImg',
                    url: '/me-alien.jpeg'
                }
            ]
        }
    },
    {
        he: {
            pos: percent(20, 40, 30, 35),
            next: false,
            bgImg: '/sun1.gif',
            modules: [
                {
                    type: 'text',
                    content: '"Alien", as in',
                    class: 'big'
                },
                {
                    type: 'circleText',
                    content: ['other diverging worlds.', 'Other countries.', 'And other times.']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(10, 50, 35, 70),
            modules: [
                {
                    type: 'bgImg',
                    url: '/me-alien.jpeg',
                    filter: false
                }
            ]
        },
        he: {
            pos: percent(20, 40, 30, 35),
            next: false,
            modules: [
                {
                    type: 'text',
                    content: 'But also because aliens are fictional and defined by non-alien.',
                },
                {
                    type: 'circleText',
                    content: ['One-self can never be an alien', 'just the other']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(10, 50, 35, 70),
            modules: [
                {
                    type: 'text',
                    content: 'Our culture tricks us into making us aliens to ourselves.'
                },
                {
                    type: 'text',
                    content: 'We grow up understanding we are different.'
                },
                {
                    type: 'text',
                    content: 'But that difference is always defined for us in terms of absence of neurotypicality not as an equal, different being.'
                }
            ]
        },
    },
    {
        he: {
            pos: percent(20, 40, 30, 55),
            next: false,
            modules: [
                {
                    type: 'text',
                    content: 'The Anthropologist Mary Catherine Watson writing about power relations in Colonialism observed:',
                },
                {
                    type: 'text',
                    content: '“People who don’t wear shoes learn the language of people who do, not vice versa”'
                },
                {
                    type: 'circleText',
                    content: ['These words resonate with me from an autistic perspective. ', 'No,', 'don’t ask me to „put myself in your shoes“ when you don’t even think I can wear them.']
                }
            ]
        }
    },
    {
        he: {
            pos: percent(20, 15, 30, 60),
            bgImg: '/waves6.gif',
            modules: [
                {
                    type: 'text',
                    content: 'As a kid,'
                }
            ]

        },
        she: {
            pos: percent(20, 60, 30, 60),
            bgImg: '/waves6.gif',
            modules: [
                {
                    type: 'text',
                    content: 'I was always scared of the sandman.'
                }
            ]

        }
    },
    {
        he: {
            pos: percent(20, 15, 30, 60),
            modules: [
                {
                    type: 'bgImg',
                    url: '/sandmann.jpeg'
                },
                {
                    type: 'circleAttr',
                    duration: 2600,
                    content: ['At the same time,',
                        'my bedroom window had to be left open',
                        'in case peter-pan would realize',
                        'that he left a little kid',
                        'in the wrong universe',
                        'and carry me away',
                        'to a world of',
                        'pirates,',
                        'pixies,',
                        'and mermaids.']
                }
            ]
        },
        she: {
            bgImg: '/waves6.gif',
            pos: percent(20, 60, 30, 60),
            modules: text('Some guy coming into my room while I was sleeping and putting something in my eyes just felt like a relationship I wasn’t interested in.')
        }
    },
    {
        he: {
            pos: percent(20, 15, 30, 60),
            modules: [
                {
                    type: 'bgImg',
                    url: '/sandmann.jpeg'
                },
                {
                    type: 'circleAttr',
                    duration: 2600,
                    content: ['At the same time,',
                        'my bedroom window had to be left open',
                        'in case peter-pan would realize',
                        'that he left a little kid',
                        'in the wrong universe',
                        'and carry me away',
                        'to a world of',
                        'pirates,',
                        'pixies,',
                        'and mermaids.']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(20,30,40,60),
            next: false,
            modules: [
                {
                    type: 'circleImg',
                    filter: 1,
                    url: ['Sunflower1.png', 'Sunflower2.png']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(30,40,20,40),
            next: false,
            onMount() {
                const maxRows = 3
                const maxCols = 5
                for(let row = 0; row < maxRows; row++){ //this loops over the rows
                    for(let column = 0; column < maxCols; column++){ //this loops over the columns
                        const number = column + (row * maxCols)
                        createPopup('/singles/sunflower', {num: number}, posGrid(maxRows, maxCols, row, column), `sunflower${number}`)
                    }
                }
                // createPopup('/singles/sunflower', {}, posGrid(3, 5, 0, 0))
            },
            modules: [
                {
                    type: 'circleImg',
                    filter: false,
                    url: ['Sunflower1.png', 'Sunflower2.png']
                },
                {
                    type: 'text',
                    content: 'Fell free to try it out, Although I cannot promise you that it works.'
                },
                {
                    type: 'text',
                    content: 'But in the worst case, you just have a little snack in the morning and a way to spend some time. Eating sunflower seed is also a kind of stimming.'
                }
            ]
        }
    },
    {
        he: {
            pos: percent(20, 15, 40, 20),
            bgImg: '/waves6.gif',
            modules: text('While writing this right now,')
        }
    },
    {
        he: {
            pos: percent(70, 65, 40, 20),
            bgImg: '/waves6.gif',
            modules: [
                {
                    type: 'text',
                    content: 'I’m not sure where I’m going.'
                },
                {
                    type: "circleTitle",
                    duration: 2000,
                    content:['Digging up these stories', 'and talking about autism', 'is kind of my practice', 'right now,', ' I guess.']
                }
            ]
        },
        she: {
            next: false,
            modules: [
                {
                    type: 'circleText',
                    content: ['But for whom and why?',
                        'Now this text/performance is for you.',
                        'Although, should it be?',
                        'And to be honest,',
                        'maybe it’s more for myself?']
                }
            ]
        }
    },
    {
        she: {
            pos: percent(20, 0, 100, 60),
            bgImg: '/waves2.gif',
            modules: [
                {
                    type: 'text',
                    class: 'big',
                    content: 'And at the same time I’m certainly interested in these “live” performance moments <br><br> (also thinking about the transcription tool for the pub launch ) <br><br>I’m more interested in the process itself and not what’s there in the end. '
                }
            ]
        }
    },
    { // fin
        she: {
            pos: {
                top: 200,
                left: 100,
                width: 300,
                height: 300
            },
            modules: [
                {
                    type: 'text',
                    content: 'Like this is not even recorded…'
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/800/800'
                }
            ]
        },
        he: {
            pos: {
                top: 200,
                left: 500,
                width: 300,
                height: 300
            },
            modules: [
                {
                    type: 'text',
                    content: 'and now it’s over… and gone.'
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/800/800'
                }
            ]
        }
    },
    { // 4
        she: {
            pos: {
                top: 200,
                left: 300,
                width: 300,
                height: 300
            },
            modules: [
                {
                    type: 'text',
                    content: 'Hello world'
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/800/800'
                }
            ]
        },
        he: {
            pos: {
                top: 200,
                left: 700,
                width: 300,
                height: 300
            },
            modules: [
                {
                    type: 'text',
                    content: 'Hello world'
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/800/800'
                }
            ]
        }
    }
]


export default mainFlow
