interface GoDoggyRoutesStructure {
    name: string
    path: string
    title?: string
}

export interface GoDoggyRouteLayout {
    home: {
        root: GoDoggyRoutesStructure
    },
}