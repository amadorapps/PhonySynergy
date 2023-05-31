type Config = {
    LISTEN_PORT: number;
    ORG_NAME: string;
};


const DEFAULT_CONFIG: Config = {
    LISTEN_PORT: 5080,
    ORG_NAME: "Phony Synergy",
}


export default DEFAULT_CONFIG;
export type { Config };