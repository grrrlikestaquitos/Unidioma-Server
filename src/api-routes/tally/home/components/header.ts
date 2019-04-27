import { View, Text, TouchOpacity, Modifiers } from 'terram'

const Styles = {
    header: {
        width: 380, height: 50,
        flexDirection: 'row', justifyContent: 'space-between',
        alignContent: 'center', alignItems: 'center',
        paddingHorizontal: 20, paddingVertical: 6,
        backgroundColor: 'black',
    },
    logo: {
        flexDirection: 'row'
    },
    container: {
        alignSelf: 'flex-end'
    },
    blackBox: {
        width: 2, height: 2, backgroundColor: 'white'
    },
    text: {
        fontSize: 22, fontWeight: 'bold', color: 'white'
    },
    playButton: {
        borderRadius: 2, borderWidth: 1,
        borderColor: 'white', height: 30,
        justifyContent: 'center', alignContent: 'center'
    },
    playText: {
        fontWeight: 'bold', fontSize: 12,
        color: 'white', marginHorizontal: 8
    }
}


const Logo =
    View({ props: { style: Styles.logo }, children: [
        View({ props: { style: Styles.container }, children: [
            View({ props: { style: [Styles.blackBox, { marginBottom: 1.5 }] }}),
            View({ props: { style: [Styles.blackBox, { marginBottom: 5 }] }})
        ]}),
        Text({ props: { style: Styles.text }, children: 'TALLY'})
    ]})

const PlayNow =
    TouchOpacity({ props: { style: Styles.playButton }, modifies: Modifiers.itself, children: [
        Text({ key: 'play-now', props: { style: Styles.playText }, children: 'PLAY NOW' })
    ]})

export const Header = View({ props: { style: Styles.header }, children: [Logo, PlayNow] })