import { View, Image, Text } from 'terram'
import { ImageUrls } from 'recursos'

const Styles = {
    body: {
        flex: 1
    },
    preview: {
        flex: 1,
    },
    image: {
        width: 350, height: 350,
        resizeMode: 'contain', zIndex: 1,
        left: -60
    },
    previewView: {
        height: 300, width: 200,
        position: 'absolute', blackgroundColor: 'black',
        borderRadius: 2, zIndex: 0,
        right: 10, top: 30, padding: 16,
        alignItems: 'flex-end', justifyContent: 'center'
    },
    previewTitle: {
        fontWeight: '900', fontSize: 24, width: 120,
        textAlign: 'left', color: 'white',
    },
    previewSubtitle: {
        fontSize: 16, fontWeight: '400',
        textAlign: 'left', color: 'white',
        width: 120
    }
}

const Preview =
    View({ key: 'home-preview', props: { style: Styles.preview }, children: [
        Image({ props: { style: Styles.image, source: { uri: ImageUrls.screenshot }} }),
        View({ props: { style: Styles.previewView }, children: [
            Text({ props: { style: Styles.previewTitle }, children: 'Join the team'}),
            Text({ props: { style: Styles.previewSubtitle }, children: 'Let\'s get you started!' })
        ]})
    ]})

export const Body = View({ key: 'home-body', props: { style: Styles.body }, children: Preview })