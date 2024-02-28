// jest.config.js
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['.test.js', 'js', 'jsx', 'ts', 'tsx'],
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '\\.(ts|tsx)$': 'ts-jest',
    },
};
