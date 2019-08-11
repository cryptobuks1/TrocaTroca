export const environment = {
    production: true,
    api: {
        protocol: 'http',
        host: 'localhost:8000',
        get url() {
            return `${this.protocol}://${this.host}/api`
        }
    },
    baseFilesUrl: 'http://192.168.0.104:8000/storage'
};
