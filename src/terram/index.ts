interface ViewProps {
    key?: string
    props?: Object
    children?: Object
    modifies?: string | Modifiers
}

export enum Modifiers {
    itself = 'itself'
}

export const View = (viewProps: ViewProps) => {
    return { type: 'View', key: viewProps.key, props: viewProps.props, children: viewProps.children }
}

export const Text = (viewProps: ViewProps) => {
    return { type: 'Text', key: viewProps.key, props: viewProps.props, children: viewProps.children }
}

export const Image = (viewProps: ViewProps) => {
    return { type: 'Image', key: viewProps.key, props: viewProps.props}
}

export const ScrollView = (viewProps: ViewProps) => {
    return { type: 'ScrollView', key: viewProps.key, props: viewProps.props, children: viewProps.children }
}

export const TouchOpacity = (viewProps: ViewProps) => {
    return { type: 'TouchableOpacity', key: viewProps.key, props: viewProps.props, children: viewProps.children }
}