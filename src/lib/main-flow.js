
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
            pos: percent(20, 20, 80, 60),
            next: false,
            modules: [
                {
                    type: 'circleText',
                    content: ['1Hello', '2world', '3again']
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/800/800'
                },
                {
                    type: 'circleTitle',
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
