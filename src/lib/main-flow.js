
function percent(top, left, width, height) {
    //percentage to window size in pixels
    top = top * screen.height / 100
    left = left * screen.width / 100
    width = width * screen.width / 100
    height = height * screen.height / 100
    return {
        top: `${top}`,
        left: `${left}`,
        width: `${width}`,
        height: `${height}`
    }
}

function randomPos(width, height) {
    width = width * screen.width / 100
    height = height * screen.height / 100
    return {
        top: `${Math.floor(Math.random() * (screen.height - height))}`,
        left: `${Math.floor(Math.random() * (screen.width - width))}`,
        width: `${width}`,
        height: `${height}`
    }
}

function posToString(pos) {
    if (pos === undefined) return ''
    return `left=${pos.left},top=${pos.top},width=${pos.width},height=${pos.height}`
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


const mainFlow = [
    {
        she: {modules: []},
        he: {
            title: 'WE ARE NOT AS SMALL AS YOU THINK',
            modules: []
        }
    },
    { // 1
        she: null,
        he: {
            pos: percent(10, 20, 35, 80),
            // next: false,
            bgImg: '/weinachtsbaum.jpeg',
            onMount() {
                 createPopup('/singles/text', {txt: 'test sdf erf'}, randomPos(20, 10))

            },
            modules: [
                {
                    type: 'circleAttr',
                    content: ['Hello', 'world', 'again']
                }
            ]
        }
    },
    { // 2
        she: null,
        he: {
            pos: {
                top: 400,
                left: 600,
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
    },
    { // 3
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
                left: 500,
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
