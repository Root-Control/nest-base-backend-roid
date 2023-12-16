declare const _default: () => {
    port: number;
    db: {
        connectionString: string;
    };
    jwt: {
        privateKey: string;
        publicKey: string;
        ttl: number;
    };
};
export default _default;
