
function percent(top, left, width, height) {
    //percentage to window size in pixels
    top = top * window.innerHeight / 100
    left = left * window.innerWidth / 100
    width = width * window.innerWidth / 100
    height = height * window.innerHeight / 100
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
        he: {modules: []}
    },
    { // 1
        she: null,
        he: {
            pos: percent(20, 20, 80, 50),
            modules: [
                {
                    type: 'text',
                    content: 'Hello world'
                },
                {
                    type: 'bgImg',
                    url: 'https://picsum.photos/200/300'
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
                    url: 'https://picsum.photos/200/300'
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
                    url: 'https://picsum.photos/200/300'
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
                    url: 'https://picsum.photos/200/300'
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
                    url: 'https://picsum.photos/200/300'
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
                    url: 'https://picsum.photos/200/300'
                }
            ]
        }
    }
]


export default mainFlow
