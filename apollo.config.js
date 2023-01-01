// apollo.config.js
module.exports = {
    client: {
        service: {
            name: 'epigra-task',
            url: 'https://rickandmortyapi.com/graphql',
        },
        includes: ['src/**/*.vue', 'src/**/*.js'],
    },
};
