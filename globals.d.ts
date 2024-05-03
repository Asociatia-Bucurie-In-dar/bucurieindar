interface Gtag {
    (command: 'config', targetId: string, config?: object): void;
    (command: 'set', config: object): void;
    (command: 'event', action: string, params?: object): void;
    (command: 'js', date: Date): void;
}

declare global {
    interface Window {
        gtag: Gtag;
        dataLayer: any[];
    }
}

export {};